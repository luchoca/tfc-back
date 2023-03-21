import { Module } from "@nestjs/common";
import { IngredientesService } from "./ingredientes.service";
import { IngredientesController } from "./ingredientes.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Ingrediente, IngredienteSchema } from "./schema/ingrediente.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ingrediente.name,
        schema: IngredienteSchema,
      },
    ]),
  ],
  exports: [IngredientesService],
  controllers: [IngredientesController],
  providers: [IngredientesService],
})
export class IngredientesModule {}
