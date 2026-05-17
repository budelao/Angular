import { Observable } from "rxjs";
import { Estados } from "../entities/estados.entity";

export abstract class EstadosRepository {
    abstract getAll(): Observable<Estados[]>;
}   