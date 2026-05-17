import { Injectable } from "@angular/core";
import { Estados } from "../../domain/entities/estados.entity";
import { ObterEstadosUseCase } from "../../domain/use-cases/obter-estados.usecase";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class EstadosService {
    constructor(private obterEstadosUseCase: ObterEstadosUseCase) {}

    getEstados(): Observable<Estados[]> {
        return this.obterEstadosUseCase.execute();
    }
}