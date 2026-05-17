import { Component, OnInit } from "@angular/core";
import { Cidades } from "../../domain/entities/cidades.entity";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs";
import { CidadesService } from "../../application/services/cidades.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-lista-cidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-cidades.component.html'
})
export class ListaCidadesComponent implements OnInit {
  cidades: Observable<Cidades[]> = of([]);

  constructor(private cidadesService: CidadesService) {}

  ngOnInit(): void {
    // chamada serviço para obter as cidades
    this.cidades = this.cidadesService.getCidades();
  }
}