// src/models/Produto.ts


export default interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  categoriaId: number;
}
