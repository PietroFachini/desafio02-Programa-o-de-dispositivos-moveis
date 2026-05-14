import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, CommonModule],
})
export class HomePage {
  constructor() {}

  boo_produtos:boolean = false
  boo_tarefas:boolean = false
  boo_concluidas:boolean = false

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
  tarefas_concluidas(concluida:boolean){
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
  
  filtar_tarefas(prioridade: "baixa" | "media" | "alta"){
    return this.tarefas.filter(tarefa => tarefa.prioridade === prioridade)
  }

  mostrar_produtos(){
    this.boo_produtos =! this.boo_produtos
  }
  
  mostrar_tarefas(){
    this.boo_tarefas =! this.boo_tarefas
  }

  mostrar_inconcluidas(){
    this.boo_concluidas =! this.boo_concluidas
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





