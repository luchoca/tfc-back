import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductosModule } from "./productos/productos.module";
import { CarritoModule } from "./carrito/carrito.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProductosModule,
    CarritoModule,
    UsuarioModule,
    MongooseModule.forRoot(
      "mongodb+srv://luchoca:12345@cluester1.cf3pjgk.mongodb.net/test"
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
