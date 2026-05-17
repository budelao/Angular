import { Observable } from "rxjs";
import { Estados } from "../entities/estados.entity";
import { EstadosRepository } from "../repository/estados.repository";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ObterEstadosUseCase {
    constructor(private estadosRepository: EstadosRepository) {}

    execute(): Observable<Estados[]> {
        return this.estadosRepository.getAll();
    }
}