
    const display = document.getElementById("display");


    function exibir(input){
        display.value += input
    }


    function limpar(){
        display.value = "";
    }


    function calcular(){
        try{
            display.value = eval(display.value)
        }
        catch{
            display.value = "Error";
        }
        
    }