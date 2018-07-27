/* global */ 

// eslint-disable-next-line no-unused-vars

const Store = (function(){

  const bookmarks = [
    {
      id: 1235432,
      title: 'Gwent',
      url: 'url-here.com', 
      description: 'Wticher 3 card game', 
      rating: 5,
      expand: false,
    },
    {
      id: 1235432,
      title: 'HearthStone',
      url: 'url-here.com', 
      description: 'Blizzard card game', 
      rating: 4,
      expand: false,
    },
    {
      id: 1235432,
      title: 'Blackjack',
      url: 'url-here.com', 
      description: 'Casino card game', 
      rating: 4,
      expand: false,
    },
  ];


  const addBookmark = function(item) {
    this.bookmarks.push(item);
  };

  const findById = function(id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };

  const findAndDelete = function(id) {
    this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
  };

  const findAndUpdate = function(id, newData) {
    let bookmarkId = this.findById(id);
    Object.assign(bookmarkId, newData);
  };

  const findAndExpand = function(id) {
    // this function works to expand and view details of the list bookmark
    // work at one user story at a time
  };

  const filterRatings = function(data) {
    // this function filters which rating the user chooses
  };

  return {
    bookmarks,
    expand: false,
    error: null,
    filter: 5,
    addBookmark,
    findById,
    findAndDelete,
    findAndUpdate,
    findAndExpand,
    filterRatings
  };

}()
);