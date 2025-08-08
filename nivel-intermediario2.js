// 🌟 VARIÁVEIS PRINCIPAIS

let nome = "Nyx Raven"
let classe = "Psiconauta Rebelde"
let nivel = 13;
let vida = 80
let ouro = 45;
let xp = 820;

// 🧪 CONSTANTES MÁGICAS

const NOME_ARMA = "Amplificador Neural"
const DANO_BASE = 65;
const NOME_ARMADURA = "Jaqueta de contenção mental"
const DEFESA_BASE = 22;

// ✨ OPERADORES DE APLICAÇÃO

xp += 150; // Nyx treinou e ganhou 150 pontos de experiência
ouro -= 30; // Comprou uma poção por 30 moedas de ouro
vida += 40; // Usou a poção e recuperou 40 pontos de vida
let danoFinal = DANO_BASE * 2; // A arma foi encantada, e seu dano foi dobrado

// 🔣CÁLCULO DE ATRIBUTOS FINAIS

let ataqueTotal = nivel + danoFinal;
let defesaTotal = DEFESA_BASE + (nivel / 2 );

// 👌AVALIAÇÃO DE PRONTIDÃO

let vidaSuficiente = vida > 70; //true
let ataqueForte = ataqueTotal > 60; // true
let nivelAvancado = nivel >= 10; // true
let podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado); /// true && (true || true) = true

// 📃⚔️ LORE DA HEROÍNA

console.log("📃LORE DA HEROÍNA: Nyx Raven");
console.log("");
console.log(`${nome}, uma ${classe}, escapou dos testes psíquicos do Laboratório Blacklight ainda criança.`);
console.log(`Desde então, sobrevive escondida entre a realidade e o vazio sombrio, onde as leis da físoca enlouquecem.`);
console.log(`Com seu ${NOME_ARMA}, canaliza ecos mentais para emitir rajadas contra entidades do outro plano.`);
console.log(`Com nível ${nivel} de evolução, seu ataque total chega a ${ataqueTotal}, tornando-se uma ameaça aos rastejantes etéreos.`);
console.log(`Vestindo a "${NOME_ARMADURA}", sua defesa atinge ${defesaTotal}, protegendo-a de colisões entre dimensões.`);
console.log(`Após rituais de treinamento no subsolo abandonado, acumulou ${xp} de XP e carrega ${ouro} moedas antigas recuperadas de loops temporais.`);
console.log(`Recuperada com ${vida} pontos de energia psíquica, ${nome} se prepara para entrar novamente no núvleo do caos\n`);

console.log (`❤️ Vida suficiente? ${vidaSuficiente} | ⚔️ Ataque Forte? ${ataqueForte} | 📈 Nível avançado? ${nivelAvancado}`);
console.log(`🧌 Pode enfrentar o Guardião? ${podeEnfrentarGuardiao} |🚪 O portão está prestes a se abrir mais uma vez.. e ela estará lá.`)


// === CONTINUAÇÃO DA JORNADA DE NYX RAVEN NIVEL 2 ==

let nomePersonagem = "Nyx Raven";
let vidaAtual = 120;
let vidaMaxima = 120;
let manaAtual = 50;
let manaMaxima = 50;
let nivelAtual = 13;
let experiencia = 970;
let ouroAtual = 45;

// NOVOS ATRIBUTOS PARA A BATALHA
let forca = 18;
let defesa = 22;
let agilidade = 17;
let combatesVencidos = 2;

// Estado atual da história 
let localAtual = "Vazio sombrio";
let missaoAtual = "Rastrear o Guardião d Núcleo do Caos";

