const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
let rolls = 0, total = 0, best = 0;
function rollDice() {
  const diceEl = document.getElementById('dice');
  // Animate
  diceEl.classList.remove('rolling');
  void diceEl.offsetWidth; // reflow trick to restart animation
  diceEl.classList.add('rolling');
  // Pick random number 1-6
  const num = Math.floor(Math.random() * 6) + 1;
  setTimeout(() => {
    diceEl.textContent = faces[num - 1];
    rolls++;
    total += num;
    if (num > best) best = num;
    document.getElementById('result').textContent =
      num === 6 ? '🎉 Six! Lucky roll!' :
      num === 1 ? '😬 Snake eyes...' :
      `You rolled a ${num}!`;
    document.getElementById('score-board').textContent =
      `Rolls: ${rolls}  |  Total: ${total}  |  Best: ${best}`;
  }, 400);
}
function resetGame() {
  rolls = 0; total = 0; best = 0;
  document.getElementById('dice').textContent = '⬜';
  document.getElementById('result').textContent = 'Press Roll to start!';
  document.getElementById('score-board').textContent = 'Rolls: 0 | Total: 0 | Best: -';
}