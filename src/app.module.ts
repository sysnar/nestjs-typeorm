import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), MovieModule, BoardsModule, AuthModule],
})
export class AppModule {}
