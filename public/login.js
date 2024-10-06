const formLogin = document.getElementById("form-login");

const socket = io();

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const usuario = formLogin["input-usuario"].value;
  const senha = formLogin["input-senha"].value;
  if (usuario.length < 3 || senha.length < 3) {
    alert("Usuário e senha devem ter pelo menos 3 caracteres");
  } else {
    socket.emit("login", {
      usuario,
      senha,
    });
    formLogin["input-usuario"].value = "";
    formLogin["input-senha"].value = "";
  }
});

socket.on("login_sucesso", () => {
  alert("Login realizado com sucesso!");
});

socket.on("login_erro", () => {
  alert("Usuário ou senha inválidos");
});
