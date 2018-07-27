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

    let expandedlistHTML = `
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
      <button class="bookmark-expand js-bookmark-expand">
        <span class="button-label">Expand</span>
      </button>
    </div>
    <div class="stars">${itemRating}</div>
    </div>
  </li>
  `;

    let listHTML = `
    <li class="js-bookmark-element" data-item-id=${itemId}>
    <div class="box">
    ${itemTitle}
    <div class="bookmark-item-controls">
      <button class="bookmark-expand js-bookmark-expand">
        <span class="button-label">Expand</span>
      </button>
    </div>
    <div class="stars">${itemRating}</div>
    </div>
  </li>
    `
    // button visit site should be a function and event listener
    
    if(item.expanded) {
      return expandedlistHTML;
    } else {
      return listHTML;
    }

  };



  const render = function() {
    // Shows the results of the users action on the webpage
    let filteredBookmarks = Store.bookmarks.filter(bookmark => bookmark.rating >= Store.filter)
    let itemList = filteredBookmarks.map(item => generateItemHTML(item));   
    console.log('render ran');

    $('.js-bookmark-list').html(itemList); 
    
  };
// 
  const handleAddBookmark = function(item) {
    // this adds an item inside of the store.bookmarks object
    $('#js-bookmark-list-form').submit(function(e) {
      e.preventDefault();
      let title = $('.title').val(),
        url = $('.url').val(),
        desc = $('textarea.description').val(),
        rating = $('.add-rating').val();

        console.log(rating)
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

  const filterRatings = function(data) {
    // this function filters which rating the user chooses
    $('.filter-rating').on('change', function(e) {
      let rating = $(this).val();
      Store.filter = parseInt(rating);
      render();
    })
  };

  const expand = function() {
    $('.js-bookmark-list').on('click', '.js-bookmark-expand', function(e) {
      let id = $(this).closest('.js-bookmark-element').data('item-id');
      Store.findAndExpand(id);
      render();
    })
  }

  function bindEventListeners() {
    handleAddBookmark(),
    handleDeleteBookmark();
    filterRatings();
    expand();
  }

  // capture the value ,update the store in that value, then rerender

  return {
    bindEventListeners,
    render,
  };

}()
);