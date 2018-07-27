/* global store, cuid */

// eslint-disable-next-line no-unused-vars

const Bookmark = (function(){

  const generateItemHTML = function(item) {
    // generate an item html
    let itemId = item.id;
    let itemTitle = `<span class='bookmark-item'>${item.title}</span>`;
    let itemURL = `<a href="${item.url}">Visit Site</a>`;
    let itemDescription = `<p>${item.desc}</p>`;
    let itemRating = '';
    for(let i=1; i <= item.rating; i++) {
      itemRating += '<span>&#x2606</span>';
    }

    let listHTML = `
    <li class="js-bookmark-element" data-item-id=${itemId}>
    <div class="box">
    ${itemTitle}
    
    <div>
    ${itemDescription}
    </div>
    <div class="bookmark-item-controls">
      <button class="bookmark-item-visit js-item-vist">
        <span class="button-label">${itemURL}</span>
      </button>
      <button class="bookmark-delete js-bookmark-delete">
        <span class="button-label">Delete</span>
      </button>
    </div>
    <div class="stars">${itemRating}</div>
    </div>
  </li>
  `;
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
    // this adds an item inside of the store.bookmarks object
    $('#js-bookmark-list-form').submit(function(e) {
      e.preventDefault();
      let title = $('.title').val(),
        url = $('.url').val(),
        desc = $('textarea.description').val(),
        rating = $('.star').val(); 
      $('.js-bookmark-list-entry').val('');
      
      API.createItem(title, url, desc, rating, newItem => {
        console.log(newItem);
        Store.addBookmark(newItem);
        render();
        console.log('addItem ran');
      });
    });
  };

  function getBookmarkIdFromElement(bookmark) {
    return $(bookmark).closest('.js-bookmark-element').data('item-id');
  }

  const handleDeleteBookmark = function() {
    // deletes clicked item
    $('.js-bookmark-list').on('click', '.js-bookmark-delete', function(e) {
      const id = getBookmarkIdFromElement(e.currentTarget);

      API.deleteItem(id, function(){
        Store.findAndDelete(id);
        render();
      });
    });
  };


  function bindEventListeners() {
    handleAddBookmark(),
    handleDeleteBookmark();
  }

  return {
    bindEventListeners,
    render,
  };

}()
);