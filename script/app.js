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
                        <h2>${i.bandeira}</h2>
                    </div>   
                    <div class="dica">
                        <h2>${i.nome}</h2>
                    </div>
                    <div class="dica">
                        <h2>${i.idioma}</h2>
                    </div> 
                    <div class="dica">
                        <h2>${i.hemisferio}</h2>
                    </div>
                    <div class="dica">
                        <h2>${i.continente}</h2>
                    </div>  
                    <div class="dica">
                        <h2>${i.letra}</h2>
                    </div>
                </section>`  
        }     
        dica.innerHTML = resultados 
    }
        
        
    }

