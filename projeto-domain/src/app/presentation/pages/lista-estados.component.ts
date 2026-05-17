import { Component, OnInit } from "@angular/core";
import { EstadosService } from "../../application/service/estados.service";
import { Estados } from "../../domain/entities/estados.entity";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs/internal/Observable";

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-lista-estados',
    templateUrl: './lista-estados.component.html'
})

export class ListaEstadosComponent implements OnInit {
    estados$!: Observable<Estados[]>;
    
    constructor(private estadosService: EstadosService) {}

    ngOnInit(): void {
        this.estados$ = this.estadosService.getEstados();
    }

}