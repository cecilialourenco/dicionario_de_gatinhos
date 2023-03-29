function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Gato Branco",
      imagem: "img/gatoBranco.jpg",
      descricao:
        "Os gatos completamente brancos, na realidade, são a representação da total ausência de cor na pelagem felina, determinada pela genética de seus pais. Na grande maioria das vezes, os olhos destes gatos variam entre as cores azul e cobre, e é bastante frequente a presença de um olho de cada cor nos bichanos brancos – característica que os torna ainda mais interessantes. Os felinos brancos de olhos azuis são mais propensos a apresentarem problemas auditivos que podem levá-los à surdez.",
      citacao: "Temperamento: calmo e silencioso.",
    },
    bio02: {
      nome: "Gato Cinza",
      imagem: "img/gatoCinza.jpg",
      descricao:
        "O gato Vira-Lata cinza pode ser mais ou menos peludo e tem diversos tamanhos, podendo ser mais escuro ou mais claro. Sua característica mais marcante é o companheirismo com o tutor. Sendo uma espécie ideal para quem busca um gato de muita parceria dentro de casa. ",
      citacao: "Temperamento: companheiro.",
    },
    bio03: {
      nome: "Gato Escaminha",
      imagem: "img/gatoEscaminha.jpg",
      descricao:
        "O gato escaminha, ou gato escama de tartaruga, muitas vezes é confundindo com uma raça, mas na verdade, se trata apenas de um padrão de cor. A mistura das cores preta e laranja por todo o corpo traz a ele uma aparência mais exótica e inconfundível. O gato escama de tartaruga geralmente são mais peludos e, assim como os gatos de três cores, carregam a personalidade medrosa e recatada no começo, mas depois de ganharem confiança podem mostrar seu lado mais brincalhão e adorável.",
      citacao: "Temperamento: retraído e brincalhão.",
    },
    bio04: {
      nome: "Gato Frajola",
      imagem: "img/gatoFrajola.jpg",
      descricao:
        "Seja um gato Vira-Lata preto e branco, ou com um par de outras cores neutras, os gatos bicolores são felinos de duas cores diferentes que casam entre si e compõem uma vastidão de diferenças na sua pelagem. Esse tipo de cor é uma das mais comuns, com uma diversidade de combinações, podendo ser um gato Vira-Lata peludo ou com o pelo mais curto. Eles também são conhecidos como “gato frajola”, pela semelhança com o personagem da Looney Tunes. Sua personalidade denota muita independência, sendo um tipo perfeito para quem não quer muita preocupação em estar sempre próximo do bichano. Eles também são conhecidos pelo ar de mistério e semblante distante, com um olhar vago e curioso. Não são muito chegados em carinho, então é importante respeitar quando esse gato não quer um afago.",
      citacao: "Temperamento: independente.",
    },
    bio05: {
      nome: "Gato Laranja",
      imagem: "img/gatoLaranja.jpg",
      descricao:
        "Por questões genéticas, há uma predominância maior de machos do que fêmeas entre os gatos laranjas. Ou seja, é um mito dizer que gatos com essas cores sempre vão ser machos. Os gatos amarelos são conhecidos pela personalidade forte, carente, chamativa e carinhosa. Eles curtem chamar a atenção por onde passam e sempre vão deixar sua marca, seja miando alto ao chegar no ambiente ou implorando por um colo. Eles também vão interagir com objetos da casa para chamar a sua atenção. E a semelhança com o Garfield não é coincidência: amam ser mimados e também podem comer muito, então é bom ter cuidado para que ele não se torne um gato obeso.",
      citacao: "Temperamento: carente e carinhoso.",
    },
    bio06: {
      nome: "Gato Preto",
      imagem: "img/gatoPreto.jpg",
      descricao:
        "Os gatos pretos são mais carinhosos e muito companheiros. Infelizmente os vira-latas pretinhos sofrem com o preconceito por causa da crença de que trazem azar, oque é uma grande mentira, pois na verdade eles são muito tranquilos e adoráveis, com um grande poder de adaptação e caça.",
      citacao: "Temperamento: carinhoso e companheiro.",
    },
    bio07: {
      nome: "Gato Rajado",
      imagem: "img/gatoRajado.jpg",
      descricao:
        "Os gatos rajados são os mais populares do Brasil e costumam ter um apego e carinho muito especial pelos seus tutores, além de serem muito curiosos, brincalhões e agitados. Ou seja, é alegria certa para a sua casa. No começo, podem ser um pouco ariscos e medrosos, mas conforme vão ganhando confiança, se tornam parceiros fiéis para a vida toda. A gata Vira-Lata com essa cor vai ter o mesmo temperamento, muito dengosa e brincalhona. Eles podem ter dois tipos de cores: misturas entre cinza e preto e mistura entre amarelo e laranja. Também pode ter a junção das duas cores em um só gato rajado.",
      citacao: "Temperamento: curioso, carinhoso e brincalhão.",
    },
    bio08: {
      nome: "Gato Sialata",
      imagem: "img/gatoSialata.jpg",
      descricao:
        "O famoso gato Sialata é uma fofura muito parecida com o próprio siamês puro. Para diferenciar um gato Siamês de um Vira-Lata, você deve observar detalhes físicos de cada um. Por exemplo, enquanto o Siamês tem uma aparência física mais longa, esbelta e marcante, o Sialata vai ser mais peludo e de uma aparência mais meiga. Gatos dessa cor são conhecidos pelo lado brincalhão e chamego com os tutores, e mesmo sendo uma raça que se dá bem com crianças, não escondem seu favoritismo por alguém da família. Eles também amam o contato físico e sempre vão estar pedindo carinho.",
      citacao: "Temperamento: brincalhão e carinhoso.",
    },
    bio09: {
      nome: "Gato Tricolor",
      imagem: "img/gatoTricolor.jpg",
      descricao:
        "Também por questões genéticas de reprodução, há uma predominância de gênero feminino entre os gatos tricolores. Pode ser raro, mas não impossível encontrar um gato macho tricolor. Inclusive, gatos machos de três cores recebem o nome de “Macho Klinefelter”, em referência à Síndrome que também atinge humanos e faz com que o homem tenha baixos níveis de testosterona. Normalmente, as gatas tricolores são de personalidade tímida e arisca, ou seja, você precisa fazer um leve esforço para conseguir interagir com elas. Mas não desista! Após ganhar confiança, elas se mostram muito divertidas, brincalhonas, dorminhocas e amorosas.",
      citacao: "Temperamento: tímido, arisco, brincalhão e carinhoso.",
    },
  };
  var content = document.getElementById("content");
  for (var bio in biografias) {
    content.innerHTML +=
      '<div class="card">' +
      '<img src="' +
      biografias[bio].imagem +
      '"/>' +
      "<details>" +
      "<summary>" +
      biografias[bio].nome +
      "</summary>" +
      "<p>" +
      biografias[bio].descricao +
      "</p>" +
      "<blockquote>" +
      biografias[bio].citacao +
      "</blockquote>" +
      "</details>" +
      "</div>";
  }
}

carregaDicionario();
