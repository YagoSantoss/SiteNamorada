// Defina o usuário e senha permitidos aqui
const usuarioCorreto = "amaislinda";
const senhaCorreta = "pequenadoyago123";

function verificarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagem");

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    // Redireciona para a segunda página
    window.location.href = "segtela.html";
  } else {
    mensagem.textContent = "Usuário ou senha incorretos minha gatinha.";
  }
}