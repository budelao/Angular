export class Cidades {
  id: number;
  nome: string;
  estadoId: number;

  constructor(id: number, nome: string, estadoId: number) {
    this.id = id;
    this.nome = nome;
    this.estadoId = estadoId;
  }
}