/*
Exercici funcions fent el joc de Piedra, papel i tijera entre usuari i PC.
*/
window.onload = function () {
    
    console.log("load");
    var texteResultats = "";
    var eleccioUsuari;
    
    // recordeu que addEventListener serveix com un onclick en l'html.
    eleccioUsuari = document.getElementById("piedra").addEventListener("click", function(){joc(1)});
    eleccioUsuari = document.getElementById("papel").addEventListener("click", function(){joc(2)});
    eleccioUsuari = document.getElementById("tijera").addEventListener("click", function(){joc(3)});
    
   
    // La funcio joc ens serveix per tal de fer la tirada del PC i per cridar les funcions de convertir a texte l'elecció i la de calculara els resultats.
    function joc(id){
        console.log("joc");
        var eleccioPC = Math.floor(Math.random()*3+1);
        eleccioPC = tirada(eleccioPC);
        eleccioUsuari = tirada(id); 
        texteResultats = "eleccioPC: "+eleccioPC +", eleccioUsuari: "+eleccioUsuari;
        console.log(texteResultats);
        resultats(eleccioPC, eleccioUsuari);
        } 
    
    // La funcio tirada ens serveix per traduir dels numeros als textes.
    // per saber que fa el switch in case podeu consultar //https://developer.mozilla.org/ca/docs/Web/JavaScript/Reference/Statements/switch
   
    function tirada(eleccio) {
         console.log("tirada: " + eleccio);
        var eleccioTexte = "";
        
        // Piedra = 1
        // Papel = 2
        // Tijera = 3

        switch (eleccio) {
            case 1:
                eleccioTexte = "Piedra";
                break;
            case 2:
                eleccioTexte = "Papel";
                break;
            case 3:
                eleccioTexte = "Tijera";
                break;             
            }
        return eleccioTexte
        }
    
    // En aquesta funcio (que es el que us posava al pseudocodi) calculem els resultats.
    function resultats(pc, usuari){
      
        if (usuari == pc) { alert(texteResultats + ", empat");}
        if (usuari == "Piedra" && pc=="Tijera"){alert(texteResultats + ", Guanya Usuari");}
        if (usuari == "Piedra" && pc=="Papel"){alert(texteResultats + ", Guanya PC");}
        if (usuari == "Tijera" && pc=="Papel"){alert(texteResultats + ", Guanya Usuari");}
        if (usuari == "Tijera" && pc=="Piedra"){alert(texteResultats + ", Guanya PC");}
        if (usuari == "Papel" && pc=="Piedra"){alert(texteResultats + ", Guanya Usuari");}
        if (usuari == "Papel" && pc=="Tijera"){alert(texteResultats + ", Guanya PC");}
        
    }
        
}