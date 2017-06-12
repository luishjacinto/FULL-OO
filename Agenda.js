function Agenda(){

  this.contatos = [];
  this.numeros = [];
  this.favoritos = [];
  this.favoritosnumero = [];

  this.adicionar = function (nome,ddd,numero){
    if((nome.length < 21)&&(ddd.length <= 3 )&&(numero.length === 9)){
      this.contatos.push(nome); dados = [ddd,numero]; this.numeros.push(dados);
    }else return false;
    return true;
  }

  this.remover = function (nome){
    if(this.contatos.indexOf(nome) != -1){
      this.contatos.splice(this.contatos.indexOf(nome),1); this.numeros.splice(this.contatos.indexOf(nome),1);
    }else return false;
    return true;
  }

  this.editarNome = function(antigo,novo){
    if((novo.length <21)&&(this.contatos.indexOf(antigo) != -1)){
      this.contatos[this.contatos.indexOf(antigo)] = novo;
    }else return false;
    return true;
  }

  this.editarNumero = function(nome,dddnovo,numeronovo){
    if((dddnovo.length <= 3)&&(numeronovo.length <= 9)&&(this.contatos.indexOf(nome) != -1)){
      this.numeros[this.contatos.indexOf(nome)][0] = dddnovo; this.numeros[this.contatos.indexOf(nome)][1] = numeronovo;
    }else return false;
    return true;
  }

  this.favoritar = function(nome){
    if(this.contatos.indexOf(nome) != -1){
      this.favoritos.push(nome);
      this.favoritosnumero.push(this.numeros[this.contatos.indexOf(nome)]);
    }else return false;
    return true;
  }

  this.removerFavoritos = function(nome){
    if(this.favoritos.indexOf(nome) != -1){
      this.favoritos.splice(this.favoritos.indexOf(nome),1);
      this.favoritosnumero.splice(this.favoritos.indexOf(nome),1);
    }else return false;
    return true;
  }
}

// CASOS DE TESTE
const ag = new Agenda();
ag.adicionar("Luis","053","981579455");
console.log(ag.contatos[0] === "Luis");

console.log(ag.adicionar("Luis Henrique Jacinto da Silva","053","981579455") === false);
console.log(ag.adicionar("Luis Henrique","053","981579455444444") === false);
console.log(ag.adicionar("Luis Henrique","0053","98157945544") === false);

ag.adicionar("Carlos","053","881334455");
console.log(ag.contatos[1] === "Carlos");

ag.remover("Luis");
console.log(ag.contatos[0] === "Carlos");

ag.editarNome("Carlos","Juca");
console.log(ag.contatos[0] === "Juca");

ag.adicionar("Luis","053","981579455");
console.log(ag.contatos[1] === "Luis");

ag.adicionar("Marcio","033","922344555");

ag.editarNumero("Luis","000","000000000");
console.log(ag.numeros[1][1] === "000000000");

console.log(ag.editarNumero("XXXXXXX","000","000000000000000") === false);
console.log(ag.editarNumero("XXXXXXX","000000","000000000") === false);
console.log(ag.editarNumero("XXXXXXXXXXXXXXXXXXXXXXXXX","000","000000000") === false);

ag.favoritar("Juca");
console.log(ag.favoritos[0] === "Juca");
console.log(ag.favoritosnumero[0][0] === "053");
console.log(ag.removerFavoritos("Luis") === false);

ag.removerFavoritos("Juca");
console.log((ag.favoritos[0] === "Juca") === false);
