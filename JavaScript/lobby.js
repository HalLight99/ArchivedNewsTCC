document.addEventListener('DOMContentLoaded', function() {
  const link = document.getElementById('linkAnimado');
  const urlDeDestino = 'página.html'; // **Define o destino ao clicar**

  link.addEventListener('click', function(event) {
    // 1. Previne o comportamento padrão (navegar imediatamente)
    event.preventDefault();

    // 2. Adiciona a classe de animação
    link.classList.add('animacao-clique');

    // 3. Define um tempo limite (timeout) para esperar a animação acabar
    // O tempo deve ser igual ou ligeiramente maior que a duração da animação (0.5s = 500ms)
    setTimeout(function() {
      // 4. Remove a classe de animação
      link.classList.remove('animacao-clique');

      // 5. Redireciona para o URL de destino
      window.location.href = urlDeDestino;
    }, 500); // 500ms é a duração da animação no CSS
  });
});
