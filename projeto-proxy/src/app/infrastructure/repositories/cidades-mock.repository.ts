import { of, Observable } from "rxjs";
import { Cidades } from "../../domain/entities/cidades.entity";
import { CidadesRepository } from "../../domain/repositories/cidades.repository";

export class CidadesMockRepository implements CidadesRepository {
  getCidades(): Observable<Cidades[]> {
    // Mock implementation - replace with actual API call
    return of([
      new Cidades(1, "São Paulo", 1),
      new Cidades(2, "Rio de Janeiro", 2),
      new Cidades(3, "Belo Horizonte", 3)
    ]);
  }
}