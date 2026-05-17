import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Estados } from "../../core/domain/models/estados.model";
import { EstadosRepository } from "../../core/domain/repositories/estados.repository";

@Component({
  selector: 'app-estados-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estados-grid.component.html',
  styleUrls: ['./estados-grid.component.scss']
})
export class EstadosGridComponent implements OnInit {
  // O sufixo $ é uma convenção para Observables
  estados$!: Observable<Estados[]>;

  constructor(private estadosRepo: EstadosRepository) {}

  ngOnInit(): void {
    // Chamamos o método do repositório (que hoje é o Mock)
    this.estados$ = this.estadosRepo.getAll();
  }
}