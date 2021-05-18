function outSaque(){

    var valorSaque = document.getElementById("valorSaque").value;
    var outNota100 = document.getElementById("outNota100");
    var outNota50 = document.getElementById("outNota50");
    var outNota10 = document.getElementById("outNota10");
    
    var x = 0;
    var y = 0;
    var z = 0;
    
    
    if(valorSaque < 10){
        alert("O valor solicitado não pode ser sacado.")
    }
    
    while(valorSaque >= 100 || valorSaque - 100 == 100){
        x = x+1;
        valorSaque -= 100;
    }
        
    while(valorSaque >= 50 || valorSaque - 50 ==50){
        y = y+1;
        valorSaque -= 50;
    }
        
    while(valorSaque >= 10 || valorSaque - 10 == 10){
        z = z+1;
        valorSaque -= 10;
    }
    
    
    
    outNota100.textContent = `${x} Notas(s) de 100`;
    outNota50.textContent = `${y} Nota(s) de 50`;
    outNota10.textContent = `${z} Nota(s) de 10`;
    
    }
    document.getElementById("btnsaque").addEventListener('click', outSaque);
