import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {
  mensagem: string = "";
  obj: Produto = new Produto();

  ngOnInit(){
    let json = localStorage.getItem("produto");
    if(json !=null){
      this.obj=JSON.parse(json);
    }
    else{
      this.mensagem = "Produto não encontrado!";
    }
  }
  adicionarCesta(obj:Produto){
    let json = localStorage.getItem("cesta");
    let cesta: ItemCesta[] = [];
    //se a cesta ja existir carrega com os itens atuais
    if(json!=null && json!=undefined){
      cesta = JSON.parse(json);
    }
      let existente = cesta.find(i => i.produto.codigo === obj.codigo);
    if(existente){
    if (existente.quantidade < obj.estoque) {
        existente.quantidade++;
        existente.valorTotal = existente.valorUnitario * existente.quantidade;
      }
    }
    else{
      let item: ItemCesta = new ItemCesta(obj);
      cesta.push(item);
    }
    localStorage.setItem("cesta", JSON.stringify(cesta));
    location.href = "./cesta";
  }
}
