/* global store, cuid */

// eslint-disable-next-line no-unused-vars

const Bookmark = (function(){

  const generateItemHTML = function(item) {
    // generate an item html
    let itemId = item.id;
    let itemTitle = `<span class='bookmark-item'>${item.title}</span>`;
    let itemDescription = `<p>${item.description}</p>`;
    let itemRating = '';
    for(let i=1; i <= item.rating; i++) {
      itemRating += '<span>&#x2606</span>';
    }

    let listHTML = `<li class="js-item-element" data-item-id=${itemId}>
    ${itemTitle}
    <div>
    ${itemDescription}
    </div>
    <div class="bookmark-item-controls">
      <button class="bookmark-item-visit js-item-vist">
        <span class="button-label">Visit Site</span>
      </button>
      <button class="bookmark-item-delete js-item-delete">
        <span class="button-label">Delete</span>
      </button>
    </div>
    <div class="stars">${itemRating}</div>
  </li>`

  return listHTML;

  };

  const render = function() {
    // Shows the results of the users action on the webpage
    let itemList = Store.items.map(item => generateItemHTML(item));   
    console.log('render ran');
    $('.js-bookmark-list').html(itemList); 
    
  };

  const handleAddItem = function(item) {
    // this adds an item inside of the store object
  $('#js-bookmark-list-form').on('submit', function(e) {
    e.preventDefault();
    console.log('addItem ran')
  })
  };

  const getItemIdFromElement = function(item) {
    // gets the Id from the html element and returns a string
  };

  const handleDeleteItem = function() {
    // deletes clicked item
  };
 
  const handleEditItem = function() {
    //edits selected item
  };


  function bindEventListeners() {
    handleAddItem(),
    handleDeleteItem(),
    handleEditItem();
  }

  return {
    bindEventListeners,
    render,
  };

}()
);