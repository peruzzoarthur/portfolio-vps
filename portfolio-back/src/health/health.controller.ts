import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { PrometheusController } from '../prometheus/prometheus.controller';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    // private prometheusController: PrometheusController,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([]);
  }
}

