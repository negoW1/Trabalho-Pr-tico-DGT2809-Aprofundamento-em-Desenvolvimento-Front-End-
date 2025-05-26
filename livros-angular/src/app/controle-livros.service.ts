import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Aprenda Java de forma interativa e divertida.',
      autores: ['Bert Bates', 'Kathy Sierra']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java: Como Programar',
      resumo: 'Livro completo sobre a linguagem Java.',
      autores: ['Deitel', 'Deitel']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Estruturas de Dados em Java',
      resumo: 'Conceitos e aplicações de estruturas de dados.',
      autores: ['Loiane Groner']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo)) + 1
      : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
