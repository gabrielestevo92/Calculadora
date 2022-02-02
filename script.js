num_1 = '';
num_2 = '';
numero = '';
sinal = '';

function tela(valor){    
    if (valor == "+" || valor == '-' || valor == 'X' || valor == '/'){
        sinal = valor;
        num_1 = numero;
        numero = '';
    }
    // 100/50 * 10
    else if (valor == "=" || valor == "%"){
        if (valor == "%"){
            num_2 = (num_1/100)*numero;
            numero = '';
            document.getElementById("na-tela").innerHTML = num_2;
        }
        else{
            if (numero!=''){
                num_2 = numero;
            }
            numero = '';
            switch (sinal) {
                case '+':
                    somar(num_1,num_2);                
                    num_1 = '';
                    num_2 = '';
                    sinal = '';
                    break;
                case '-':
                    subtrair(num_1,num_2);                
                    num_1 = '';
                    num_2 = '';
                    sinal = '';
                    break;
                case 'X':
                    multiplicar(num_1,num_2);                
                    num_1 = '';
                    num_2 = '';
                    sinal = '';
                    break;
                case '/':
                    dividir(num_1,num_2);                
                    num_1 = '';
                    num_2 = '';
                    sinal = '';
                    break;
                case '%':
                    por_cento(num_1,num_2);                
                    num_1 = '';
                    num_2 = '';
                    sinal = '';
                    break;
            }    
        }
        
            
    }
    else{
        if (valor == 'negativo'){
            numero = (numero) * -1;
            document.getElementById("na-tela").innerHTML = numero;
        }
        else{
            numero = numero + valor;
            document.getElementById("na-tela").innerHTML = numero;
        }
    }
}

function somar(num_1,num_2){
    document.getElementById("na-tela").innerHTML = parseFloat(num_1) + parseFloat(num_2);
}
function subtrair(num_1,num_2){
    document.getElementById("na-tela").innerHTML = parseFloat(num_1) - parseFloat(num_2);
}
function multiplicar(num_1,num_2){
    document.getElementById("na-tela").innerHTML = parseFloat(num_1) * parseFloat(num_2);
}
function dividir(num_1,num_2){
    document.getElementById("na-tela").innerHTML = parseFloat(num_1) / parseFloat(num_2);
}
function por_cento(num_1,num_2){
    document.getElementById("na-tela").innerHTML = parseFloat(num_1) / parseFloat(num_2);
}

function limpar_tela() {
    document.getElementById("na-tela").innerHTML = 0;
    num_1 = '';
    num_2 = '';
    numero = '';
    sinal = '';
}