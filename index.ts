// Buscamos los elementos en el HTML
const boton = document.getElementById("btnSaludar") as HTMLButtonElement;
const parrafo = document.getElementById("txtMensaje") as HTMLParagraphElement;

// Escuchamos el evento 'click' (Como un ActionListener en Java)
boton.addEventListener("click",async () => {
   try{
      parrafo.textContent = "Consultando al servidor NestJS...";

      // 1. Hacemos la petición de red (fetch) al endpoint de tu backend
      const respuesta = await fetch ("http://localhost:3000/usuarios");

      // 2. Traducimos la respuesta JSON del servidor a una lista manipulable
      const usuarios = await respuesta.json();

      // 3. Tomamos el primer usuario de la lista (posición 0, como en Java)
      const primerUsuario = usuarios[0];
      
      // 4. Dibujamos el resultado en la pantalla web
      parrafo.innerHTML = `<br><strong>!Conexión exitosa con NestJs!</strong><br>
      Usuario obtenido: ${primerUsuario.nombre}<br>
      Rol: ${primerUsuario.rol}`;
   }catch (error){
      parrafo.textContent = "Error: No se pudo conectar con el servidor Backend.";
      console.error("Hubo un fallo en la conexión",error);
   }
});

