/* ==========================================================================
   O REPOUSO DO SILÊNCIO — Catálogo de poemas
   --------------------------------------------------------------------------
   Fonte única de verdade sobre os poemas do site.
   Para adicionar um poema:
     1. Criar o ficheiro /poemas/<slug>.html (copiar um existente).
     2. Acrescentar aqui um objeto com os mesmos dados.
   A biblioteca, a navegação Anterior/Próximo e o poema aleatório
   atualizam-se automaticamente.
   ========================================================================== */

const POEMAS = [
  {
    slug: "onde-o-teu-nome-descansa",
    titulo: "Onde o Teu Nome Descansa",
    descricao: "Sobre o amor que permanece nos gestos pequenos, muito depois das palavras.",
    categoria: "Amor",
    data: "14 de fevereiro de 2026",
    tempo: "1 min",
    texto: `
      <p>O amor não mora nas palavras grandes.<br>
         Mora no café servido sem pedir,<br>
         na luz deixada acesa no corredor,<br>
         no casaco posto sobre os teus ombros<br>
         antes de o frio chegar.</p>
      <p>Há um lugar dentro de mim<br>
         onde o teu nome descansa —<br>
         não como quem dorme,<br>
         mas como quem chegou a casa<br>
         e finalmente pousou as malas.</p>
      <p>E quando tudo o resto fizer barulho,<br>
         quando o mundo exigir pressa,<br>
         eu volto a esse lugar devagar,<br>
         como quem regressa a um livro<br>
         aberto na página certa.</p>
    `
  },
  {
    slug: "carta-que-nao-enviei",
    titulo: "Carta Que Não Enviei",
    descricao: "As palavras que ficaram na gaveta e, ainda assim, chegaram ao destino.",
    categoria: "Amor",
    data: "30 de novembro de 2025",
    tempo: "2 min",
    texto: `
      <p>Escrevi-te uma carta<br>
         que nunca saiu da gaveta.<br>
         O papel amarelou,<br>
         as palavras não.</p>
      <p>Dizia coisas simples:<br>
         que a tua ausência tem peso,<br>
         que certas ruas ainda dobram<br>
         na direção da tua casa,<br>
         que aprendi a fazer chá para um<br>
         e continuo a pôr duas chávenas.</p>
      <p>Dizem que as cartas não enviadas<br>
         não chegam a lado nenhum.<br>
         Não é verdade.<br>
         Chegam todas ao mesmo sítio:<br>
         ao centro exato de quem as escreveu.</p>
      <p>E ali ficam, pacientes,<br>
         à espera que a coragem<br>
         aprenda finalmente<br>
         o caminho do correio.</p>
    `
  },
  {
    slug: "a-manha-que-ainda-nao-veio",
    titulo: "A Manhã Que Ainda Não Veio",
    descricao: "Um poema para quem espera de olhos abertos, mesmo na noite mais longa.",
    categoria: "Esperança",
    data: "3 de março de 2026",
    tempo: "1 min",
    texto: `
      <p>A noite pode ser longa,<br>
         mas nunca foi dona do céu.<br>
         Há sempre uma fresta,<br>
         um fio de claridade<br>
         que a escuridão não soube fechar.</p>
      <p>A esperança não é gritar contra o escuro.<br>
         É acender um candeeiro pequeno<br>
         e sentar-se ao pé dele,<br>
         de olhos abertos,<br>
         à espera da manhã que ainda não veio.</p>
      <p>Porque vir, ela vem.<br>
         Sempre veio.<br>
         E quem espera com uma luz acesa<br>
         nunca espera completamente sozinho.</p>
    `
  },
  {
    slug: "oficio-de-estar-vivo",
    titulo: "Ofício de Estar Vivo",
    descricao: "A vida como um trabalho lento, feito de dias comuns e milagres discretos.",
    categoria: "Vida",
    data: "21 de janeiro de 2026",
    tempo: "2 min",
    texto: `
      <p>Estar vivo é um ofício lento.<br>
         Aprende-se todos os dias,<br>
         erra-se quase sempre,<br>
         e ninguém se forma nunca.</p>
      <p>Há dias que são pão simples:<br>
         acordar, trabalhar, voltar.<br>
         E há dias que são milagre discreto —<br>
         um pôr do sol inesperado,<br>
         uma gargalhada no autocarro,<br>
         o cheiro a chuva na terra quente.</p>
      <p>O segredo, descobri tarde,<br>
         não é colecionar dias grandes.<br>
         É reparar nos pequenos<br>
         antes que passem,<br>
         como quem sublinha a lápis<br>
         as frases que quer voltar a ler.</p>
      <p>A vida não pede que a vençamos.<br>
         Pede apenas que estejamos presentes<br>
         quando ela acontecer.</p>
    `
  },
  {
    slug: "oracao-em-voz-baixa",
    titulo: "Oração em Voz Baixa",
    descricao: "Uma conversa com o invisível, dita no tom de quem confia.",
    categoria: "Fé",
    data: "7 de dezembro de 2025",
    tempo: "1 min",
    texto: `
      <p>Não sei rezar com palavras grandes.<br>
         As minhas orações são pequenas,<br>
         ditas no tom de quem conversa<br>
         com alguém sentado ao lado.</p>
      <p>Digo: obrigado pelo dia,<br>
         mesmo o difícil.<br>
         Digo: cuida de quem amo,<br>
         especialmente dos que estão longe.<br>
         Digo: dá-me paciência<br>
         para o que não entendo.</p>
      <p>E depois fico em silêncio,<br>
         porque a fé também é isto —<br>
         confiar que alguém escuta<br>
         mesmo quando já não dizemos nada.</p>
    `
  },
  {
    slug: "a-cadeira-vazia",
    titulo: "A Cadeira Vazia",
    descricao: "A saudade sentada à mesa, ocupando o lugar de quem partiu.",
    categoria: "Saudade",
    data: "19 de outubro de 2025",
    tempo: "1 min",
    texto: `
      <p>Há uma cadeira à mesa<br>
         que ninguém ocupa<br>
         e ninguém arruma.<br>
         Fica ali, fiel,<br>
         como ficam as coisas<br>
         que esperam por alguém.</p>
      <p>A saudade senta-se nela às vezes.<br>
         Chega sem avisar,<br>
         serve-se do nosso café,<br>
         conta histórias antigas<br>
         com a tua voz emprestada.</p>
      <p>E eu deixo.<br>
         Porque enquanto a saudade vier,<br>
         tu ainda tens lugar marcado<br>
         nesta casa.</p>
    `
  },
  {
    slug: "o-que-o-silencio-guarda",
    titulo: "O Que o Silêncio Guarda",
    descricao: "Nem tudo o que cala está vazio. Há silêncios cheios de resposta.",
    categoria: "Silêncio",
    data: "1 de janeiro de 2026",
    tempo: "1 min",
    texto: `
      <p>As pessoas têm medo do silêncio,<br>
         como se ele fosse um quarto vazio.<br>
         Mas o silêncio não está vazio.<br>
         Está cheio de coisas<br>
         que só se ouvem devagar.</p>
      <p>Guarda o som da casa a respirar,<br>
         o virar das páginas de um livro,<br>
         o pensamento que finalmente<br>
         encontra espaço para se dizer.</p>
      <p>Não fujas dele.<br>
         Senta-te no silêncio<br>
         como quem se senta junto a um velho amigo:<br>
         sem pressa, sem plano,<br>
         apenas para estar.</p>
    `
  },
  {
    slug: "espelhos-lentos",
    titulo: "Espelhos Lentos",
    descricao: "Reflexões sobre o tempo que passa e o rosto que fica.",
    categoria: "Reflexões",
    data: "28 de abril de 2026",
    tempo: "2 min",
    texto: `
      <p>O tempo é um espelho lento.<br>
         Não mostra logo o que fizemos de nós —<br>
         vai revelando aos poucos,<br>
         ruga a ruga,<br>
         escolha a escolha.</p>
      <p>Olho para trás e vejo<br>
         versões minhas que já não sou:<br>
         o rapaz com pressa,<br>
         o homem com medo,<br>
         o que dizia sempre sim<br>
         para não incomodar ninguém.</p>
      <p>A todos devo alguma coisa.<br>
         Até aos que erraram —<br>
         sobretudo a esses —<br>
         porque foi nos seus desvios<br>
         que encontrei os atalhos.</p>
      <p>Envelhecer, afinal,<br>
         não é perder o rosto.<br>
         É ganhar todos os rostos<br>
         que tivemos a coragem de ser.</p>
    `
  },
  {
    slug: "depois-da-tempestade",
    titulo: "Depois da Tempestade",
    descricao: "Sobre levantar-se devagar e descobrir que a raiz aguentou.",
    categoria: "Superação",
    data: "9 de maio de 2026",
    tempo: "1 min",
    texto: `
      <p>A tempestade levou o que era leve:<br>
         as folhas, os planos, as certezas.<br>
         Deixou o chão coberto<br>
         de tudo o que eu julgava meu.</p>
      <p>Mas quando o vento parou,<br>
         reparei numa coisa pequena:<br>
         a árvore continuava de pé.<br>
         Vergada, despida, cansada —<br>
         mas de pé.</p>
      <p>É isto a superação:<br>
         não é sair ileso.<br>
         É descobrir, depois do pior,<br>
         que a raiz aguentou.<br>
         E que ainda há primaveras<br>
         com o nosso nome.</p>
    `
  },
  {
    slug: "bilhete-esquecido-num-livro",
    titulo: "Bilhete Esquecido num Livro",
    descricao: "Um pequeno achado entre páginas antigas — e tudo o que ele acorda.",
    categoria: "Outros",
    data: "16 de junho de 2026",
    tempo: "1 min",
    texto: `
      <p>Encontrei um bilhete de comboio<br>
         dentro de um livro usado.<br>
         Lisboa — Porto, segunda classe,<br>
         uma data de há vinte anos.</p>
      <p>Quem foste tu, viajante,<br>
         que leste este livro em movimento?<br>
         Que paisagem corria na janela<br>
         quando sublinhaste esta página?</p>
      <p>Nunca saberei.<br>
         Mas gosto de pensar que os livros<br>
         são estações onde os desconhecidos<br>
         se cruzam sem se ver —<br>
         e se deixam, uns aos outros,<br>
         pequenos sinais de que estiveram cá.</p>
    `
  },
  {
    "slug": "esperanca-que-nao-morre",
    "titulo": "Esperança que Não Morre",
    "descricao": "Uma reflexão sobre encontros especiais e a coragem de permanecer ao lado de alguém que ilumina a nossa vida.",
    "categoria": "Esperança",
    "data": "16 de junho de 2026",
    "tempo": "2 min",
    "texto": `
      <p>Há pessoas que passam por nós como o vento,<br>
      e há pessoas que chegam como um destino.<br>
      Quando encontramos alguém especial, podemos fazer três coisas:<br>
      deixar que passe,<br>
      fingir que não sentimos,<br>
      ou ter coragem de permanecer.<br>
      Se essa pessoa fosse você,<br>
      eu escolheria permanecer.</p>

      <p>A vida pode apresentar muitos encontros,<br>
      mas alguns carregam uma luz que não se repete.<br>
      Entre todas as possibilidades, foi você quem eu desejei.<br>
      Porque o exterior nem sempre revela a essência.<br>
      A aparência pode despertar admiração,<br>
      mas são a fé, a inteligência e o caráter que nos permitem descobrir a verdadeira beleza de alguém,<br>
      muito além do que os olhos conseguem ver.</p>
    `
  },
  {
    "slug": "entre-o-silencio-e-a-esperanca",
    "titulo": "Entre o Silêncio e a Esperança",
    "descricao": "Sobre o amor que persiste mesmo no silêncio, cultivando a esperança enquanto espera o momento certo.",
    "categoria": "Silêncio",
    "data": "16 de junho de 2026",
    "tempo": "3 min",
    "texto": `
      <p>Sonho um futuro escrito a dois,<br>
      feito de manhãs serenas e gestos simples,<br>
      onde o tempo caminhe devagar<br>
      e cada dia encontre paz na tua presença.</p>

      <p>Mas existe um silêncio<br>
      que cresce entre o que sinto e o que desconheço.<br>
      É nele que procuro respostas<br>
      que o tempo ainda não quis revelar.</p>

      <p>O teu silêncio não me afasta;<br>
      apenas me lembra<br>
      que nem todos os corações<br>
      falam na mesma estação.<br>
      Ainda assim, permaneço.<br>
      Não por teimosia,<br>
      nem por medo de partir,<br>
      mas porque alguns sentimentos<br>
      não nascem da certeza,<br>
      e sim daquilo que escolhemos cultivar.</p>

      <p>Cada amanhecer traz consigo<br>
      a possibilidade de um novo capítulo.<br>
      A esperança não ignora a distância;<br>
      ela apenas se recusa<br>
      a transformá-la num ponto final.</p>

      <p>Se um dia os nossos caminhos se encontrarem,<br>
      que seja sem máscaras,<br>
      sem pressa<br>
      e sem a necessidade de fingirmos quem somos.<br>
      E, se por agora o silêncio é a tua linguagem,<br>
      que o tempo faça o que as palavras ainda não conseguiram.</p>

      <p>Porque amar, às vezes,<br>
      é aceitar que nem tudo floresce na mesma estação.<br>
      É cuidar de um sonho<br>
      sem exigir que ele aconteça antes da hora.<br>
      Enquanto houver espaço para acreditar,<br>
      deixarei a porta do coração entreaberta —<br>
      não presa ao passado,<br>
      mas aberta à possibilidade<br>
      de que o futuro ainda nos apresente um ao outro.</p>
    `
  },
  {
    "slug": "o-principe-que-chegou-tarde",
    "titulo": "O Príncipe que Chegou Tarde",
    "descricao": "A chegada de um amor que deseja ser presença constante após as desilusões do passado.",
    "categoria": "Amor",
    "data": "16 de junho de 2026",
    "tempo": "5 min",
    "texto": `
      <p>Cheguei à tua vida quando a esperança já caminhava de cabeça baixa.<br>
      Era o tempo em que as desilusões te haviam convencido de que alguns corações apenas se aproximam para partir, e de que certas promessas nascem já destinadas ao esquecimento. Pouco a pouco, começaste a acreditar que o amor escondia sempre um truque, que toda entrega acabava por cobrar um preço e que confiar era apenas uma forma mais lenta de sofrer.</p>

      <p>Ainda assim, entre palavras e silêncios, partilhávamos poemas e cartas.<br>
      Cada verso teu parecia transportar um pedaço da tua alma. Em cada linha encontrei a tua saudade, os teus medos, as cicatrizes que o tempo ainda não conseguira apagar e a coragem silenciosa com que continuavas a seguir em frente. Enquanto lia, nasceu em mim um desejo profundo: o de te abraçar e fazer-te sentir que já não precisavas enfrentar tudo sozinha.</p>

      <p>Não porque acreditasse poder apagar o teu passado, mas porque queria caminhar ao teu lado enquanto construías um futuro diferente.<br>
      Quis ser o teu porto seguro, o lugar onde pudesses descansar sem receio de seres julgada. Quis ser aquele que não aparece para salvar uma princesa de um conto de fadas, mas para partilhar a realidade, com as suas alegrias, os seus desafios e os seus dias comuns.</p>

      <p>Ao conhecer as tuas palavras, descobri muito mais do que a tua dor. Descobri a delicadeza com que amas, a força com que te levantas depois de cada queda e a beleza discreta de um coração que, apesar de tudo, ainda não desistiu de sentir.</p>

      <p>Foi então que compreendi que o meu desejo ia além de entender quem és. Queria fazer parte da tua caminhada, celebrar os teus sorrisos, amparar os teus dias difíceis e construir memórias que o tempo nunca apagasse.</p>

      <p>Não desejo ser apenas uma lembrança bonita na tua história.<br>
      Desejo ser presença quando o mundo parecer distante, serenidade quando o medo falar mais alto, carinho quando as palavras faltarem e companhia em cada nova estação da tua vida.</p>

      <p>Acima de tudo, desejo ser alguém que, sem promessas impossíveis, te ajude a redescobrir que o amor verdadeiro não se prova com discursos grandiosos, mas com a constância de quem escolhe permanecer.</p>
    `
  },
  {
    "slug": "reflexoes-sobre-amor-escolha-e-atitude",
    "titulo": "Reflexões sobre amor, escolha e atitude.",
    "descricao": "Reflexão profunda sobre saudade, escolhas diárias e o verdadeiro significado do amor.",
    "categoria": "Reflexões",
    "data": "16 de junho de 2026",
    "tempo": "5 min",
    "texto": `
      <p>Há sentimentos que não precisam de explicação.<br>
Quando alguém passa a ocupar um lugar especial no nosso coração, a presença dessa pessoa transforma os dias. Um encontro deixa de ser apenas um momento; torna-se uma memória que desejamos repetir. A saudade deixa de ser uma palavra e passa a ser a vontade silenciosa de voltar a ver quem nos faz bem.</p>

<p>Por isso, sempre me perguntei: se duas pessoas dizem sentir saudades uma da outra, mas nunca encontram um momento para se aproximarem, será mesmo saudade o que sentem? Porque a saudade também se revela nas atitudes, não apenas nas palavras.</p>

<p>Acredito que as relações mais bonitas não se medem pelo tempo que existe entre dois corações, mas pela profundidade da ligação que conseguem construir.<br>
O amor, por si só, é apenas uma palavra.<br>
São as pessoas que lhe dão significado.<br>
São os gestos, a presença, o cuidado e a escolha diária de permanecer.</p>

<p>Talvez eu tenha insistido mais do que devia.<br>
Não porque quisesse convencer-te de alguma coisa, mas porque, no íntimo, desejava que fosses tu a dar um novo significado a essa palavra na minha vida.</p>

<p>Não acredito em pessoas perfeitas.<br>
Acredito em pessoas que nos fazem crescer, que nos trazem paz e que tornam os dias mais leves simplesmente por existirem.</p>

<p>Nem tudo o que vale a pena nasce pronto.<br>
Há relações que exigem paciência, diálogo e vontade de construir.<br>
Nem sempre o tempo resolve as coisas.<br>
Muitas vezes, é a coragem de escolher, de conversar, de perdoar e de permanecer que faz a diferença.</p>

<p>Também não existe um momento perfeito para amar.<br>
Esperamos sentir absoluta certeza, mas a vida raramente nos oferece essa garantia. Vivemos entre dúvidas, sonhos e receios, tentando descobrir quem somos e para onde caminhamos.<br>
Talvez nunca nos sintamos completamente preparados.<br>
Ainda assim, a vida continua a convidar-nos para viver.</p>

<p>Ama sem perder a tua essência.<br>
Viaja sem medo de descobrir novos caminhos.<br>
Permanece fiel aos teus princípios.<br>
E nunca entregues a tua felicidade apenas às circunstâncias ou às escolhas dos outros.</p>

<p>Porque, no fim, a felicidade começa quando temos coragem de viver a vida que o nosso coração, guiado pela consciência e pela fé, sabe que vale a pena viver.</p>
    `
  },
  {
    "slug": "lamento-do-sonhador",
    "titulo": "Lamento do Sonhador",
    "descricao": "O lamento de quem continua dando e sonhando, mesmo depois de muitas desilusões.",
    "categoria": "Saudade",
    "data": "16 de junho de 2026",
    "tempo": "4 min",
    "texto": `
    <p>Dou sempre, até quando meu peito Já é só eco e silêncio. Carrego o peso<br>
de mundos Que nunca foram meus, E mesmo assim, sorrio Porque aprendi<br>
que quem dá Não deve esperar de volta.</p>

<p>Mas no fundo, Um canto escondido da minha alma Grita por alguém que<br>
venha Com as mãos cheias de primavera, E me diga que o sol também<br>
Nasce para mim.</p>

<p>Quero uma menina que traga Nas pupilas a cor do amanhecer, Que entre<br>
pela minha vida Como quem abre janelas num quarto fechado, E pinte nas<br>
paredes gastas A palavra esperança.</p>

<p>Não peço muito Apenas que ela olhe para mim E veja, por trás do cansaço,<br>
O homem que ainda sonha.</p>

<p>Num trilho incerto, meu peito corria, Montanha-russa de noite e de dia,<br>
Esperança no alto, medo no chão, Sonhando com um sim, recebendo um<br>
“talvez” na mão.</p>

<p>Ela vinha em dias de vento frio, Quando precisava de abrigo, calor e arrepio,<br>
Ou quando o silêncio era um peso mortal, Mas nunca para ficar… só para<br>
não brigar afinal.</p>

<p>Lá no fundo, sei que havia um querer, Mas cercado de escolhas, difícil de<br>
ver, E o tempo ensinando, ou tentando ensinar, Que amar é escolher, e não<br>
só se deixar levar.</p>

<p>Quando o destino parecia sorrir, E o “nós” quase podia existir, Ela partiu,<br>
levou o sol, levou o riso, Deixou-me sozinho, com o céu indeciso.</p>

<p>Agora espero, talvez em vão, Uma luz que atravesse a minha estação, Que<br>
traga cor, coragem e clareza, E não se perca no labirinto da incerteza.</p>
    `
  },
  {
    "slug": "a-vida-e-um-jogo",
    "titulo": "A Vida é um Jogo",
    "descricao": "Uma metáfora da vida como jogo, com Deus como o grande juiz final.",
    "categoria": "Vida",
    "data": "16 de junho de 2026",
    "tempo": "4 min",
    "texto": `
    <p>A vida é um jogo.<br>
Por mais longe que alguém caminhe,<br>
ninguém vence completamente sozinho.<br>
Cada escolha é um movimento,<br>
cada encontro, uma nova partida,<br>
e cada despedida<br>
ensina que nem todas as vitórias<br>
cabem num placar.</p>

<p>Vivemos sob regras<br>
que nem sempre compreendemos,<br>
colecionando conquistas,<br>
derrotas,<br>
aprendizados<br>
e pessoas que cruzam o nosso caminho<br>
como companheiros de equipa.</p>

<p>Alguns acreditam<br>
que o dinheiro é a maior pontuação.<br>
Outros perseguem fama,<br>
poder<br>
ou reconhecimento.<br>
Mas, quando o dia termina,<br>
percebemos que nenhuma dessas coisas<br>
é suficiente para sustentar uma vida inteira.</p>

<p>Trabalhamos para construir o amanhã.<br>
Acordamos cedo,<br>
caímos,<br>
levantamo-nos<br>
e tentamos ser melhores<br>
do que fomos ontem.<br>
Poucos conseguem tudo o que desejam.<br>
Muitos aprendem a encontrar alegria<br>
naquilo que possuem.</p>

<p>Embora pertençamos<br>
a famílias diferentes,<br>
falemos línguas diferentes<br>
e vivamos histórias diferentes,<br>
partilhamos o mesmo mundo<br>
e a mesma condição humana.</p>

<p>No fim,<br>
cada um atravessa sozinho<br>
a última porta desta existência.<br>
Mas esse não é o fim do jogo.<br>
Acima do tempo<br>
e além de tudo o que os olhos alcançam,<br>
há um Deus<br>
que conhece cada partida,<br>
cada lágrima<br>
e cada vitória silenciosa.</p>

<p>Quando Ele chamar o apito final,<br>
o jogo terminará para sempre.<br>
Não haverá mais dor,<br>
nem medo,<br>
nem despedidas.<br>
E aqueles que escolheram caminhar com Ele<br>
descobrirão que a verdadeira vitória<br>
nunca esteve naquilo que conquistaram,<br>
mas em Quem decidiram seguir.</p>
    `
  },
  {
    "slug": "o-reflexo-de-deus",
    "titulo": "O Reflexo de Deus",
    "descricao": "Convite a brilhar como reflexo da luz divina no mundo.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "6 min",
    "texto": `
    <p>Às vezes eu acordo cedo<br>
Para ser melhor do que ontem fui,<br>
Porém, já sei o que preciso ter<br>
Para ser uma luz para o mundo.</p>

<p>Sou um homem pequeno demais<br>
E a obra é grande para mim,<br>
Mas Cristo é maior e vai<br>
Suster-me até ao fim.</p>

<p>Não esconda a tua luz,<br>
Você precisa pregar bem alto.<br>
E todos vão entender<br>
Que quem se humilha eu exalto.</p>

<p>Olhe o céu azul e o mar também,<br>
Mas o mar por si não é azul,<br>
Pois ele reflete o céu,<br>
A sua luz,<br>
A cor<br>
E a beleza também.</p>

<p>Assim é você,<br>
Reflexo de Deus,<br>
Que deve brilhar<br>
A luz que emana dos céus.</p>

<p>Adão perdeu,<br>
Mas Cristo de novo recebeu<br>
A glória de Deus<br>
E nos devolveu.</p>

<p>Não precisas fingir ser alguém,<br>
Ostentar o que tu não tens,<br>
E nem se entregar<br>
Aos prazeres temporais.</p>

<p>Cristo pede fé e não presunção,<br>
Isso é que é ser cristão,<br>
Largar o conforto e a ambição.</p>

<p>Ninguém nasce vazio,<br>
Um talento tu tens.<br>
Não o enterres<br>
E vais ver que Cristo te sustém.</p>

<p>Olhe a distância do céu,<br>
O amor de Deus é maior.<br>
O calvário revelou<br>
Que a tua alma tem valor.</p>

<p>Abra o coração<br>
E deixe a luz entrar,<br>
Que o Espírito Santo<br>
Em ti vai habitar.</p>

<p>O mal não vai prevalecer,<br>
Para o mundo você vai morrer,<br>
O espírito vai reviver<br>
E você vai vencer.</p>
    `
  },
  {
    "slug": "cristo-nos-amou",
    "titulo": "Cristo Nos Amou",
    "descricao": "Mensagem sobre o amor, sacrifício e salvação de Cristo.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "5 min",
    "texto": `
    <p>Cristo nos amou,<br>
Ele é um justo juiz.<br>
Ninguém o obrigou,<br>
Ele próprio nos quis.</p>

<p>Como homem desceu<br>
E o exemplo nos deu.<br>
Mas os Escribas e Fariseus<br>
Não submeteram-se a Deus.</p>

<p>Ele é Deus que nos criou,<br>
Deus que nos amou<br>
E Deus que nos salvou.<br>
Com o seu sangue nos lavou,<br>
Do pecado resgatou<br>
E a sua graça nos entregou.</p>

<p>Somos servos de Deus,<br>
Sempre leais,<br>
Dispostos a tempo e hora,<br>
E não recuam para trás.</p>

<p>O inimigo é voraz,<br>
Não podemos sonegar,<br>
Pois o ladrão semeia o joio<br>
Quando a noite chegar.</p>

<p>Por que tentas com a tua força<br>
Se Cristo é a tua resposta?<br>
Apenas dê um passo,<br>
E o que você não poder<br>
Ele vai resolver.</p>

<p>Somos chamados a viver o cristianismo,<br>
Não o fanatismo e nem o liberalismo.<br>
Por que reclamas tu do que não entendes?<br>
Viva a luz que tu tens e de Cristo depende.</p>

<p>Satanás acrescenta mil passos<br>
Em um único que você dá<br>
Na direcção contrária a tua salvação,<br>
E depois você terá que lutar<br>
Para desfazer os 1001<br>
Que te impedem de alcançar a perfeição.</p>

<p>Podes ser habilitado a fazer muitas coisas,<br>
Mas se fazeres para ser visto,<br>
De nada vale.</p>
`
  },
  {
    "slug": "jaco-e-esau",
    "titulo": "Jacó e Esaú",
    "descricao": "Contraste entre a escolha de Jacó e a perdição de Esaú, com aplicação para os dias atuais.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "5 min",
    "texto": `
    <p>Esta é a contrafacção<br>
Entre a mistificação<br>
E a transformação.<br>
E como o que faz uma bela canção,<br>
Agradeço a Deus por sua proteção.</p>

<p>Que linda visão Jacó descreve,<br>
E que grande desilusão Esaú teve<br>
Jacó por olhar o horizonte,<br>
Que preserva sempre uma fonte de esperança,<br>
E por estar em cima da ponte que é Jesus,<br>
Alcançou a bonança que provém da Cruz.</p>

<p>Esaú perdido na confusão<br>
De sua própria acção,<br>
Sem preocupação,<br>
Estava decaíndo na perdição.</p>

<p>Actualmente:<br>
Os jovens se tornaram inconsequentes,<br>
Na presença de Deus são irreverentes<br>
E na vida social indecentes.<br>
Cristãos são santificados por instantes,<br>
De Cristo não são representantes,<br>
Pois não querem dar a vida pelos seus semelhantes.</p>

<p>O tempo não mente,<br>
E com forte corrente,<br>
Revelará toda estéril semente,<br>
Dos jovens principalmente,<br>
Que querem pecar infinitamente.</p>

<p>Ao inimigo não podemos subestimar,<br>
Para se ter a paciência de Jó é preciso acreditar<br>
E ter tempo para orar.<br>
Sim! Deus quer nos ouvir a desabafar.<br>
Na vida cristã a oração é o respirar,<br>
Não podemos os braços cruzar<br>
E nos enganar de que boas coisas a vida nos deve dar,<br>
Se nada fizermos para alcançar<br>
O nosso tão desejado lar.</p>
`
  },
  {
    "slug": "o-amor-a-fe-e-a-esperanca",
    "titulo": "O Amor, a Fé e a Esperança",
    "descricao": "Lições sobre amor, fé e esperança em tempos de iniquidade.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "5 min",
    "texto": `
    <p>E por se multiplicar a iniquidade<br>
O amor de muitos esfriará.</p>

<p>Amar é perdoar,<br>
Chorar,<br>
Curvar-se e implorar.<br>
Quem ama se cansa,<br>
Porém, não é neste mundo que se decansa.<br>
Quem ama entende,<br>
E a mão estende<br>
Ao necessitado que depende.</p>

<p>A fé é como quando amanhece,<br>
Tudo aparece,<br>
Depois anoitece<br>
E tudo desvanece,<br>
Entretanto você permanece.</p>

<p>Quem tem fé ensina<br>
E também peregrina.<br>
Quem tem fé ordena,<br>
Também coordena,<br>
Mas nunca condena.</p>

<p>Tenha esperança,<br>
Ninguém te tira a paz se não permitires,<br>
És forte por ali dentro se tu insistires.<br>
O caminho é longo e tem muitas pedras,<br>
Porém, Cristo endireitará as tuas veredas.</p>

<p>Ele diz que está a tua frente<br>
E que já passou por aí,<br>
Então, concentre a tua mente para não cair.<br>
Comece de novo,<br>
Agora com mais força,<br>
Não deixes tudo por um gozo temporário<br>
Que te prende numa roça.</p>

<p>A vida é uma dura prova,<br>
Não é atóa que quase todo mundo reprova,<br>
E anda na contramão<br>
Do título desta lição: O amor, a fé e a esperança.</p>
`
  },
  {
    "slug": "o-que-deve-possuir-o-relacionamento",
    "titulo": "O Que Deve Possuir o Relacionamento?",
    "descricao": "Princípios e valores essenciais para um relacionamento saudável.",
    "categoria": "Amor",
    "data": "16 de junho de 2026",
    "tempo": "6 min",
    "texto": `
    <p>O que deve possuir o relacionamento?<br>
Liderança, autocontrole,<br>
Ser de palavra e ter fidelidade.<br>
Cada um saber se comportar<br>
Com outras pessoas do gênero oposto.</p>

<p>É preciso segurança<br>
Ao invés de desconfiança.<br>
E isso através da conversa,<br>
Um dos pilares do relacionamento.</p>

<p>É necessário criticar com a verdade<br>
Do que elogiar com a falsidade.<br>
Perguntar se você pode comprar<br>
Ao invés de dar a conhecer o que já comprou.<br>
Pedir desculpas<br>
E não dar justificações.</p>

<p>Estar em silêncio<br>
E manter a paz,<br>
Evitar o tumulto e o letígio.<br>
Praticar a gratidão,<br>
Rejeitar o orgulho<br>
Que nos impede de reconhecer o esforço alheio.<br>
Ajudar, e não deixar tudo para o outro.</p>

<p>É preciso ter um objectivo<br>
Para não ser um barco que anda em círculos.<br>
É preciso ter reputação<br>
Para não dar má impressão.<br>
É preciso ter coragem<br>
Para não desistir e fugir.</p>

<p>A felicidade vem quando todos amam cuidar,<br>
E têm respeito sem precisar forçar.<br>
É continuar com o empenho e sacrifício<br>
Que se tinha no namoro.</p>

<p>É saber diferenciar três coisas, que são:<br>
Gostar,<br>
Se apaixonar<br>
E amar.</p>

<p>É ser inteligente,<br>
Sorridente,<br>
Bem humorado<br>
E semelhante um do outro.<br>
Ter personalidade e atitude Cristã,<br>
Pois quem não ama Deus,<br>
O Criador que é perfeito,<br>
Não pode amar<br>
A criatura que é imperfeita.<br>
Quem não conhece Deus,<br>
Que é o próprio amor,<br>
Não pode saber ao outro dar valor.<br>
Por não ser um simples sentimento,<br>
Mas um princípio sem rudimentos.</p>
`
  },
  {
    "slug": "a-responsabilidade-do-lider-e-o-comprometimento-do-povo",
    "titulo": "A Responsabilidade do Líder e o Comprometimento do Povo",
    "descricao": "Reflexão sobre liderança, responsabilidade e vida cristã.",
    "categoria": "Reflexões",
    "data": "16 de junho de 2026",
    "tempo": "5 min",
    "texto": `
    <p>Um verdadeiro líder<br>
Não é aquele que está sempre pronto<br>
Para repreender os erros de seu povo,<br>
Mas aquele que está presente<br>
Para evitar que eles cometam algum.</p>

<p>Nem sempre o líder é responsável<br>
Pela perdição de uma alma,<br>
Só permanece na videira<br>
Quem a Cristo realmente ama.</p>

<p>Judas andou com Jesus<br>
E mesmo assim se perdeu.<br>
Tomé o viu,<br>
Mas não creu.<br>
Pedro viveu com Cristo,<br>
E não o reconheceu.</p>

<p>Esqueça as palavras<br>
Que só te causam dor,<br>
Nenhuma crítica te afecta<br>
Quando você conhece<br>
O teu próprio valor.</p>

<p>O caminho é em frente,<br>
Então enfrente o inimigo.<br>
Inimigo que pode ser<br>
O teu próprio espírito vacilante,<br>
Então não sejas santificado por instantes.</p>

<p>Para ser bom em algo<br>
É preciso tempo.<br>
Tempo para errar no princípio<br>
E ser perfeito no fim.<br>
Fim que será inalcançável<br>
Caso não venças<br>
Os teus medos e arrependimentos.</p>

<p>Arrependimentos que podiam<br>
Se tornar em experiências,<br>
Medos que podiam<br>
Tornar-se em esperança e coragem.<br>
Dor, medo e sofrimento,<br>
Neste mundo é tudo<br>
Uma questão de tempo.</p>

<p>As pessoas te enganam<br>
No caminho,<br>
Pois sabem<br>
Que se você chegar no teu destino,<br>
Já não darás ouvidos<br>
Aos seus maus ensinos.</p>
`
  },
  {
    "slug": "teriamos-20-missionarios-onde-ha-apenas-1",
    "titulo": "Teríamos 20 Missionários Onde Há Apenas 1",
    "descricao": "Apelo à unidade, humildade e empenho na obra de Deus.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "4 min",
    "texto": `
    <p>Lembre-se da humildade<br>
Mais do que da vaidade.<br>
Viva sem desânimo<br>
Do que você tem<br>
E sem cobiça<br>
Do que os outros têm.</p>

<p>Nenhum carácter é melhor<br>
Do que o outro<br>
Ao tentar viver toda a verdade,<br>
O objectivo é enfraquecer os defeitos<br>
E aperfeiçoar as qualidades.</p>

<p>Os 144 mil pregarão juntos,<br>
Sem discórdia semelhante a que temos.<br>
Diz Deus:<br>
“Não é a soma das coisas que fazem<br>
E nem os resultados que obtêm,<br>
Mas o espírito com que realizam.<br>
Se todos vocês se empenharem<br>
Na minha obra, com todo amor,<br>
Unindo os dons e talentos,<br>
Causando grandes reavivamentos,<br>
Teríam 20 missionários onde há apenas um.”</p>

<p>Porém, diz Satanás:<br>
“Vivei como quiser o céu é vosso lar,<br>
Cristo já morreu não há mais nada a pagar.”<br>
Mas que grande engano Satânico!<br>
O que mais poderia sugerir um sádico?</p>

<p>Sabei que a vida é feita de escolhas.<br>
Quando você dá um passo para frente,<br>
Alguma coisa fica para trás.<br>
Não podes soltar a Cristo<br>
E ao mesmo tempo Barrabás.</p>
`
  },
  {
    "slug": "certos-e-errados-sendo-condenados",
    "titulo": "Certos e Errados Sendo Condenados",
    "descricao": "Crítica à superficialidade espiritual e convite à verdadeira conversão.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "4 min",
    "texto": `
    <p>No nosso tempo,<br>
Os certos e os errados<br>
Estão sendo condenados.<br>
Os errados<br>
Porque escolhem verdades<br>
Para viver,<br>
E os certos<br>
Porque vivem superficialmente<br>
Toda a verdade.</p>

<p>Entende que muitos são chamados<br>
E poucos escolhidos.<br>
Devem mudar<br>
Seus hábitos e costumes<br>
Se da justiça quiserem ser revestidos.</p>

<p>Quando você é chamado,<br>
Muitas vezes arrependido,<br>
Mas nunca convertido,<br>
No teu coração pode ter sido erguido<br>
O altar de Baal,<br>
Tentando fazer o bem<br>
Estando acostumado a fazer o mal.<br>
E se os teus olhos fossem abertos<br>
Verias Satanás em um sorriso infernal.</p>

<p>Ser amigo de um servo de Deus<br>
Não é ser amigo do próprio Deus.<br>
Deves realizar o teu próprio casamento<br>
Com Cristo.<br>
Diz ao inimigo:<br>
“Eu nunca desisto.”<br>
E não se preocupe,<br>
Pois com fé no coração,<br>
Aparece a solução.</p>
`
  },
  {
    "slug": "crente-cegado-ou-descrente-que-pode-ser-despertado",
    "titulo": "Cren­te Cegado ou Descrente que Pode Ser Despertado",
    "descricao": "Alerta sobre valores invertidos e a necessidade de transformação genuína.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "4 min",
    "texto": `
    <p>Valores invertidos,<br>
Está tudo trocado.<br>
Largou-se a santidade<br>
Para abraçar o pecado.<br>
No tempo do fim<br>
É que colocam Jesus de lado.<br>
Abandonam seus dons,<br>
talentos e até esqueçem-se<br>
Do seu chamado.</p>

<p>Satanás quer<br>
Mais crentes cegados<br>
Do que descrentes<br>
Que podem ser despertados.</p>

<p>Porque podes ser<br>
Muitas vezes perdoado,<br>
Mas se não fores transformado,<br>
Serás ultrapassado<br>
E um descrente declarado,<br>
Te exaltaste até ao céu<br>
E serás abatido até a terra de pecado.</p>

<p>Fazendo o bem ou o mal,<br>
Por Satanás serás sempre odiado,<br>
E por Deus sempre amado.</p>

<p>É pecado<br>
E não um simples rudimento,<br>
Fazer o que só te cabe no pensamento.<br>
Não é para desistir,<br>
Mas para deixar de se iludir,<br>
Antes que você perceba tarde demais<br>
Que podias fazer um pouco mais.</p>
`
  },
  {
    "slug": "eis-que-o-machado-esta-posto",
    "titulo": "Eis Que o Machado Está Posto",
    "descricao": "Mensagem profética sobre escolha entre o bem e o mal, arrependimento e salvação.",
    "categoria": "Fé",
    "data": "16 de junho de 2026",
    "tempo": "3 min",
    "texto": `
    <p>Agora vou me erguer aqui,<br>
Para justificar.<br>
Meu povo eu sou teu Deus,<br>
Rei de Israel e Senhor dos céus.<br>
Todos vocês são iguais,<br>
Seu tempo é curto aqui.<br>
Ao pó você irá voltar,<br>
Mas vida eu quero te dar no lar.</p>

<p>Se o Senhor é teu Deus,<br>
Então siga a ele.<br>
E caso não seja,<br>
Então siga a Baal.<br>
Se não há comunhão entre as trevas e a luz,<br>
Quem produz boas obras é filho de Jesus.</p>

<p>Eis que o machado está posto a árvore má,<br>
Quem não produz frutos,<br>
Já cortado será.<br>
Busquem-me, pois minha face encoberta não está,<br>
Seus pecados é que tiram a minha presença.</p>

<p>Não espere a minha vinda para se arrepender,<br>
Pois o teu suspiro antes podes render.<br>
O mal te acorrenta e eu quero a tua paz.<br>
Prazer temporário ou eterno, qual tu escolherás?</p>

<p>Um momento de dor não é maior<br>
Que uma eternidade de glória,<br>
O exemplo eu te dei aqui,<br>
Para salvar como eu te salvei<br>
Com amor.</p>
`
  }
];

/* Lista oficial de categorias (ordem dos filtros na biblioteca) */
const CATEGORIAS = [
  "Amor",
  "Esperança",
  "Vida",
  "Fé",
  "Saudade",
  "Silêncio",
  "Reflexões",
  "Superação",
  "Outros",
];

/* Versos para o «Verso do dia» — escolhido por dia do ano em script.js */
const VERSOS = [
  "Há silêncios que abraçam melhor do que braços.",
  "A esperança não grita: acende-se, devagar, como um candeeiro antigo.",
  "O amor verdadeiro cabe num gesto pequeno repetido todos os dias.",
  "A saudade é a memória a pedir mais um capítulo.",
  "Ser feliz também é um ofício que se aprende com paciência.",
  "Deus escuta melhor quem fala baixinho.",
  "O tempo não cura: ensina a carregar com mais ternura.",
  "Toda a tempestade esquece que a raiz também cresce no escuro.",
  "Entre duas páginas de um livro cabe uma vida inteira.",
  "Escuta: até o silêncio tem coisas para te dizer.",
];
