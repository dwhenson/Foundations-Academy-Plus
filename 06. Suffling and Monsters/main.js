// avoid global scope
(function () {
  /* ==========  Variables  ========== */
  const app = document.querySelector('#app');
  const monsters = [
    'monster1',
    'monster2',
    'monster3',
    'monster4',
    'monster5',
    'monster6',
    'monster7',
    'monster8',
    'monster9',
    'monster10',
    'monster11',
    'sock',
  ];

  /* ==========  Functions  ========== */

  /**
   * shuffles the items in an array
   * @param   {Array}  array  the array to shuffle
   * @return  {Array}         the shuffled array
   */
  const shuffle = function (array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  /**
   * renders the items from an array to HTML
   * @param   {Array}  array    the array of items to render
   * @param   {Object}  element  the html element to insert items
   * @return  {String}           the html
   */
  function renderMonsters(array, element) {
    const suffledArray = shuffle(array);
    element.innerHTML = `<div class="row">
    ${suffledArray
      .map(function (monster, index) {
        return `
      <div class="grid" aria-live="polite">
        <button data-monster-id=${index}>
        	<img src="images/door.svg" alt="click the door to reveal the monster" width="" height="">
        </button>
      </div>`;
      })
      .join('')}
      </div>`;
  }

  /**
   * handles click events
   * @param   {Event}  event  the event object
   */
  function clickHandler(event) {
    const monster = event.target.closest('[data-monster-id]');
    if (!monster) return;
    const id = monster.getAttribute('data-monster-id');
    monster.parentElement.innerHTML = `
		<img src="images/${monsters[id]}.svg" alt="monster number ${id}">`;
  }

  /* ==========  Inits and Event Listeners  ========== */
  renderMonsters(monsters, app);
  app.addEventListener('click', clickHandler);
})();
