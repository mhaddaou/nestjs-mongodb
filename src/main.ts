import { NestFactory } from '@nestjs/core';
import {ValidationPipe} from '@nestjs/common'
import { AppModule } from './app.module';
import { MongooseModule } from '@nestjs/mongoose';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    
  await app.listen(3000);
}
bootstrap();
