export class UsuarioFuncionario {
  id: number;
  aln_nome: string;
  cpf: string;

  constructor(id: number, aln_nome: string, cpf: string) {
    this.id = id;
    this.aln_nome = aln_nome;
    this.cpf = cpf;
  }
}