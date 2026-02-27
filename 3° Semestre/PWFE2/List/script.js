//Exércicio 1

function calcularBonus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;

    if(salario > 2000){
        bonus = salario * (10 / 100);
    }

    let salarioFinal = salario + bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br> Salário Final R$ ${salarioFinal.toFixed(2)}`;
}
document.getElementById(`salario`)

//Exércicio 2

function calcularFrete(){
    let valorCompra = Number(document.getElementById('frete').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if(valorCompra >= 150){
        frete = 0;
    } else {
        frete = 20;
    }

    let valorTotal = valorCompra + frete;

    resultado.innerHTML =
        `Valor do Frete: R$ ${frete.toFixed(2)} <br> Valor Total: R$ ${valorTotal.toFixed(2)}`;
}
document.getElementById(`frete`)

//Exécicio 3

function Gasolina(){
    let preco = Number(document.getElementById('gasolina').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if(preco > 200){
        desconto = preco * (5 / 100);
    }

    let precoFinal = (preco - desconto);

    resultado.innerHTML = 
        `Desconto de R$ ${desconto.toFixed(2)} <br> Preco Final R$ ${precoFinal.toFixed(2)}`;
}

//Exércicio 4

function calcularTaxa(){
    let totalCompra = Number(document.getElementById('taxa').value);
    let resultado = document.getElementById('resultado');
    let taxa = 0;

    if(totalCompra > 100){
        taxa = totalCompra * (10 / 100);
    }

    let ValorFinal = totalCompra + taxa;

    resultado.innerHTML = 
        `Taxa de R$ ${taxa.toFixed(2)} <br> Conta Final R$ ${ValorFinal.toFixed(2)}`;
}

//Exércicio 5

function calcularMulta(){
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let dias = Number(document.getElementById('dias').value);
    let resultado = document.getElementById('resultado');
    let multa = 0;

    if(dias > 0){
        multa = mensalidade * (2 / 100);
    }

    let total = mensalidade + multa;

    resultado.innerHTML =
        `Valor da Multa: R$ ${multa.toFixed(2)} <br> Valor Total a Pagar: R$ ${total.toFixed(2)}`;
}

//Exércicio 6

function calcularCashback(){
    let valorCompra = Number(document.getElementById('valorCompra').value);
    let resultado = document.getElementById('resultado');
    let cashback = 0;

    if(valorCompra > 300){
        cashback = valorCompra * (5 / 100);
    }

    let valorLiquido = valorCompra - cashback;

    resultado.innerHTML =
        `Valor do Cashback: R$ ${cashback.toFixed(2)} <br> Valor Líquido da Compra: R$ ${valorLiquido.toFixed(2)}`;
}
