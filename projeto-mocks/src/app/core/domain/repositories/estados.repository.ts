import { Observable } from "rxjs/internal/Observable";
import { Estados } from "../models/estados.model";

export abstract class EstadosRepository {

  abstract getAll(): Observable<Estados[]>;

}