function calculadora() {
    const operação = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisao real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    if (!operação || operação >= 7) {
        alert('Opção invalida!');
        calculadora();
    } else {
        let numberA = Number(prompt("Insira um valor: "));
        let numberB = Number(prompt("Insira outro valor: "));
        let resultado;
        function soma() {
            resultado = numberA + numberB;
            alert(`${numberA} + ${numberB} = ${resultado}`);
            novaOperacao();
        }
        function subtracao() {
            resultado = numberA - numberB;
            alert(`${numberA} - ${numberB} = ${resultado}`);
            novaOperacao();
        }
        function multiplicacao() {
            resultado = numberA * numberB;
            alert(`${numberA} x ${numberB} = ${resultado}`);
            novaOperacao();
        }
        function devisaoReal() {
            resultado = numberA / numberB;
            alert(`${numberA} / ${numberB} = ${resultado}`);
            novaOperacao();
        }
        function divisaoInteira() {
            resultado = numberA % numberB;
            alert(`O resto da divisao entre ${numberA} e ${numberB} = ${resultado}`);
            novaOperacao();
        }
        function potenciacao() {
            resultado = numberA ** numberB;
            alert(`${numberA} ** ${numberB} = ${resultado}`);
            novaOperacao();
        }
        function novaOperacao() {
            let opcao = Number(prompt("Deseja realizar uma nova operação ?\n 1-Sim\n 2-Não"));

            if (opcao == 1) {
                calculadora();
            } else if (opcao == 2) {
                alert("Finalizando sessão!");
            } else {
                alert("Opção Invalida");
                novaOperacao
            }
        }
        if (operação == 1) {
            soma()
        } else if (operação == 2) {
            subtracao()
        } else if (operação == 3) {
            multiplicacao()
        } else if (operação == 4) {
            devisaoReal()
        } else if (operação == 5) {
            divisaoInteira()
        } else if (operação == 6) {
            potenciacao()
        }
    }
}