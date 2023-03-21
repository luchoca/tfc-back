import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductosModule } from "./productos/productos.module";
import { CarritoModule } from "./carrito/carrito.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { IngredientesModule } from "./ingredientes/ingredientes.module";

@Module({
  imports: [
    AuthModule,
    IngredientesModule,
    ProductosModule,
    CarritoModule,
    UsuarioModule,
    MongooseModule.forRoot(
      "mongodb+srv://luchoca:12345@cluester1.cf3pjgk.mongodb.net/test"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
