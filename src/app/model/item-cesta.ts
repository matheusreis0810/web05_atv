import { Produto } from "./produto";
export class ItemCesta {
    produto: Produto = new Produto();
    quantidade: number = 1;
    valorUnitario: number = 0;
    valorTotal: number = 0;

    constructor(p:Produto){
        this.produto = p;
        if(p.valorPromo>0){
            this.valorUnitario = p.valorPromo;
        }else{
            this.valorUnitario = p.valor;
        }
        this.valorTotal = this.valorUnitario*this.quantidade
    }
}
