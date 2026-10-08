<!doctype html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Lab 4 - JavaScript</title>

    <link rel="stylesheet" href="css/style.css" />
  </head>

  <body>
    <header>
      <h1>⚔️ Aventura do Grupo</h1>
    </header>

    <main>
      <h2>🧙 O Mago</h2>

      <!-- EVENTO 1 -->
      <section class="evento-mago">
        <h3>🧙 O Mago</h3>

        <div class="mago-conteudo">
          <p id="mensagem-mago">🧙‍♂️ O mago está à espera do seu turno...</p>

          <img
            id="imagem-batalha"
            src="images/batalha.jpg"
            alt="Batalha de D&amp;D com miniaturas"
          />
        </div>
      </section>

      <!-- EVENTO 2 -->
      <section class="evento-ataques">
        <h3>⚔️ Escolhe o tipo de ataque</h3>

        <p id="texto-ataque">🧙‍♂️ O mago prepara o seu próximo ataque...</p>

        <div class="botoes-ataque">
          <button type="button" id="botao-fogo">🔥 Fogo</button>

          <button type="button" id="botao-gelo">❄️ Gelo</button>

          <button type="button" id="botao-relampago">⚡ Relâmpago</button>

          <button type="button" id="botao-forca">💪 Força</button>

          <button type="button" id="botao-radiante">✨ Radiante</button>

          <button type="button" id="botao-eletricidade">
            ⚡ Eletricidade
          </button>

          <button type="button" id="botao-audio-fireball">
            🔊 Ouvir som da Fireball
          </button>
        </div>

        <div class="fireball-container">
          <img
            id="gif-fireball"
            src="images/fireball-cast.gif"
            alt="Fireball a ser lançada"
          />
        </div>

        <div class="fireball-container">
          <img
            id="gif-gelo"
            src="images/cone-of-cold-dungeons-and-dragons.gif"
            alt="Cone of Cold a ser lançado"
          />
        </div>

        <div class="fireball-container">
          <img
            id="gif-relampago"
            src="images/lightning-bolt.gif"
            alt="Lightning Bolt a ser lançado"
          />
        </div>

        <div class="fireball-container">
          <img
            id="gif-forca"
            src="images/Force.webp"
            alt="Bigby's Hand a ser lançada"
          />
        </div>

        <div class="fireball-container">
          <img
            id="gif-radiante"
            src="images/guiding_bolt.gif"
            alt="Guiding Bolt a ser lançado"
          />
        </div>

        <div class="fireball-container">
          <img
            id="gif-eletricidade"
            src="images/chain-ligthing.gif"
            alt="Chain Lightning a ser lançado"
          />
        </div>

        <audio id="audio-fireball">
          <source src="audio/fireball.mp3" type="audio/mpeg" />
        </audio>
      </section>

      <!-- EVENTO 3 -->
      <section class="evento-pocao">
        <h3>🧪 Poção mágica</h3>

        <p>Escreve uma cor e observa a poção mudar:</p>

        <input
          type="text"
          id="cor-pocao"
          placeholder="Escreve uma cor..."
        />
      </section>

      <!-- EVENTO 4 -->
      <section class="evento-cor">
        <h3>🎨 Cor da magia</h3>

        <p>Escreve uma cor em inglês:</p>

        <input
          type="text"
          id="cor-magica"
          placeholder="Ex: red, blue, purple..."
        />

        <button type="button" id="botao-magia">✨ Lançar magia</button>

        <p id="explosao">💥</p>
      </section>

      <!-- EVENTO 5 -->
      <section class="evento-contador">
        <h3>💀 Inimigos esmagados</h3>

        <div class="contador-conteudo">
          <div>
            <p id="contador-inimigos">33</p>

            <div class="botoes-batalha">
              <button type="button" id="botao-esmagar">
                ⚔️ Esmagar inimigo
              </button>

              <button type="button" id="botao-comecar-batalha">
                🔥 COMEÇAR BATALHA
              </button>

              <button type="button" id="botao-vitoria">🏆 VITÓRIA</button>
            </div>
          </div>

          <img
            src="images/batalha.jpg"
            alt="Batalha de D&amp;D com miniaturas"
          />
        </div>

        <audio id="audio-batalha" loop>
          <source src="audio/battle.mp3" type="audio/mpeg" />
        </audio>

        <audio id="audio-vitoria">
          <source src="audio/vitoria.mp3" type="audio/mpeg" />
        </audio>
      </section>
    </main>

    <script src="scripts/main.js"></script>
  </body>
</html>
