let scoreCru = 0;
let scoreDoux = 0;
let currentQuestion = 1;

function answer(type) {
  if (type === 'cru') scoreCru++;
  if (type === 'doux') scoreDoux++;

  document.querySelector(`[data-question="${currentQuestion}"]`).classList.add('hidden');
  currentQuestion++;

  if (currentQuestion <= 3) {
    document.querySelector(`[data-question="${currentQuestion}"]`).classList.remove('hidden');
  } else {
    showResult();
  }
}

function showResult() {
  const result = document.getElementById('result');
  result.classList.remove('hidden');

  if (scoreCru > scoreDoux) {
    result.innerHTML = `
      <h2>Version CHROME </h2>
      <p>Dans une grotte sombre où l'air semble suspendu, vous vous sentez observé, la bête rôde. </p>
      <a href="https://www.youtube.com/watch?v=JGgbWu4WDDw&list=OLAK5uy_k4VzMNh5QwFC7a3HhJw-vFHGuVSd9hzLU" target="_blank">YouTube</a><br>
      <a href="https://open.spotify.com/intl-fr/track/0MZY7VUQzUoC4ibyv1KiWE" target="_blank">Spotify</a><br>
      <a href="https://deezer.com" target="_blank">Deezer</a><br>
      <a href="https://music.apple.com/fr/album/la-b%C3%AAte-chrome/1880880827?i=1880880829" target="_blank">Apple Music</a>
    `;
  } else {
    result.innerHTML = `
      <h2>Version Gold </h2>
      <p>Dans une prairie en plein jour, le monstre n'est pas celui que vous croyez. Les petites voix dans votre tête vont-elles se coordonner ? .</p>
      <a href="https://www.youtube.com/watch?v=jDt-CiZFL3E&list=OLAK5uy_k4VzMNh5QwFC7a3HhJw-vFHGuVSd9hzLU&index=2" target="_blank">YouTube</a><br>
      <a href="https://open.spotify.com/intl-fr/track/52A7NP9FTFszAv194su7Zj" target="_blank">Spotify</a><br>
      <a href="https://deezer.com" target="_blank">Deezer</a><br>
      <a href="https://music.apple.com/fr/song/la-b%C3%AAte-gold/1880880832" target="_blank">Apple Music</a>
    `;
  }
}
