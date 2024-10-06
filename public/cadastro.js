const socket = io();

const formCadastro = document.getElementById("form-cadastro");

formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();
  const usuario = formCadastro["input-usuario"].value;
  const senha = formCadastro["input-senha"].value;
  if (usuario.length < 3 || senha.length < 3) {
    alert("Usuário e senha devem ter pelo menos 3 caracteres");
  } else {
    socket.emit("cadastrar_usuario", {
      usuario,
      senha,
    });
    formCadastro["input-usuario"].value = "";
    formCadastro["input-senha"].value = "";
  }
});
