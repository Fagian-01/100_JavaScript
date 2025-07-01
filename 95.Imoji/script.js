function munculkanLove() {
  const love = document.createElement('div');
  love.classList.add('love');
  love.innerText = '💖';
  
  const left = Math.random() * 100;
  love.style.left = `${left}vw`;

  document.body.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 2000);
}