import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { restaurentdatabase } from './databse.config';
import { Ordermodule } from './restaurant-practice/Orders/order-module';
import { Menumodule } from './restaurant-practice/Menu/menu-module';
import { AuthModule } from './restaurant-practice/Auth/auth.module';
@Module({
  imports : [TypeOrmModule.forRoot(restaurentdatabase),Ordermodule,Menumodule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
