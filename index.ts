import { Persona } from "./Persona.ts";

// Buscamos los elementos en el HTML
const boton = document.getElementById("btnSaludar") as HTMLButtonElement;
const parrafo = document.getElementById("txtMensaje") as HTMLParagraphElement;

// Escuchamos el evento 'click' (Como un ActionListener en Java)
boton.addEventListener("click", () => {
   const programador = new Persona("Edgar Alberto", 51);
   parrafo.textContent = programador.presentar();
});

