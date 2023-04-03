function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Gato Branco",
      imagem:
        "https://cvws.icloud-content.com/B/ARhoms160CMtUy6sNF_mKmntG6eBAZ-OQekCUvBFm0v4gUk8wyH-aKCS/gatoBranco.jpg?o=AiIoWpEMnDK9yUUQOvCUUzqMOP3WwCN3xMv2PP1Dog2w&v=1&x=3&a=CAogSO9IvAWEFsygc74BW7HRHyr3vz9i6yhbJzvI4Hvh6swSbRDxh-W59DAY8eTAu_QwIgEAUgTtG6eBWgT-aKCSaiZ6nxTSvFaj08iSe5EdfNJz78vLanqW-GYt02pRRry9mCCqGZsic3ImNMIepsUS5wofcSloJoAZtxtf1pcZyvrArciuLHWk2Bxv_4FQ5PE&e=1680530748&fl=&r=c368540b-0d29-4622-b076-578bafd2cb2d-1&k=pAkpAOyEDvY7EKpvQ23tYg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=qLlR23VO9Ax4d-nca5p5nandJ-M&cd=i",
      descricao:
        "Os gatos completamente brancos, na realidade, são a representação da total ausência de cor na pelagem felina, determinada pela genética de seus pais. Na grande maioria das vezes, os olhos destes gatos variam entre as cores azul e cobre, e é bastante frequente a presença de um olho de cada cor nos bichanos brancos – característica que os torna ainda mais interessantes. Os felinos brancos de olhos azuis são mais propensos a apresentarem problemas auditivos que podem levá-los à surdez.",
      citacao: "Temperamento: calmo e silencioso.",
    },
    bio02: {
      nome: "Gato Cinza",
      imagem:
        "https://cvws.icloud-content.com/B/AdNmkaJKMoGWfPTYWQ2Ie7G-wWUVAaHbAr2Xkvj9FgR5UdS_yie_ftl0/gatoCinza.jpg?o=AubSPtbscNH6Rzi6wDGDc7Km3g8--ZwpQyngfj4bzjMT&v=1&x=3&a=CAogsFQm8xCYeSKge1CzbJ7r9fQLStA_PH-Y3hp10i-N_uISbRDb6ue59DAY28fDu_QwIgEAUgS-wWUVWgS_ftl0aibwDKSY-mKxbeiMCmkzCFk06NAQY0HSfJ7HT4cstYCDv4OSzdTzdHImU83BBzE7VuFDUR04FKnAoF9-6BbhcKO-xjJqa1PuDW5HxE9lVCg&e=1680530793&fl=&r=f0f72c83-015b-4800-822c-d3ac2d7dd23e-1&k=vUCardWzfoaOYXtgAZwk5A&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=wL0NzsdMDPq-80MHQZdbrSBj_cs&cd=i",
      descricao:
        "O gato Vira-Lata cinza pode ser mais ou menos peludo e tem diversos tamanhos, podendo ser mais escuro ou mais claro. Sua característica mais marcante é o companheirismo com o tutor. Sendo uma espécie ideal para quem busca um gato de muita parceria dentro de casa. ",
      citacao: "Temperamento: companheiro.",
    },
    bio03: {
      nome: "Gato Escaminha",
      imagem:
        "https://cvws.icloud-content.com/B/AduO_eYuM6h-8DBLL_N7mhKPyUmeAQTSoEXr7aHAxIeOPNJBmmFkA476/gatoEscaminha.jpg?o=Aj2ypl3zMZZnLM_q8GVfERILCEGG_2rMmdYHXWPhiS2o&v=1&x=3&a=CAogMXypzzR8SH0-GamBTT-fMrQc62cCth6Jq9N2J8QqNpYSbRCQguq59DAYkN_Fu_QwIgEAUgSPyUmeWgRkA476aiYGPNPiCgq5wLoXi7KoyGeM6-ymOM9Q7QXIDzKto23i7VkBOypqwHImhDaWMX1HhiP9Ne40XBKaDuTGHjQmAn9CxKTKKjCDRjdGFo1IQi4&e=1680530829&fl=&r=e4f869d0-002f-4fb9-8ede-5e8940ad6061-1&k=X3p70pMx57WUF18L_9Ndjg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=E73hMmpVVZVgQIyosF1EXl86slk&cd=i",
      descricao:
        "O gato escaminha, ou gato escama de tartaruga, muitas vezes é confundindo com uma raça, mas na verdade, se trata apenas de um padrão de cor. A mistura das cores preta e laranja por todo o corpo traz a ele uma aparência mais exótica e inconfundível. O gato escama de tartaruga geralmente são mais peludos e, assim como os gatos de três cores, carregam a personalidade medrosa e recatada no começo, mas depois de ganharem confiança podem mostrar seu lado mais brincalhão e adorável.",
      citacao: "Temperamento: retraído e brincalhão.",
    },
    bio04: {
      nome: "Gato Frajola",
      imagem:
        "https://cvws.icloud-content.com/B/AXlemQeZylgyBedvwZ7fvA2F6pH-AbZHJTaUkwQMgvDoBjm4l50VhpVz/gatoFrajola.jpg?o=AoLxpSH1jJ6qelITHd72uDZOJLEzHThBwSjFw8M81_Dc&v=1&x=3&a=CAog3dwEH12Fvo3QzxnyqSNLotxr89Lu3959GlU-6oNUUBcSbRDI8Ou59DAYyM3Hu_QwIgEAUgSF6pH-WgQVhpVzaibgWdG6lyPIXvAdauZWcPdIXyny6Bfl6qb58hLSoHNjEhFBfm4Hz3ImP9kUtdSEuiFtM2HnSz0ja9mWn5ufBHxzo7w6XN-FiZgWSTV16Ww&e=1680530859&fl=&r=285038b1-55f4-4c93-970a-d4c6f4bc1352-1&k=mDNLZOpAJalG51tQNlviPA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=d7VCd__9WcU76ov3DnjB-eJNlQY&cd=i",
      descricao:
        "Seja um gato Vira-Lata preto e branco, ou com um par de outras cores neutras, os gatos bicolores são felinos de duas cores diferentes que casam entre si e compõem uma vastidão de diferenças na sua pelagem. Esse tipo de cor é uma das mais comuns, com uma diversidade de combinações, podendo ser um gato Vira-Lata peludo ou com o pelo mais curto. Eles também são conhecidos como “gato frajola”, pela semelhança com o personagem da Looney Tunes. Sua personalidade denota muita independência, sendo um tipo perfeito para quem não quer muita preocupação em estar sempre próximo do bichano. Eles também são conhecidos pelo ar de mistério e semblante distante, com um olhar vago e curioso. Não são muito chegados em carinho, então é importante respeitar quando esse gato não quer um afago.",
      citacao: "Temperamento: independente.",
    },
    bio05: {
      nome: "Gato Laranja",
      imagem:
        "https://cvws.icloud-content.com/B/AZMNnAwiliY2_BZQjIn44DMHx2K9ASMgf816Pszli1o35nbzkYXG4ewo/gatoLaranja.jpg?o=AsSyTqks8sHzERYQSWKXXNo7YsIJ4CPg__6VF0Y8rhNb&v=1&x=3&a=CAog-MnTIehGUaqz_cuLOY6E47H_Lqdt3c5tKurGuz44ttESbRClx-259DAYpaTJu_QwIgEAUgQHx2K9WgTG4ewoaiZNIOBXQfUoG1oLisRP1vu6pgrtu9-48fW5kS33PWjm0R2wZVLlzXImYWvTnSAdu2EH9mAwfFWMqRcKv7dx3r3B2AGqZwIztq8tZBwh7tM&e=1680530887&fl=&r=0ce92c08-9a62-4e26-abd5-895be1ad371d-1&k=GvqXXfthLtVMeOxlBa1YWA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=1_ftGaRBS_V1q-iXO4n2j-7stjs&cd=i",
      descricao:
        "Por questões genéticas, há uma predominância maior de machos do que fêmeas entre os gatos laranjas. Ou seja, é um mito dizer que gatos com essas cores sempre vão ser machos. Os gatos amarelos são conhecidos pela personalidade forte, carente, chamativa e carinhosa. Eles curtem chamar a atenção por onde passam e sempre vão deixar sua marca, seja miando alto ao chegar no ambiente ou implorando por um colo. Eles também vão interagir com objetos da casa para chamar a sua atenção. E a semelhança com o Garfield não é coincidência: amam ser mimados e também podem comer muito, então é bom ter cuidado para que ele não se torne um gato obeso.",
      citacao: "Temperamento: carente e carinhoso.",
    },
    bio06: {
      nome: "Gato Preto",
      imagem:
        "https://cvws.icloud-content.com/B/ASWpGYD8ULJAWTuueGyzc_apUmSRAUYGwazGveiO3c3fpqU1phypw10E/gatoPreto.jpg?o=Ap2DpoKcsEDOuvcibLkc5n6N09HtdKzzIoZp27CONrHm&v=1&x=3&a=CAogTyKwWmf2exaIGDvzjeyYFQPZM76M_YcMBupAVgwvLsoSbRDf_O659DAY39nKu_QwIgEAUgSpUmSRWgSpw10EaiZBrkE0ZmYfnC_A1ZukITZJTWXYhZ6y21jve97zyEai36sTA_A3KnImG8h9vvkwQfjojBG-2xU_1xyTG2Q5b8TqlEDOuXkerpgO9YyKtGA&e=1680530910&fl=&r=dcba47ca-433e-48f6-9123-7dbe4088078f-1&k=g7yYGgg-VvpIXO34pgW0Bw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=P7fo3sMOZmIFyJij73kaw7ZK-Nw&cd=i",
      descricao:
        "Os gatos pretos são mais carinhosos e muito companheiros. Infelizmente os vira-latas pretinhos sofrem com o preconceito por causa da crença de que trazem azar, oque é uma grande mentira, pois na verdade eles são muito tranquilos e adoráveis, com um grande poder de adaptação e caça.",
      citacao: "Temperamento: carinhoso e companheiro.",
    },
    bio07: {
      nome: "Gato Rajado",
      imagem:
        "https://cvws.icloud-content.com/B/Aa0uT9__QlT6rdTYOSWWlQejW6ohAVG9oH2mJ6JeiTwlyNWVphHg1esi/gatoRajado.jpg?o=AgUlZifI3q22yljqFYy21QatYMDqMWDWKBSPGKnCYtdq&v=1&x=3&a=CAogNAoiMR5osiQK54CdLLUqt4h-w_6sNJVj1sg7D77DXY0SbRCA9_C59DAYgNTMu_QwIgEAUgSjW6ohWgTg1esiaiaiwQrtnFNt2s5doD-9s5v4yEz1LgnZJlNgqp7gpXcU6e2StRlCeHImGEfpKhmuGjd4DFK4vnlF5QnfSD3bln8xhdnulGCrm0Wr3UxtO-0&e=1680530942&fl=&r=4721dfd0-d23d-4b4c-b152-fb8feec3e08e-1&k=RdofCQNaBWR5ufxfJ2F8Jg&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=nXi8G6GCLbWs5Em9_ChUFQDqtsc&cd=i",
      descricao:
        "Os gatos rajados são os mais populares do Brasil e costumam ter um apego e carinho muito especial pelos seus tutores, além de serem muito curiosos, brincalhões e agitados. Ou seja, é alegria certa para a sua casa. No começo, podem ser um pouco ariscos e medrosos, mas conforme vão ganhando confiança, se tornam parceiros fiéis para a vida toda. A gata Vira-Lata com essa cor vai ter o mesmo temperamento, muito dengosa e brincalhona. Eles podem ter dois tipos de cores: misturas entre cinza e preto e mistura entre amarelo e laranja. Também pode ter a junção das duas cores em um só gato rajado.",
      citacao: "Temperamento: curioso, carinhoso e brincalhão.",
    },
    bio08: {
      nome: "Gato Sialata",
      imagem:
        "https://cvws.icloud-content.com/B/AVN3DZxs_XhoI3_AS4mvF2xvHimhAYmi9spABzq8IOHuve2EY18606z-/gatoSialata.jpg?o=AqIBakjyY2U2q9slo4lKa7Ckjv5xtpzmr59KCE-5JBJV&v=1&x=3&a=CAogcsfx-sJFGAB-WDYrIpvsuotN9EfNvkjNJQcIwMOdHCUSbRDd1vK59DAY3bPOu_QwIgEAUgRvHimhWgQ606z-aiaXFWxtPRjOhPdWHCM_uHVBv3WrQ8pbyI6Qem4yBz0kNBQ8WgNppXImjXgEe0WB8IlSyWJLxiNhYBgqa2mOFoQopspEFXHUobeUm7FwKxw&e=1680530971&fl=&r=b2c3ec13-7b99-4274-8b1a-82022e952526-1&k=wTMuj1l2mLLDkYRQzBZLjQ&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=_UG6HgGuqw1Dw5mCE2AiogNLwbs&cd=i",
      descricao:
        "O famoso gato Sialata é uma fofura muito parecida com o próprio siamês puro. Para diferenciar um gato Siamês de um Vira-Lata, você deve observar detalhes físicos de cada um. Por exemplo, enquanto o Siamês tem uma aparência física mais longa, esbelta e marcante, o Sialata vai ser mais peludo e de uma aparência mais meiga. Gatos dessa cor são conhecidos pelo lado brincalhão e chamego com os tutores, e mesmo sendo uma raça que se dá bem com crianças, não escondem seu favoritismo por alguém da família. Eles também amam o contato físico e sempre vão estar pedindo carinho.",
      citacao: "Temperamento: brincalhão e carinhoso.",
    },
    bio09: {
      nome: "Gato Tricolor",
      imagem:
        "https://cvws.icloud-content.com/B/AdjYBG4-5pm-c81xWpBapKUNWTjgAZgHsoAwZkF09kk9oyQSsfiJyldz/gatoTricolor.jpg?o=AgpWaa5r8TOFVfFdKxHMsa510V6o1KcCF6PzMYYCTHbO&v=1&x=3&a=CAogTO7gju9gLy2sxLQFH8bPZfKI9WFVnuINr8a6hRJz3QkSbRDw3fS59DAY8LrQu_QwIgEAUgQNWTjgWgSJyldzaialthkCj2A5Hnj7rSFKt685bJLlebBLTAzAiXF-JBpA0OroQrUP4HIm_Z4fNqq-aS8YymR6VeKzv8X8U50UEjrgclcos7-D0_pR40G_C9g&e=1680531004&fl=&r=42772b94-ccbb-4db2-b015-c3ab564e1e58-1&k=9tElH5DL6Gn18XdSOUhM5w&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=110&s=PqTpwgziNHqyq2yRHR4jQ8qKxug&cd=i",
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
