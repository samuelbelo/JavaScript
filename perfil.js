/* 
Criemos uma lista de 3 perfis. Cada perfil tem que ter um nome, com 5 pistas
Se a pessoa acertar na primeira pista, ganha 5 pontos.
Na 2a, 4 e por ai vai
Se ela errar, não ganha nada.

Devemos somar os pontos das 3 rodadas para o score do usuario

PS: Voltaremos a este jogo mais a frente
*/
var perfil = {
	nome: "Hans Zimmer",
  chutes:0,
  pistas:[
   "interstellar",
		"musica classica",
		"alemão",
		"inception",
		"trilha sonora"
  ],
  verificaAcerto: function(valorChute){
  	//se chute é igual ao nome
    //retorna true
    //senao, retorna falso
    if(valorChute == this.nome){
    	return true;
    }else{
    	return false;
    }
  },
  mostrarDica: function(){
  
  },
  adicionaChute: function(){
  	this.chutes++;
  }
}
console.log(perfil.nome);
console.log(perfil.pistas);
console.log(perfil.chutes);
perfil.adicionaChute();
console.log(perfil.chutes);
perfil.adicionaChute();
perfil.adicionaChute();

console.log(perfil.chutes);
console.log(perfil.verificaAcerto("Chimbinha"))
console.log(perfil.verificaAcerto("Hans Zimmer"))













