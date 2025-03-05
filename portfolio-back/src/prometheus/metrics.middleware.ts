import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter, Histogram } from 'prom-client';

@Injectable()
export class MetricsMiddleware implements NestMiddleware {
  constructor(
    @InjectMetric('http_requests_total') private readonly requestsCounter: Counter<string>,
    @InjectMetric('http_request_duration_seconds') private readonly requestDuration: Histogram<string>,
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    
    res.on('finish', () => {
      const duration = Date.now() - start;
      const path = req.route ? req.route.path : req.path;
      
      this.requestsCounter.inc({
        method: req.method,
        status: res.statusCode,
        path,
      });
      
      this.requestDuration.observe(
        {
          method: req.method,
          status: res.statusCode,
          path,
        },
        duration / 1000,
      );
    });
    
    next();
  }
}

