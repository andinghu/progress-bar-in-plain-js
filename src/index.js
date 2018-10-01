(function() {
  const containers = document.getElementsByName('bar-container');
  const bar = document.getElementById('vicBar');
  const addButton = document.getElementById('addButton');
  const barList = document.getElementById('barlist');

  function addBar() {
    let innerBar = document.createElement('div');
    innerBar.setAttribute('id', 'vicBar');

    let newBar = document.createElement('div');
    newBar.setAttribute('class', 'bar-container');
    newBar.setAttribute('id', `bar${containers.length}`);

    barList.appendChild(newBar);
    console.log('***', containers);
  }

  function move() {
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (width === 100) {
        containers.classList.remove('disabled');
        clearInterval(id);
      } else {
        width++;
        bar.style.width = width + '%';
        bar.textContent = width + '%';
      }
    }
  }

  function handleClickBar(e) {
    e.target.classList.toggle('disabled');
    move();
  }

  containers.forEach(container =>
    container.addEventListener('click', handleClickBar)
  );

  addButton.addEventListener('click', addBar);
})();
