let resultados = "";

function adivinhar()
{
    let dica = document.getElementById("dicasPais");
    
    let res = document.getElementById("input-pais").value

    for (let i of paises) {
        if(i.nome.toLowerCase() == res.toLowerCase()){
            resultados += `
                <section class="dicaContainer">
                    <div class="dica">
                        <p>${i.bandeira}</p>
                    </div>   
                    <div class="dica">
                        <p>${i.continente}</p>
                    </div>
                    <div class="dica">
                        <p>${i.letra}</p>
                    </div> 
                    <div class="dica">
                        <p>${i.idioma}</p>
                    </div>
                    <div class="dica">
                        <p>${i.hemisferio}</p>
                    </div>  
                </section>`  
        }     
        dica.innerHTML = resultados 
    }
        
        
    }

