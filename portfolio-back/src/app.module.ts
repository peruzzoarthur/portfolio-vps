import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { PostsModule } from './posts/posts.module';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ImagesModule } from './images/images.module';
import { SeriesModule } from './series/series.module';
import { AuthorsModule } from './authors/authors.module';
import { CoreModule } from './core/core.module';
import { HealthModule } from './health/health.module';
import { metricProviders } from './prometheus/metrics';
import { MetricsMiddleware } from './prometheus/metrics.middleware';
import { PrometheusModule } from './prometheus/prometheus.module';

@Module({
  imports: [
    PostsModule,
    ImagesModule,
    SeriesModule,
    AuthorsModule,
    DevtoolsModule.register({ http: process.env.NODE_ENV !== 'production' }),
    CoreModule,
    HealthModule,
    PrometheusModule,
  ],
  providers: [...metricProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MetricsMiddleware).forRoutes('*');
  }
}
