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
      <h2>Version CRUE</h2>
      <p>Flow découpé, vocal fry agressif.</p>
      <a href="https://youtube.com" target="_blank">YouTube</a><br>
      <a href="https://spotify.com" target="_blank">Spotify</a><br>
      <a href="https://deezer.com" target="_blank">Deezer</a><br>
      <a href="https://music.apple.com" target="_blank">Apple Music</a>
    `;
  } else {
    result.innerHTML = `
      <h2>Version MÉLODIEUSE</h2>
      <p>Harmonies, douceur, lignes chantées.</p>
      <a href="https://youtube.com" target="_blank">YouTube</a><br>
      <a href="https://spotify.com" target="_blank">Spotify</a><br>
      <a href="https://deezer.com" target="_blank">Deezer</a><br>
      <a href="https://music.apple.com" target="_blank">Apple Music</a>
    `;
  }
}
