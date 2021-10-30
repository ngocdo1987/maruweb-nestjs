import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // Use Fastify instead of Express
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // Use Swagger for API
  const config = new DocumentBuilder()
    .setTitle('Maruweb NestJS API')
    .setDescription('Maruweb NestJS API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apiDocs', app, document);

  await app.listen(3001);
}
bootstrap();
