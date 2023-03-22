import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductosModule } from "./productos/productos.module";
import { CarritoModule } from "./carrito/carrito.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { IngredientesModule } from "./ingredientes/ingredientes.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    AuthModule,
    IngredientesModule,
    ProductosModule,
    CarritoModule,
    UsuarioModule,
    //Configuración para variables de entorno
    // ConfigModule,
    // ConfigModule.forRoot({
    //   envFilePath: `${process.cwd()}/environments/.env.${process.env.ENV.trim()}`,
    //   isGlobal: true,
    // }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>("URI"),
    //   }),
    // }),
    MongooseModule.forRoot(
      "mongodb+srv://luchoca:12345@cluester1.cf3pjgk.mongodb.net/test"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
