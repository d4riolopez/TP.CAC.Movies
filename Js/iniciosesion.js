const emailInput = document.getElementsByName("correoElectronico")[0]; // Seleccionamos el primer elemento con name="correoElectronico"
const passwordInput = document.getElementsByName("contraseña")[0];
const form = document.getElementById("inicioForm");
const warning = document.getElementById("warnings");

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitamos que el formulario se envíe automáticamente
  
  let validateMail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3,4})+$/;
  let login = true; // Cambiamos a true por defecto, para asegurarnos de mostrar los errores si no se cambia

   // Validación de campos vacíos (si prefieres manejarlo antes de la validación individual)
   if (emailInput.value === "" && passwordInput.value === "") {
    alert("Debe completar los campos!");
    return; // Salimos de la función si faltan campos
  }
  // Validación del correo electrónico
  if (!validateMail.test(emailInput.value)) {
    warning.innerHTML = "El correo no es válido.<br>";
    login = false; // Cambiamos a false si hay error
  }

  // Validación de la contraseña
  if (passwordInput.value.length < 8) {
    warning.innerHTML += "La contraseña debe tener al menos 8 caracteres.<br>";
    login = false; // Cambiamos a false si hay error
  }

 

  // Mostrar mensajes de advertencia si hay errores
  if (!login) {
    warning.style.display = "warnings"; // Mostramos el div de advertencias
    warning.scrollIntoView(); // Hacemos scroll hacia el elemento de advertencias
    return; // Salimos de la función si hay errores
  }

  // Si no hay errores, podrías enviar el formulario aquí si es necesario
  form.submit(); // Enviamos el formulario
});
