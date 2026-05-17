import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { delay } from "rxjs/internal/operators/delay";
import { of } from "rxjs";
import { EstadosRepository } from "../../domain/repositories/estados.repository";
import { Estados } from "../../domain/models/estados.model";

@Injectable({ providedIn: 'root' })
export class EstadosMockRepository implements EstadosRepository {
  getAll(): Observable<Estados[]> {
    const mockData: Estados[] = [
      { id: '1', nome: 'Pagamento de Fatura' },
      { id: '2', nome: 'Compra Supermercado' }
    ];
    
    // Simula uma chamada que demora 1 segundo para responder
    return of(mockData).pipe(delay(1000));
  }

}