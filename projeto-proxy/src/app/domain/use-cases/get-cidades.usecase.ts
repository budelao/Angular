import { Injectable, inject } from "@angular/core";
import { CidadesRepository } from "../repositories/cidades.repository";
import { Cidades } from "../entities/cidades.entity";
import { Observable } from "rxjs/internal/Observable";

@Injectable({ providedIn: 'root' })
export class GetCidadesUseCase {
  private cidadesRepository = inject(CidadesRepository);

  execute(): Observable<Cidades[]> {
    return this.cidadesRepository.getCidades();
  }
}