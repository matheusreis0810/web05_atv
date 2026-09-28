import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';
@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  mensagem: string = "";
  itens: ItemCesta[] = [];
  total: number = 0;

  ngOnInit() {
    let json = localStorage.getItem("cesta");
    if (json != null && json != undefined) {
      this.itens = JSON.parse(json);
    }

    if (this.itens.length > 0) {
      this.total = this.itens.reduce((soma, item) => soma + item.valorTotal, 0);
    } else {
      this.mensagem = "Sua cesta está vazia!";
    }
  }

  limparCesta() {
    localStorage.removeItem("cesta");
    this.itens = [];
    this.total = 0;
    this.mensagem = "Sua cesta está vazia!";
  }
}