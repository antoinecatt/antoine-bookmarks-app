/* global */ 

// eslint-disable-next-line no-unused-vars

const Store = (function(){

  // const bookmarks = [
  //   {
  //     id: 1235432,
  //     title: 'Gwent',
  //     url: 'url-here.com', 
  //     description: 'Wticher 3 card game', 
  //     rating: 5,
  //     expand: false,
  //   },
  //   {
  //     id: 1235432,
  //     title: 'HearthStone',
  //     url: 'url-here.com', 
  //     description: 'Blizzard card game', 
  //     rating: 4,
  //     expand: false,
  //   },
  //   {
  //     id: 1235432,
  //     title: 'Blackjack',
  //     url: 'url-here.com', 
  //     description: 'Casino card game', 
  //     rating: 4,
  //     expand: false,
  //   },
  // ];

  const setError = function(error) {
    this.error = error;
  };

  const addBookmark = function(item) {
    item.expanded = false;
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

  // const findAndFilter = function(rating) {
  //   this.bookmarks = this.bookmarks.filter(bookmark => {
  //     if(bookmark.rating === rating) {
  //       this.filter = rating;
  //     }
  //   });
  // };

  const findAndExpand = function(id) {
    // this function works to expand and view details of the list bookmark
   this.bookmarks = this.bookmarks.map(bookmark => {
     if(bookmark.id === id) {
       bookmark.expanded = !bookmark.expanded;
     }
     return bookmark;
   })
  };



  return {
    bookmarks: [],
    error: null,
    filter: 1,

    addBookmark,
    findById,
    findAndDelete,
    findAndUpdate,
    // findAndFilter,
    findAndExpand,
  };

}()
);