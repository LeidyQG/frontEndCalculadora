let boton = document.getElementById("submit");
boton.addEventListener("click", async (event) => {
  event.preventDefault(); //Previene que el eventlistener "realice" la acción es decir, la pausa, en eneral se usa si se usa un botón submit
  const numero_1 = parseFloat(document.getElementById("numero_1").value);
  const numero_2 = parseFloat(document.getElementById("numero_2").value);
  const respuesta = await fetch("http://localhost:3000/api/sumar", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
    },
    "body": JSON.stringify({ numero_1, numero_2 }), //JSON.stringify vuelve los objetos a objetos json
  });

  const dato = await respuesta.json();
  const div_resultado = document.getElementById("resultado");
  div_resultado.innerHTML = dato;
});
