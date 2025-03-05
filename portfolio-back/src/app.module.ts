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
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { HealthModule } from './health/health.module';
import { metricProviders } from './prometheus/metrics';
import { MetricsMiddleware } from './prometheus/metrics.middleware';

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
