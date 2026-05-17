import { Observable } from "rxjs";
import { Cidades } from "../entities/cidades.entity";

export abstract class CidadesRepository {
  abstract getCidades(): Observable<Cidades[]>;
}