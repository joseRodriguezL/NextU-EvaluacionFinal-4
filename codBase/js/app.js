var Calculator = {
    screen: Object,
    calculadora: Object,
    teclado : Object,
    operador: "",
    num: "",
    num2: "",
    result: "",
    count: 0,
    hasDecimal: false,
    negativeNumber: true,
    operation: function(operator){
        //todo
        this.operador = operator;
        console.log(this.operador);
        this.resetearCount();      
    },
    sumar: function(numUno, numDos){
        if(this.result == ""){
            this.result = (parseFloat(numUno)) + (parseFloat(numDos));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));
        } else{
            this.result = (parseFloat(this.result)) + (parseFloat(this.num2));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));          
        }
    },
    restar: function(numUno, numDos){
        //todo
        if(this.result == ""){
            this.result = (parseFloat(numUno)) - (parseFloat(numDos));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));
        } else {
            this.result = (parseFloat(this.result)) - (parseFloat(this.num2));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));
        }
       
    },
    dividir: function(numUno, numDos){
        //todo
        if(this.result ==""){
            this.result = (parseFloat(numUno)) / (parseFloat(numDos));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));
        } else {
            this.result = (parseFloat(this.result)) / (parseFloat(this.num2));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));
        }
     
    },
    multiplicar: function(numUno, numDos){
        //todo
        if(this.result==""){
            this.result = (parseFloat(numUno)) * (parseFloat(numDos));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));
        } else {
            this.result = (parseFloat(this.result)) * (parseFloat(this.num2));
            this.escribirPantalla(new Intl.NumberFormat('en-IN', {maximumFractionDigits: 8, maximumFractionDigits: 3}).format(this.result));
        }
       
    },
    obtenerElemento: function(id){
        var element = document.getElementById(id);
        return element;
    },
    escribirPantalla: function(value){
        var screenContent = this.screen.children.item(0).textContent;

        if(this.hasDecimal){

            this.hasDecimal = false;

            if(this.count >= 8){
                console.log("Maximun character allowed excedeed.");
            } else if(value == "."){
                this.screen.children.item(0).textContent += value;
            }else if(this.num2 == "" && this.operador == ""){
                this.screen.children.item(0).textContent += value;
            } else if(this.num2 == "" && this.operador != ""){
                this.screen.children.item(0).textContent = value;
            } else if(this.num2 != "" && this.result == ""){
                this.screen.children.item(0).textContent += value;
            } else{
                this.screen.children.item(0).textContent = value;
            }
        }else{
            if(this.count >= 8){
                console.log("Maximun character allowed excedeed.");
            }else{
                if(screenContent == "0" || this.negativeNumber == false){
                    this.screen.children.item(0).textContent = value;
                }else if(this.num2 == "" && this.operador == ""){
                    this.screen.children.item(0).textContent += value;
                }else if(this.num2 != "" && this.result == ""){
                    this.screen.children.item(0).textContent += value;
                }else{
                    this.screen.children.item(0).textContent = value;
                }
            }
        }      
        //todo
    },
    ponerNegativo: function(){
        if(this.count >= 8 || this.negativeNumber == true){
            console.log("do not this.");
        }else{
            if(this.num2 == ""){
                this.num = -Math.abs(this.num);
                this.escribirPantalla(this.num);
                console.log(this.num);
            }else{
                this.num2 = -Math.abs(this.num2);
                this.escribirPantalla(this.num2);
                console.log(this.num2);
            }      
        }
    },
    obtenerPantalla: function(){
        var content = this.screen.textContent;
        return content;
    },
    asignarNumero: function(){
        this.count++;
        if(this.num == "" || this.operador == ""){
            this.num = this.obtenerPantalla();
            console.log(this.num);
        }else{
            this.num2 = this.obtenerPantalla();
            console.log(this.num2);
        }
    },
    doCalculator: function(){
        if(this.operador != ""){
            if(this.operador == "+"){
                this.sumar(this.num, this.num2);
            }else if(this.operador == "-"){
                this.restar(this.num, this.num2);
            }else if(this.operador == "/"){
                this.dividir(this.num, this.num2);
            }else if(this.operador == "X"){
                this.multiplicar(this.num, this.num2);
            }
        } else if(this.operador != ""){
            if(this.result != ""){
                this.sumar(this.result, this.num2);
            } else if(this.operador == "-"){
                this.restar(this.result, this.num2);
            } else if(this.operador == "X"){
                this.multiplicar(this.result, this.num2);
            } else {
                this.dividir(this.result, this.num2);
            }
        }else {
            this.escribirPantalla(this.actualScreenValue());
        }      
    },
    validate: function(){
        if(this.num == "" && this.num2 == ""){
            return false;
        }else {
            return true;
        }
    },
    decimalMode: function(value){
        this.hasDecimal = value;
    },
    limpiarVariables: function(){
        this.num = "";
        this.num2 = "";
        this.result = "";
        this.operador = "";
        this.resetearCount();
        this.negativeNumber = true;
    },
    limpiarPantalla: function(){
        this.screen.children.item(0).textContent = "0";
    },
    resetearCount: function(){
        this.count = 0;
    },
    actualScreenValue: function(){
        return this.screen.children.item(0).textContent;
    },
    setNegative:function(){
        this.negativeNumber = false;
    },
    iniciar: function(){
        //todo
        this.calculadora = this.obtenerElemento('calculadoraFondo');
        this.screen = this.calculadora.children.item(0);
        this.teclado = this.calculadora.children.item(1);

        this.teclado.children.item(0).addEventListener('click', function(){
            Calculator.limpiarPantalla();
            Calculator.limpiarVariables();
            Calculator.decimalMode(false);
            console.clear();
        });
        this.teclado.children.item(1).addEventListener('click', function(){
            //Calculator.escribirPantalla("+/-");
            Calculator.setNegative();
            Calculator.ponerNegativo();
        });
        this.teclado.children.item(2).addEventListener('click', function(){
            Calculator.escribirPantalla("NaN");
        });
        this.teclado.children.item(3).addEventListener('click', function(){
            Calculator.operation("/")
            Calculator.escribirPantalla("");
        });
        this.teclado.children.item(4).addEventListener('click', function(){
            Calculator.escribirPantalla("7");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(5).addEventListener('click', function(){
            Calculator.escribirPantalla("8");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(6).addEventListener('click', function(){
            Calculator.escribirPantalla("9");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(7).addEventListener('click', function(){
            Calculator.operation("X");
            Calculator.escribirPantalla("");
        });
        this.teclado.children.item(8).addEventListener('click', function(){
            Calculator.escribirPantalla("4");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(9).addEventListener('click', function(){
            Calculator.escribirPantalla("5");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(10).addEventListener('click', function(){
            Calculator.escribirPantalla("6");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(11).addEventListener('click', function(){
            Calculator.operation("-")
            Calculator.escribirPantalla("");
        });
        this.teclado.children.item(12).children.item(0).children.item(0).addEventListener('click', function(){
            Calculator.escribirPantalla("1");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(12).children.item(0).children.item(1).addEventListener('click', function(){
            Calculator.escribirPantalla("2");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(12).children.item(0).children.item(2).addEventListener('click', function(){
            Calculator.escribirPantalla("3");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(12).children.item(0).children.item(3).addEventListener('click', function(){
            Calculator.escribirPantalla("0");
            Calculator.asignarNumero();
        });
        this.teclado.children.item(12).children.item(0).children.item(4).addEventListener('click', function(){
            if(Calculator.hasDecimal){
                console.log("Do not this.");
            }else{
                Calculator.decimalMode(true);
                Calculator.escribirPantalla(".");
                Calculator.asignarNumero();
            }      
        });
        this.teclado.children.item(12).children.item(0).children.item(5).addEventListener('click', function(){
            //Calculator.escribirPantalla("=");
            Calculator.resetearCount();
            Calculator.doCalculator();
            Calculator.decimalMode(true);
        });
        this.teclado.children.item(12).children.item(1).children.item(0).addEventListener('click', function(){
            Calculator.operation("+");
            Calculator.escribirPantalla("");
        });
    }
}


Calculator.iniciar();