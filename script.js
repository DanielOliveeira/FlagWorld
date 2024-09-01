window.onload = function() {
    const paises = {
      "Brasil": {
        continente: "América do Sul",
        idioma: "Português",
        hemisferio: "Sul",
        bandeira: "bandeiras/brasil.png",
        letra: "B"
      },
      "Colômbia": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/colombia.png",
        letra: "C"
      },
      "Argentina": {
        continente: "América do Sul",
        idioma: "Português",
        hemisferio: "Sul",
        bandeira: "bandeiras/argentian.png",
        letra: "B"
      },
      "Bolivia": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/bolivia.png",
        letra: "B"
      },
      "Chile": {
        continente: "América do Sul",
        idioma: "Português",
        hemisferio: "Sul",
        bandeira: "bandeiras/brasil.png",
        letra: "B"
      },
      "Equador": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/colombia.png",
        letra: "C"
      },
      "Guia": {
        continente: "América do Sul",
        idioma: "Português",
        hemisferio: "Sul",
        bandeira: "bandeiras/brasil.png",
        letra: "B"
      },
      "Guiana Francesa": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/colombia.png",
        letra: "C"
      },
      "Paraguai": {
        continente: "América do Sul",
        idioma: "Português",
        hemisferio: "Sul",
        bandeira: "bandeiras/brasil.png",
        letra: "B"
      },
      "Peru": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/colombia.png",
        letra: "C"
      },
      "Suriname": {
        continente: "América do Sul",
        idioma: "Português",
        hemisferio: "Sul",
        bandeira: "bandeiras/brasil.png",
        letra: "B"
      },
      "Uruguai": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/colombia.png",
        letra: "C"
      },
      "Venezuela": {
        continente: "América do Sul",
        idioma: "Português",
        hemisferio: "Sul",
        bandeira: "bandeiras/brasil.png",
        letra: "B"
      },
      // Adicione mais países aqui...
    };
  
    // Função para randomizar o país correto
    function getRandomPais() {
      const paisesArray = Object.keys(paises);
      const indiceAleatorio = Math.floor(Math.random() * paisesArray.length);
      return paisesArray[indiceAleatorio];
    }
  
    // Pais correto randomizado
    let paisCorreto = getRandomPais();
  
    // Atualizar a bandeira no topo da página
    document.getElementById("flag").src = paises[paisCorreto].bandeira;
  
    // Mostrar informações do país correto
    compararPaises(paises[paisCorreto], paises[paisCorreto]);
  
    // Evento de click no botão de adivinhar
    document.getElementById("btn-adivinhar").addEventListener("click", function() {
      const paisDigitado = document.getElementById("input-pais").value;
  
      if (paises[paisDigitado]) {
        compararPaises(paises[paisDigitado], paises[paisCorreto]);
      } else {
        alert("País não encontrado.");
      }
    });
  }
  
  // Função para comparar os países
  function compararPaises(paisDigitado, paisCorreto) {
    // Continente
    if (paisDigitado.continente === paisCorreto.continente) {
      document.getElementById("dica-continente").style.backgroundColor = "green";
      document.getElementById("dica-continente").innerHTML = `Continente: ${paisDigitado.continente} (igual)`;
    } else {
      document.getElementById("dica-continente").style.backgroundColor = "red";
      document.getElementById("dica-continente").innerHTML = `Continente: ${paisDigitado.continente} (diferente)`;
    }
  
    // 1ª Letra
    if (paisDigitado.letra === paisCorreto.letra) {
      document.getElementById("dica-letra").style.backgroundColor = "green";
      document.getElementById("dica-letra").innerHTML = `Letra: ${paisDigitado.letra} (igual)`;
    } else {
      document.getElementById("dica-letra").style.backgroundColor = "red";
      document.getElementById("dica-letra").innerHTML = `Letra: ${paisDigitado.letra} (diferente)`;
    }
  
    // Idioma principal
    if (paisDigitado.idioma === paisCorreto.idioma) {
      document.getElementById("dica-idioma").style.backgroundColor = "green";
      document.getElementById("dica-idioma").innerHTML = `Idioma: ${paisDigitado.idioma} (igual)`;
    } else {
      document.getElementById("dica-idioma").style.backgroundColor = "red";
      document.getElementById("dica-idioma").innerHTML = `Idioma: ${paisDigitado.idioma} (diferente)`;
    }
  
    // Hemisfério
    if (paisDigitado.hemisferio === paisCorreto.hemisferio) {
      document.getElementById("dica-hemisferio").style.backgroundColor = "green";
      document.getElementById("dica-hemisferio").innerHTML = `Hemisfério: ${paisDigitado.hemisferio} (igual)`;
    } else {
      document.getElementById("dica-hemisferio").style.backgroundColor = "red";
      document.getElementById("dica-hemisferio").innerHTML = `Hemisfério: ${paisDigitado.hemisferio} (diferente)`;
    }
  }