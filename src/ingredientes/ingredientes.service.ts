import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateIngredienteDto } from "./dto/create-ingrediente.dto";
import { UpdateIngredienteDto } from "./dto/update-ingrediente.dto";
import { Ingrediente, IngredienteDocument } from "./schema/ingrediente.schema";

@Injectable()
export class IngredientesService {
  constructor(
    @InjectModel(Ingrediente.name)
    private ingredienteModule: Model<IngredienteDocument>
  ) {}

  create(createIngredienteDto: CreateIngredienteDto) {
    return this.ingredienteModule.create(createIngredienteDto);
  }

  findAll() {
    return this.ingredienteModule.find();
  }

  findOne(id: number) {
    return this.ingredienteModule.findById(id);
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return this.ingredienteModule.findByIdAndUpdate(id, updateIngredienteDto);
  }

  remove(id: number) {
    return this.ingredienteModule.findByIdAndDelete(id);
  }
}
