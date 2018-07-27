/* global store, cuid */

// eslint-disable-next-line no-unused-vars

const Bookmark = (function(){

  const generateItemHTML = function(item) {
    // generate an item html
    let itemId = item.id;
    let itemTitle = `<span class='bookmark-item'>${item.title}</span>`;
    let itemURL = `<a href="${item.url}">${item.url}`;
    let itemDescription = `<p>${item.description}</p>`;
    let itemRating = '';
    for(let i=1; i <= item.rating; i++) {
      itemRating += '<span>&#x2606</span>';
    }

    let listHTML = `<li class="js-item-element" data-item-id=${itemId}>
    ${itemTitle}
    
    <div>
    ${itemDescription}
    ${itemURL}
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
  </li>`;
    // button visit site should be a function and event listener
    return listHTML;

  };

  const render = function() {
    // Shows the results of the users action on the webpage
    let itemList = Store.bookmarks.map(item => generateItemHTML(item));   
    console.log('render ran');
    $('.js-bookmark-list').html(itemList); 
    
  };

  const handleAddBookmark = function(item) {
    // this adds an item inside of the store object
    $('#js-bookmark-list-form').submit(function(e) {
      e.preventDefault();
      let title = $('.title').val();
      let url = $('.url').val();
      let desc = $('.description').val();
      let rating = $('.star').val(); // work in progress

      $('.js-bookmark-list-entry').val('');
  
      API.createItem(title, url, desc, rating, newItem => {
        console.log(newItem);
        Store.addBookmark(newItem);
        render();
        console.log('addItem ran');
      });
    });
  };

  const handleDeleteItem = function() {
    // deletes clicked item
  };
 
  const handleEditItem = function() {
    //edits selected item
  };


  function bindEventListeners() {
    handleAddBookmark(),
    handleDeleteItem(),
    handleEditItem();
  }

  return {
    bindEventListeners,
    render,
  };

}()
);