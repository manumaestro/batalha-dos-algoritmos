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

console.log("🧾 === CONTINUAÇÃO DA JORNADA DE " + nomePersonagem + " === \n");
console.log("Após sobreviver aos rituais psíquicos nas fendas do " + localAtual + ", ");
console.log(nomePersonagem + " Avança rumo ao Núcleo do Caos para cumprir sua missão: " + missaoAtual + ",");
console.log("Armas neurais carregadas. Realidade instável. Vontade inquebrável.\n")

// 🏆 CAPÍTULO 1: Condicionais simples
console.log("🏆 CAPÍTULO 1: O Eco dos Anciões");

if (nivel < 10) {
    console.log("Um eco do passado sussura: 'Você ainda não domina sua mente por completo.'");
    console.log(nomePersonagem + " ignora e segue em frente.");
}

if (ouro >= 100) {
    console.log("💰 Um mercador dimensional aparece, atraído pelo tilintar das moedas.");
}

if (classe === "Psiconauta Rebelde") {
    console.log("Os pensamentos se alinam em aspiral.. A mente de " + nomePersonagem + " brilha em padrões fractais.");
}

console.log("");

// CAPÍTULO 2: A Encruzilhada do Destino
console.log("🔮 CAPÍTULO 2: A Escolha Distorcida");

if (ouro >= 50) {
    console.log("🧠 " + nomePersonagem + " compra um amplificador de memória e reforça seu equipamento!");
    forca += 5;
    defesa += 3;
    ouro -= 50;
    console.log("🛡️ Força e deesa melhoraram! Ouro restante: " + ouro);
} else {
    console.log("Sem recursos, ela se conecta à Rede Subconsciente e aprimora sua reação instintiva.");
    agilidade =+ 2;
    console.log("🏃‍♂️ Agilidade +2!");
}

// Recomenda por experiência 
if (experiencia >= 1000) {
    console.log(" Um novo grau de consciência é desbloqueado!");
    nivel++;
    experiencia = 0;
    vidaAtual = vidaMaxima;
    console.log("📈 Subiu para o nível " + nivel + "!");
} else {
    console.log("📚 " + nomePersonagem + " ainda busca mais sabedoria..");
    console.log(" Experiência atul: " + experiencia + "/10000");
}

console.log("");

// CAPÍTULO 3: A Batalha Decisiva
console.log("CAPÍTULO 3: A Batalha Decisiva");

let poderInimigo = 60;

if (vidaAtual <= 30) {
    console.log(" Em estado crítico, " nomePersonagem + " libera toda sua força interior!");
    poderInimigo -= (forca * 2);
} else if (manaAtual >= 30 && classe === "Psiconauta Rebelde") {
    console.log("💥 " + nomePersonagem + " canaliza um surto psiquico e explode o campo mental do inimigo");
    poderInimigo -= (forca + 25);
    manaAtual -= 30;
} else if (agilidade >= 15) {
    console.log("⚡ " + nomePersonagem + " se move em velocidade hipersináptica e ataca!");
    poderInimigo -= forca;
} else {
    console.log("🛡️ Ela adota postura defensiva, absorvendo o impacto e preparando um contra-ataque.");
    poderInimigo -= (forca / 2);
    vidaAtual += 10;
}

console.log("Poder restante do inimigo: " + poderInimigo + "\n");

// 🏆 epílogo
IF (poderInimigo <= 0) {
    console.log("🎉 VITÓRIA! O Guardião do caos foi derrotado por " + nomePersonagem + "!");
    experiencia += 100;
    combatesVencidos++;
    console.log("🔥 " + nomePersonagem + " agora é reverenciada como Lenda Neural.");
} else {
    console.log("⚠️ A batalha foi intensa, mas " + nomePersonagem + " sobreviveu.");
    console.log("⚙️ Ela sabe que o caos retornará.. e continuará lutando.");
}

console.log("\n🏁 FIM DO CAPÍTULO - Aguarde a próxima expansão mental!");
