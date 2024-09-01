const paises = {
    "Brasil": {
      continente: "América do Sul",
      idioma: "Português",
      hemisferio: "Sul",
      bandeira: "caminho-da-bandeira-do-brasil",
      letra: "B"
    },
    "Colômbia": {
      continente: "América do Sul",
      idioma: "Espanhol",
      hemisferio: "Norte",
      bandeira: "caminho-da-bandeira-da-colombia",
      letra: "C"
    }
  };
  
  let paisCorreto = "Brasil"; // Exemplo de bandeira correta
  
  document.getElementById("btn-adivinhar").addEventListener("click", function() {
    const paisDigitado = document.getElementById("input-pais").value;
  
    if (paises[paisDigitado]) {
      compararPaises(paises[paisDigitado], paises[paisCorreto]);
    } else {
      alert("País não encontrado.");
    }
  });
  
  function compararPaises(paisDigitado, paisCorreto) {
    // Continente
    if (paisDigitado.continente === paisCorreto.continente) {
      document.getElementById("dica-continente").style.backgroundColor = "green";
    } else {
      document.getElementById("dica-continente").style.backgroundColor = "red";
    }
  
    // 1ª Letra
    if (paisDigitado.letra === paisCorreto.letra) {
      document.getElementById("dica-letra").style.backgroundColor = "green";
    } else {
      document.getElementById("dica-letra").style.backgroundColor = "red";
    }
  
    // Idioma principal
    if (paisDigitado.idioma === paisCorreto.idioma) {
      document.getElementById("dica-idioma").style.backgroundColor = "green";
    } else {
      document.getElementById("dica-idioma").style.backgroundColor = "red";
    }
  
    // Hemisfério
    if (paisDigitado.hemisferio === paisCorreto.hemisferio) {
      document.getElementById("dica-hemisferio").style.backgroundColor = "green";
    } else {
      document.getElementById("dica-hemisferio").style.backgroundColor = "red";
    }
  }
  