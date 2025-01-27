import Produto from "./Produto";

export default interface Categorias {
    id: number;
    nome: string;   
    produtos?: Produto[]; 
  }