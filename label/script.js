//label
loopi :
    for(let i = 0; i < 10; i++){
        loop_j:
            for(let j = 0; j < 100; j++){
                if(j > 10){
                    continue loopi;
                }
                document.writeln(`<p>${i} - ${j}</p>`)
            }
    }
