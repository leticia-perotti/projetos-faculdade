import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animais : any[] = [
          {animal: 'Avestruz',  valores:[1,2,3,4]},
          {animal: 'Águia',     valores:[5,6,7,8]},
          {animal: 'Burro',     valores:[9,10,11,12]},
          {animal: 'Borboleta', valores:[13,14,15, 16]},
          {animal: 'Cachorro',  valores:[17,18,19, 20]},
          {animal: 'Cabra',     valores:[21,22,23,24]},
          {animal: 'Carneiro',  valores:[25,26,27,28]},
          {animal: 'Camelo',    valores:[29,30,31,32]},
          {animal: 'Cobra',     valores:[33,34,35,36]},
          {animal: 'Coelho',    valores:[37,38,39,40]},
          {animal:'Cavalo',     valores:[41,42,43,44]},
          {animal: 'Elefante',  valores:[45,46,47,48]},
          {animal: 'Galo',      valores:[49,50,51,52]},
          {animal: 'Gato',      valores:[53,54,55,56]},
          {animal:'Jacaré',     valores:[57,58,59,60]},
          {animal: 'Leão',      valores:[61,62,63,64]},
          {animal: 'Macaco',    valores:[65,66,67,68]},
          {animal: 'Porco',     valores:[69,70,71,72]},
          {animal: 'Pavão',     valores:[73,74,75,76]},
          {animal: 'Peru',      valores:[77,78,79,80]},
          {animal: 'Touro',     valores:[81,82,83,84]},
          {animal: 'Tigre',     valores:[85,86,87,88]},
          {animal:'Urso',       valores:[89,90,91,92]},
          {animal: 'Veado',     valores:[93,94,95,96]},
          {animal: 'Vaca',      valores:[97,98,99,0]}
        ]

  valorDezena!: number

  valorAnimal!: any

  valorAposta: any

  valor1:any
  valor2: any
  valor3: any

  valorPremio: number = 0

  mensagem: string = ""

  sorteado: boolean = false

  vencedor: boolean = false

  selecaoAposta: any

  animaisAux: any[3] = []

  sortear(){
    if (!this.valorAposta){
      alert("É necessário preencher o valor da aposta");
      return null
    }

    if(!this.valorDezena && !this.valorAnimal){
      alert("É necessário selecionar um animal ou preencher o valor da ");
      return null
    }

    this.valorPremio = 0
    this.vencedor = false

    this.sortearValores()

    this.criaAnimaisAux()

    if (this.selecaoAposta == "D"){
      if ([this.valor1, this.valor2, this.valor3].includes(this.valorDezena)){
        if (this.valorDezena == this.valor1){
          this.valorPremio = this.valorAposta * 50
        }else{
          this.valorPremio = this.valorAposta * 7
        }
      }else {
        this.animaisAux.forEach((x: any) => {
          if (x.valores.includes(this.valorDezena)){
            this.valorPremio = this.valorAposta
          }
        })
      }
    } else if (this.selecaoAposta == "A"){
      if (this.valorAnimal == this.animaisAux[0].animal){
        this.valorPremio = this.valorAposta * 12
      } else if (this.animaisAux[1].animal == this.valorAnimal || this.animaisAux[2].animal == this.valorAnimal) {
        this.valorPremio = this.valorAposta * 3
      }
    }

    if (this.valorPremio != 0){
      this.mensagem = "Parabéns, você ganhou " + this.valorPremio + " reais"
      this.vencedor = true
    }else{
      this.mensagem = "Não foi desta vez!"
      this.vencedor = false
    }

    this.sorteado = true

    return null
  }

  criaAnimaisAux(){
    this.animais.forEach((f: any) => {
      if (f.valores.includes(this.valor1)){
        this.animaisAux[0] = f
      }
      if(f.valores.includes(this.valor2)){
        this.animaisAux[1] = f
      }
      if(f.valores.includes(this.valor3)){
        this.animaisAux[2] = f
      }
    })
  }

  sortearValores(){
    this.valor1 = Math.floor(Math.random() * 100)

    do{
      this.valor2 = Math.floor(Math.random() * 100) ;
    }while(this.valor1 == this.valor2)

    do{
      this.valor3 = Math.floor(Math.random() * 100) ;
    }while(this.valor1 == this.valor3 || this.valor2 == this.valor3)
  }
}
