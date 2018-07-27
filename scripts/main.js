/* global bookmark, store */

// eslint-disable-next-line no-unused-vars

$(document).ready(function(){
  Bookmark.render();
  Bookmark.bindEventListeners();
// Renders the item that are posted in the database
  API.getItems(bookmarks => {
    bookmarks.forEach(bookmark => Store.addBookmark(bookmark));
    Bookmark.render();
  });
});