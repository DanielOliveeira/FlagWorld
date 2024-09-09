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
        idioma: "Espanhol",
        hemisferio: "Sul",
        bandeira: "bandeiras/argentina.png",
        letra: "A"
      },
      "Bolivia": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Sul",
        bandeira: "bandeiras/bolivia.png",
        letra: "B"
      },
      "Chile": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Sul",
        bandeira: "bandeiras/chile.png",
        letra: "C"
      },
      "Equador": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/equador.png",
        letra: "E"
      },
      "Guiana": {
        continente: "América do Sul",
        idioma: "Inglês",
        hemisferio: "Norte",
        bandeira: "bandeiras/guiana.png",
        letra: "G"
      },
      "Guiana Francesa": {
        continente: "América do Sul",
        idioma: "Francês",
        hemisferio: "Norte",
        bandeira: "bandeiras/guiana_francesa.png",
        letra: "G"
      },
      "Paraguai": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Sul",
        bandeira: "bandeiras/paraguai.png",
        letra: "P"
      },
      "Peru": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Sul",
        bandeira: "bandeiras/peru.png",
        letra: "P"
      },
      "Suriname": {
        continente: "América do Sul",
        idioma: "Neerlandês",
        hemisferio: "Sul",
        bandeira: "bandeiras/suriname.png",
        letra: "S"
      },
      "Uruguai": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Sul",
        bandeira: "bandeiras/uruguai.png",
        letra: "U"
      },
      "Venezuela": {
        continente: "América do Sul",
        idioma: "Espanhol",
        hemisferio: "Norte",
        bandeira: "bandeiras/venezuela.png",
        letra: "V"
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
  
    // Limpar as dicas
    document.getElementById("dica-continente").innerHTML = "";
    document.getElementById("dica-letra").innerHTML = "";
    document.getElementById("dica-idioma").innerHTML = "";
    document.getElementById("dica-hemisferio").innerHTML = "";
    document.getElementById("dica-bandeira-img").src = " ";
  
    // Evento de click no botão de adivinhar
    document.getElementById("btn-adivinhar").addEventListener("click", function() {
        const paisDigitado = document.getElementById("input-pais").value;
      
        if (paises[paisDigitado]) {
          compararPaises(paises[paisDigitado], paises[paisCorreto]);
        } else {
          alert("País não encontrado.");
        }
      });
      
      // Função para comparar os países
      function compararPaises(paisDigitado, paisCorreto) {
        
        // Verificar se o país digitado é igual ao país correto
        if (paisDigitado === paisCorreto) {
          alert("Parabéns! Você acertou o país.");
        } else {

          // Mostrar as dicas

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
          document.getElementById("dica-bandeira-img").src = paisDigitado.bandeira;
        }
      }
}