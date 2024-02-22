const formula = document.querySelector(".formula");
const resultado = document.querySelector(".resultado")
const botones = document.querySelectorAll(".boton");
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





