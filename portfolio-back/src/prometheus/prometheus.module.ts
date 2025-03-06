import { Module } from '@nestjs/common';
import { PrometheusModule as NestPrometheusModule } from '@willsoto/nestjs-prometheus';
import { PrometheusController } from '../prometheus/prometheus.controller';

@Module({
  imports: [
    NestPrometheusModule.register({
      defaultMetrics: {
        enabled: true,
      },
      defaultLabels: {
        app: 'backend',
      },
    }),
  ],
  controllers: [PrometheusController],
  exports: [NestPrometheusModule],
})
export class PrometheusModule {}

