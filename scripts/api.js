/* global $, cuid */

// eslint-disable-next-line no-unused-vars

const API = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/antoinecatt';

  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback) {
    let newItem = JSON.stringify({name});
  
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/JSON',
      data: newItem,
      success: callback
    });
  };
  
  const editItem = function(id, editData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/JSON',
      data: JSON.stringify(editData),
      success: callback
    });
  };

  const deleteItem = function(id, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
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