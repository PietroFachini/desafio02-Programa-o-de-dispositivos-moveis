import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
  produtos: produto[] = [
    {id: 1, nome:"Água", preco:3, estoque:10},
    {id: 2, nome:"Coca-cola", preco:6, estoque:5},
    {id: 3, nome:"Guaraná", preco:6, estoque:8},
    {id: 4, nome:"bolacha", preco:4, estoque:15},
    {id: 5, nome:"chesterfield", preco:12, estoque:10}
  ];

  tarefas: tarefa[] = [
    {id: 1, titulo:"Varrer", concluida:false, prioridade: "baixa", dataCriacao: new Date ()},
    {id: 2, titulo:"Desafio da garrafa", concluida:false, prioridade: "alta", dataCriacao: new Date ()},
    {id: 3, titulo:"beber água", concluida:true, prioridade: "media", dataCriacao: new Date ()},
    {id: 4, titulo:"Tomar banho", concluida:false, prioridade: "alta", dataCriacao: new Date ()},
    {id: 5, titulo:"Fazer almoço", concluida:true, prioridade: "media", dataCriacao: new Date ()}
  ];
  filtrar_tarefas(concluida:boolean){
    return this.tarefas.filter(tarefa => tarefa.concluida == concluida)
  }

  calcular_estoque(preco:number, quantidade:number){
    var total:number = preco*quantidade
    return(total)
  }

  formatar_preco(preco:number){
    var formatado:string = "R$"+ preco +",00"
    return(formatado)
  }
  
  
}

type produto = {
  id:number;
  nome:string;
  preco:number;
  estoque:number;
}

type tarefa = {
 id:number;
 titulo:string;
 concluida:boolean;
 prioridade: "baixa"|"media"|"alta";
 dataCriacao:Date;
}





