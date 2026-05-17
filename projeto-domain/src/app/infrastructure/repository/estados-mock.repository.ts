import { Observable, of } from "rxjs";
import { Estados } from "../../domain/entities/estados.entity";
import { EstadosRepository } from "../../domain/repository/estados.repository";

export class EstadosMockRepository extends EstadosRepository {
    getAll(): Observable<Estados[]> {
        // Implement mock data retrieval
        return of([
            { id: '1', nome: 'São Paulo' },
            { id: '2', nome: 'Rio de Janeiro' },
            { id: '3', nome: 'Minas Gerais' }
        ]);
    }
}