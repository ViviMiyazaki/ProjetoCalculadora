function insert(num)
        {
            var numero = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = numero + num;
        }
        function clean()
        {
            document.getElementById('display').innerHTML = "";
        }
        function back()
        {
            var result = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = result.substring(0, result.length -1);
        }
        function calculate()
        {
            var result = document.getElementById('display').innerHTML;
            if(result)
            {
                document.getElementById('display').innerHTML = eval(result);
            }
            else
            {
                document.getElementById('display').innerHTML = "Nada..."
            }
        }

        const mapaTeclado = {
          0: '',
          1: 'tecla1',
          2: 'tecla2',
          3: 'tecla3',
          4: 'tecla4',
          5: 'tecla5',
          6: 'tecla6',
          7: 'tecla7',
          8: 'tecla8',
          9: 'tecla9',
          '/': 'operadorDividir',
          '*': 'operadorMultiplicar',
          '-': 'subtraction',
          '+': 'sum',
          '=': 'equal',
          Enter: 'equal',
          Backspace: 'backspace',
          c: 'clear',
          ',': 'decimal',
      };
      
      const mapearTeclado = (evento) => {
          const tecla = evento.key;
          const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
          if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
      };
      document.addEventListener('keydown', mapearTeclado);