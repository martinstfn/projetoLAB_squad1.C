let name = prompt ("Qual é o seu nome?")
let resC1 = document.getElementById('correta_resp1')
let resC2 = document.getElementById('correta_resp2')
let resC3 = document.getElementById('correta_resp3')
let resE1 = document.getElementById('errada_resp1')
let resE2 = document.getElementById('errada_resp2')
let resE3 = document.getElementById('errada_resp3')
let apresent = document.getElementById('apresentacao')


apresent.innerHTML = ' OLÁ, ' + name.toUpperCase() + '!'

let inicio = prompt ("Quer iniciar o teste? \n 1. Sim  \n 2.Não")
    if (inicio == "sim" || inicio == 1) {
        let perg1 = prompt('Quanto é 7 X 7 ? \n a) 24 \n b) 45 \n c) 49');
            if (perg1 == 49 || perg1 == "c"){
                resC1.innerHTML = ' resposta 1 '
            } else {
                resE1.innerHTML = ' resposta 1 ' 
            }

        let perg2 = prompt('Quanto é 4 X 5? \n a) 15 \n b) 20 \n c) 40');
            if (perg2 == 20 || perg2 == "b"){
                resC2.innerHTML = ' resposta 2  '
            } else {
                resE2.innerHTML = ' resposta 2 '
            }
        
        let perg3 = prompt('Quanto é 9 X 9 ? \n a) 81 \n b) 56 \n c) 46');
             if (perg3 == 81 || perg3 == "a"){
                 resC3.innerHTML = ' resposta 3 '
             } else {
                 resE3.innerHTML = ' resposta 3 '
             }
               
    } else {
        apresent.innerHTML = ' OBRIGADO ' + name.toUpperCase() + ', ATÉ A PRÓXIMA !'  
    } 

    
       


        

 