// Importa o módulo readline do Node.js
const readline = require('readline');

// Cria a interface para entrada e saída de dados no console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//define o nome e xp do heroi
let nome ;
let xp ;
rl.question('Qual o nome do herói? ', (nome) => {
  rl.question('Qual a experiência (XP) do herói? ', (xp) => {
    // Converte a entrada de XP para número
    xp = parseInt(xp);
    // Fecha a interface após a entrada dos dados
    
    if (xp <= 1000) {
    console.log(`HHeroi eroi ${nome} está no nível Ferro...`);
}
else if (xp <= 2000) {
    console.log(`Heroi ${nome} esta no nível Bronze...`);
}
else if (xp <= 5000) {
    console.log(`Heroi ${nome} esta no nível Prata...`);
}
else if (xp <= 7000) {
    console.log(`Heroi ${nome} esta no nível Ouro...`);
}
else if(xp <= 8000) {
    console.log(`Heroi ${nome} esta no nível Platina...`);
}
else if (xp <= 9000) { 
    console.log(`Heroi ${nome} esta no nível Ascendente...`);
}
else if (xp <= 10000) {
    console.log(`Heroi ${nome} esta no nível Imortal...`);
}
else {
    console.log(`Heroi ${nome} esta no nível Deus...`);
}

    rl.close();
  });
}); 