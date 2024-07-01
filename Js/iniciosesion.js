const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const warning = document.getElementById("warnings")


form.addEventListener('submit', mail=> {
  mail.preventDefault

  let validatemail =/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3,4})+$/
  let login = false

  if(!validatemail.test(email.value)){
    warning += "El correo no es valido .." <br>
    login == true;
  }

  if(!password.value.length <8 ){
    warning += "la contraseña no es valida .." <br>
    login== true;
  }

  if(login){
    parrafo.innerHTML = warning
  }
})