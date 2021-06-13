import { RomanController } from '@/controllers/roman/roman.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { RomanService } from '../services/roman/roman.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, RomanController],
  providers: [AppService, RomanService],
})
export class AppModule {}
