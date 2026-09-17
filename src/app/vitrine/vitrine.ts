import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
  
})
export class Vitrine {
  lista : Produto [] = [
    {
      "codigo": 1,
      "nome": "Martelo de Unha 27mm",
      "descritivo": "Martelo de aço carbono com cabo de madeira, ideal para trabalhos gerais de construção e manutenção.",
      "valor": 39.90,
      "valorPromo": 34.90,
      "estoque": 25,
      "destaque": 1
    },
    {
      "codigo": 2,
      "nome": "Chave de Fenda 6mm",
      "descritivo": "Chave de fenda com ponta em aço temperado e cabo ergonômico.",
      "valor": 14.90,
      "valorPromo": 0,
      "estoque": 40,
      "destaque": 0
    },
    {
      "codigo": 3,
      "nome": "Chave Phillips 6mm",
      "descritivo": "Chave Phillips resistente para montagem, manutenção e reparos diversos.",
      "valor": 16.90,
      "valorPromo": 13.90,
      "estoque": 35,
      "destaque": 1
    },
    {
      "codigo": 4,
      "nome": "Alicate Universal 8 Polegadas",
      "descritivo": "Alicate universal em aço forjado com cabo revestido para maior conforto.",
      "valor": 32.90,
      "valorPromo": 0,
      "estoque": 18,
      "destaque": 0
    },
    {
      "codigo": 5,
      "nome": "Trena 5 Metros",
      "descritivo": "Trena com fita metálica de 5 metros, trava de segurança e revestimento emborrachado.",
      "valor": 24.90,
      "valorPromo": 19.90,
      "estoque": 30,
      "destaque": 1
    },
    {
      "codigo": 6,
      "nome": "Fita Isolante 20m",
      "descritivo": "Fita isolante de PVC com 20 metros, indicada para instalações elétricas.",
      "valor": 8.90,
      "valorPromo": 0,
      "estoque": 75,
      "destaque": 0
    },
    {
      "codigo": 7,
      "nome": "Fita Veda Rosca 18mm",
      "descritivo": "Fita de PTFE para vedação de conexões hidráulicas e tubulações.",
      "valor": 4.50,
      "valorPromo": 3.90,
      "estoque": 100,
      "destaque": 0
    },
    {
      "codigo": 8,
      "nome": "Parafuso Sextavado 6x50mm",
      "descritivo": "Parafuso sextavado de aço zincado para fixações em madeira e estruturas.",
      "valor": 1.50,
      "valorPromo": 0,
      "estoque": 250,
      "destaque": 0
    },
    {
      "codigo": 9,
      "nome": "Caixa com 100 Parafusos 4x40mm",
      "descritivo": "Kit com 100 parafusos para madeira, ideal para móveis e pequenos reparos.",
      "valor": 29.90,
      "valorPromo": 24.90,
      "estoque": 45,
      "destaque": 1
    },
    {
      "codigo": 10,
      "nome": "Bucha de Nylon 8mm",
      "descritivo": "Bucha de nylon para fixação em paredes de alvenaria e concreto.",
      "valor": 0.60,
      "valorPromo": 0,
      "estoque": 500,
      "destaque": 0
    },
    {
      "codigo": 11,
      "nome": "Pregos 18x27",
      "descritivo": "Pregos de aço para aplicações gerais em madeira.",
      "valor": 12.90,
      "valorPromo": 10.90,
      "estoque": 80,
      "destaque": 0
    },
    {
      "codigo": 12,
      "nome": "Serrote para Madeira 20 Polegadas",
      "descritivo": "Serrote com lâmina de aço temperado, indicado para cortes em madeira.",
      "valor": 42.90,
      "valorPromo": 0,
      "estoque": 15,
      "destaque": 1
    },
    {
      "codigo": 13,
      "nome": "Arco de Serra 12 Polegadas",
      "descritivo": "Arco de serra metálico com cabo ergonômico para cortes de metais e PVC.",
      "valor": 35.90,
      "valorPromo": 29.90,
      "estoque": 20,
      "destaque": 0
    },
    {
      "codigo": 14,
      "nome": "Lâmina para Arco de Serra",
      "descritivo": "Lâmina de aço para arco de serra com dentes finos para cortes precisos.",
      "valor": 7.90,
      "valorPromo": 0,
      "estoque": 60,
      "destaque": 0
    },
    {
      "codigo": 15,
      "nome": "Chave Inglesa 10 Polegadas",
      "descritivo": "Chave ajustável em aço cromado para serviços hidráulicos e mecânicos.",
      "valor": 38.90,
      "valorPromo": 32.90,
      "estoque": 22,
      "destaque": 1
    },
    {
      "codigo": 16,
      "nome": "Jogo de Chaves Allen",
      "descritivo": "Jogo com 9 chaves Allen em diferentes medidas para manutenção e montagem.",
      "valor": 27.90,
      "valorPromo": 22.90,
      "estoque": 28,
      "destaque": 0
    },
    {
      "codigo": 17,
      "nome": "Estilete Profissional",
      "descritivo": "Estilete reforçado com lâmina retrátil e corpo ergonômico.",
      "valor": 18.90,
      "valorPromo": 15.90,
      "estoque": 35,
      "destaque": 0
    },
    {
      "codigo": 18,
      "nome": "Nível de Alumínio 40cm",
      "descritivo": "Nível de alumínio com bolhas de precisão para trabalhos de instalação e construção.",
      "valor": 45.90,
      "valorPromo": 39.90,
      "estoque": 12,
      "destaque": 1
    },
    {
      "codigo": 19,
      "nome": "Cola de Contato 75g",
      "descritivo": "Adesivo de contato indicado para colagem de madeira, laminados, couro e outros materiais.",
      "valor": 13.90,
      "valorPromo": 0,
      "estoque": 50,
      "destaque": 0
    },
    {
      "codigo": 20,
      "nome": "Silicone Acético Transparente 280g",
      "descritivo": "Silicone para vedação de superfícies, indicado para aplicações domésticas e construção.",
      "valor": 22.90,
      "valorPromo": 18.90,
      "estoque": 32,
      "destaque": 1
    }
  ]
}