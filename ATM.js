function ATM(){
  this.n5 = 0;
  this.n10 = 0;
  this.n20 = 0;
  this.n50 = 0;
  this.n100 = 0;

  this.abastecer = function(qtn, nota){
    if((nota == 5)||(nota == 10)||(nota == 20)||(nota == 50)||(nota == 100)){
      if((this.n5 < 100)&&((this.n5+qtn)<=100)&&(nota === 5)) return this.n5 += qtn;
      if((this.n10 < 100)&&((this.n10+qtn)<=100)&&(nota === 10)) return this.n10 += qtn;
      if((this.n20 < 100)&&((this.n20+qtn)<=100)&&(nota === 20)) return this.n20 += qtn;
      if((this.n50 < 100)&&((this.n50+qtn)<=100)&&(nota === 50)) return this.n50 += qtn;
      if((this.n100 < 100)&&((this.n100+qtn)<=100)&&(nota === 100)) return this.n100 += qtn;
      document.getElementById("saldo").value = atm.consultarValor();
      document.getElementById("n5").value = atm.consultarQuantidade(5);
      document.getElementById("n10").value = atm.consultarQuantidade(10);
      document.getElementById("n20").value = atm.consultarQuantidade(20);
      document.getElementById("n50").value = atm.consultarQuantidade(50);
      document.getElementById("n100").value = atm.consultarQuantidade(100);
    }else return 0;
  }

  this.consultarValor = function(){
    return ((this.n5 * 5)+(this.n10 * 10)+(this.n20 * 20)+(this.n50 * 50)+(this.n100 * 100));
    document.getElementById("saldo").value = atm.consultarValor();
  }

  this.consultarQuantidade = function(nota){
    if((nota == 5)||(nota == 10)||(nota == 20)||(nota == 50)||(nota == 100)){
      if(nota === 5) return this.n5;
      if(nota === 10) return this.n10;
      if(nota === 20) return this.n20;
      if(nota === 50) return this.n50;
      if(nota === 100) return this.n100;
    }else return 0;
  }

  this.retirar = function(v) {
    if(v <= this.consultarValor()){
        if((v > 0)&&(v%100 == 0)&&(this.n100 >= Math.floor(v/100))){
          this.n100 -= Math.floor(v/100); console.log(Math.floor(v/100) + " notas de 100."); v -= (Math.floor(v/100)*100);
        }
        if((v > 0)&&(v%50 == 0 || Math.floor(v/50) > 0)&&(this.n50 >= Math.floor(v/50))){
          this.n50 -= Math.floor(v/50); console.log(Math.floor(v/50) + " notas de 50."); v -= (Math.floor(v/50)*50);
        }
        if((v > 0)&&(v%20 == 0 || Math.floor(v/20) > 0)&&(this.n20 >= Math.floor(v/20))){
          this.n20 -= Math.floor(v/20); console.log(Math.floor(v/20) + " notas de 20."); v -= (Math.floor(v/20)*20);
        }
        if((v > 0)&&(v%10 == 0 || Math.floor(v/10) > 0)&&(this.n10 >= Math.floor(v/10))){
          this.n10 -= Math.floor(v/10); console.log(Math.floor(v/10) + " notas de 10."); v -= (Math.floor(v/10)*10);
        }
        if((v > 0)&&(v%5 == 0 || Math.floor(v/5) > 0)&&(this.n5 >= Math.floor(v/5))){
          this.n5 -= Math.floor(v/5); console.log(Math.floor(v/5) + " notas de 5."); v -= (Math.floor(v/5)*5);
        }
        document.getElementById("saldo").value = atm.consultarValor();
        document.getElementById("n5").value = atm.consultarQuantidade(5);
        document.getElementById("n10").value = atm.consultarQuantidade(10);
        document.getElementById("n20").value = atm.consultarQuantidade(20);
        document.getElementById("n50").value = atm.consultarQuantidade(50);
        document.getElementById("n100").value = atm.consultarQuantidade(100);
    }else console.log("não há cedulas suficientes");
  }

}

const atm = new ATM();
// abastecendo com 20 notas de 100
atm.abastecer(33, 100);
// verificando a quantidade de cédulas de 100
console.log(atm.consultarQuantidade(100)); // 33
// espera-se 33 cédulas
console.log(atm.consultarQuantidade(100) === 33);
// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.consultarQuantidade(5)); // 0
console.log(atm.consultarQuantidade(5) === 0);
console.log(atm.consultarQuantidade(50)); // 0
console.log(atm.consultarQuantidade(50) === 0);
// mesmo os que não existem
console.log(atm.consultarQuantidade(3)); // 0
console.log(atm.consultarQuantidade(3) === 0);
// abastecimento de cédulas não existentes são rejeitados
atm.abastecer(8, 3); // 8 cédulas de R$ 3,00
console.log(atm.consultarQuantidade(3) === 0);
// consultando o valor
console.log(atm.consultarValor()); // 33 * 100 = 3300 reais
console.log(atm.consultarValor() === 3300);
// retirada rejeitada, não há cédulas que combinem R$ 350,00 (por ex.: de R$ 10, R$ 20 ou R$ 50)
atm.retirar(350);
console.log(atm.consultarQuantidade(100) === 33);
console.log(atm.consultarValor() === 3300);

// até aqui 0.3 pontos <=========================================

// retirada válida
atm.retirar(300); // 3 cédulas de 100
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada rejeitada
atm.retirar(3100); // não há cédulas suficientes
console.log(atm.consultarQuantidade(100) === 30);
console.log(atm.consultarValor() === 3000);
// retirada válida
atm.retirar(3000); // vai esvaziar o ATM
console.log(atm.consultarQuantidade(100) === 0);
console.log(atm.consultarValor() === 0);
// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecer(10, 10); // 10 cédulas de R$ 10,00
atm.abastecer(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 10);
console.log(atm.consultarValor() === 600); // 10 * 10 + 10 * 50
// retirada prioriza cédulas de maior valor
atm.retirar(100); // retira 2 cédulas de R$ 50,00
console.log(atm.consultarQuantidade(10) === 10);
console.log(atm.consultarQuantidade(50) === 8);
console.log(atm.consultarValor() === 500); // 10 * 10 + 8 * 50
// retirada combinada
atm.retirar(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.consultarQuantidade(10) === 6);
console.log(atm.consultarQuantidade(50) === 7);
console.log(atm.consultarValor() === 410); // 6 * 10 + 7 * 50

// até aqui 0.7 ponto <=========================================

// incluir mais 10 casos de teste com retiradas
// quem combinam 4 e 5 cédulas diferentes, válidas e inválidas
// -------------------------------------------------------------

// até aqui 1.0 ponto <=========================================
