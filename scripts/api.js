/* global $, cuid */

// eslint-disable-next-line no-unused-vars

const API = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/antoinecatt';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  const createItem = function(title, url, desc, rating, callback) {
    let bookMarkItem = {title, url, desc, rating};
    // convert object into string in order for the API to read the data being sent
    let newItem = JSON.stringify(bookMarkItem);
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/JSON',
      data: newItem,
      success: callback
  });
  };
  
  const editItem = function(id, editData, callback) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'PATCH',
      contentType: 'application/JSON',
      data: JSON.stringify(editData),
      success: callback
    });
  };

  const deleteItem = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      contentType: 'application/JSON',
      success: callback
    });
  };

  return {
    getItems,
    createItem,
    editItem,
    deleteItem
  };


}()
);