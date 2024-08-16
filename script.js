const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');
    
    if (nome !== '' && !isNaN(altura) && !isNaN(peso) && altura > 0) {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';
        let mensagem = '';

        const imcIdealMin = 19.5;
        const imcIdealMax = 25;
        let pesoIdealMin = imcIdealMin * altura * altura;
        let pesoIdealMax = imcIdealMax * altura * altura;
        let pesoFaltando = 0;

        if (valorIMC < imcIdealMin) {
            classificacao = 'abaixo do peso.';
            pesoFaltando = pesoIdealMin - peso;
            mensagem = `Você precisa ganhar aproximadamente ${pesoFaltando.toFixed(1)} kg para atingir o peso ideal.`;
        } else if (valorIMC < imcIdealMax) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
            pesoFaltando = peso - pesoIdealMax;
            mensagem = `Você precisa perder aproximadamente ${pesoFaltando.toFixed(1)} kg para atingir o peso ideal.`;
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1.';
            pesoFaltando = peso - pesoIdealMax;
            mensagem = `Você precisa perder aproximadamente ${pesoFaltando.toFixed(1)} kg para atingir o peso ideal.`;
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2';
            pesoFaltando = peso - pesoIdealMax;
            mensagem = `Você precisa perder aproximadamente ${pesoFaltando.toFixed(1)} kg para atingir o peso ideal.`;
        } else {
            classificacao = 'com obesidade grau 3. Cuidado!!';
            pesoFaltando = peso - pesoIdealMax;
            mensagem = `Você precisa perder aproximadamente ${pesoFaltando.toFixed(1)} kg para atingir o peso ideal.`;
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao} ${mensagem || ''}`;
    } else {
        resultado.textContent = 'Preencha todos os campos corretamente';
    }
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado').textContent = '';
}

calcular.addEventListener('click', imc);
limpar.addEventListener('click', limparFormulario);
