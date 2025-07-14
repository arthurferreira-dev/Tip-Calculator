let porcentagem = document.getElementById('porcem');
let Inputporcem = document.getElementById('porcentagem');
let InputNumber = document.getElementById('money');
let InputNumberValue = InputNumber.value;
let Yin = Number(InputNumberValue);
let resultado = document.getElementById('res');
let InputValue = Inputporcem.value;
let Input = Number(InputValue);

Rename();

function Rename() {
    let InputValue = Inputporcem.value;
    let Input = Number(InputValue);
    porcentagem.innerHTML = `${Input}%`
}

function Real(money) {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(money);
}

function Enviar() {
    let dindin = Yin;
    let porcem = Input;
    let r = ((porcem / 100) * dindin) + dindin;
    let Rformatado = Real(r);
    resultado.style.display = 'block'
    resultado.innerHTML = `Seus R$ ${dindin} e o aumento de ${porcem}% é ${Rformatado}`;
}