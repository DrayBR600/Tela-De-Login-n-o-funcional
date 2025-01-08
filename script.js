function entrar() {
  let username = document.getElementById("username").value;
  let senha = document.getElementById("senha").value;

  if (username === "" || senha === "") {
    alert("Por Favor, Preencha Todos Os Campos");
  } else {
    alert("Bem Vindo " + username + "!");
  }
}
