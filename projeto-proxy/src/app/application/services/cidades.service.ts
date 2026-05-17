import { Injectable } from "@angular/core";
import { GetCidadesUseCase } from "../../domain/use-cases/get-cidades.usecase";

@Injectable({ providedIn: 'root' })
export class CidadesService {
  constructor(private getCidadesUseCase: GetCidadesUseCase) {}

  getCidades() {
    return this.getCidadesUseCase.execute();
  }
}