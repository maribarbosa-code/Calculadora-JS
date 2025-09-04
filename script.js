
function somar(a,b){
        return a+b;
}

function subtrair(a,b){
    return a-b;
}

function multiplicar (a,b){
    return a * b;
}

function dividir(a,b){
    if(b==a)
        alert("Divisão por zero")
        return a/b;
}

function exponencial (a,b){
    return Math.pow(a,b);
}

const executar = () =>{

    const a = eval(document.getElementById("v1").value);
    const b = eval(document.getElementById("v2").value);
    let oper = eval(document.getElementById("oper").selectedIndex);

    let resultado = 
        (oper==0)?somar(a,b):
        (oper==1)?subtrair(a,b):
        (oper==2)?multiplicar(a,b):
        (oper==3)?dividir(a,b):
        exponencial(a,b);

        if(typeof resultado === "number"){
            resultado = resultado.toFixed(2);
        }

    document.getElementById("resp").innerHTML =`O resultado da operação é <span class="resultado-num">${resultado}</span>`;
}