function operation() {

    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);
    const op = document.getElementById('operator').value;
    var result;

    switch (op) {
        case '1':
            result = num1 + num2;
            break;

        case '2':
            result = num1 - num2;
            break;

        case '3':
            result = num1 * num2;
            break;

        case '4':
            if (num2 == 0) {
                result = 'No se puede dividir por 0';
                break;
            }
            else {
                result = num1 / num2;
                break;
            }
    }

    if (isNaN(result)) {
        result = 'Ingrese numeros en los dos campos'
        document.getElementById('resultado').value = result;;
      }
    else document.getElementById('resultado').value = result;
    
    
}

