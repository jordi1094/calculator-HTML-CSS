const displayValorAnterior = document.querySelector('.formula');
const displayValorActual = document.querySelector('.resultado')
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperador = document.querySelectorAll('.operando')

const display = new Display(displayValorAnterior, displayValorActual);

 botonesNumero.forEach(boton =>{
    boton.addEventListener('click', () => display.agregarnumero(boton.innerHTML));
 });

botonesOperador.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
})





/*
const memoria = 0
botones.forEach(boton =>{
    boton.addEventListener("click",() => {
        const botonApretado = boton.textContent;
        if ( boton.className === "AC boton") {
            formula.textContent = "";
            resultado.textContent = "0";
            return;
        }

        // if (boton.className === "operando") {
        //     formula.textContent = eval(formula.textContent);
        // }

        if (boton.className === "igual boton") {
            resultado.textContent = ;
            formula.textContent = ""
        }

        if (formula.textContent === "" || formula.textContent === "=") {
            formula.textContent = botonApretado;
        }else{
        formula.textContent += botonApretado;
        

        }
    })
});

*/
