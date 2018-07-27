/* global Item */ 

// eslint-disable-next-line no-unused-vars

const Store = (function(){

  const items = {
    item: [
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
        title: 'Gwent',
        url: 'url-here.com', 
        description: 'Real life card game', 
        rating: 4,
        expand: false,
      },
    ],
    error: 'This is an error message',
    filter: 5
  };

  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const findAndUpdate = function(id, newData) {
    let itemId = this.findById(id);
    Object.assign(itemId, newData);
  };

  const findAndExpand = function(id) {
    // this function works to expand and view details of the list item
    // work one user story at a time
  };

  const filterRatings = function(data) {
    // this function filters which rating the user chooses
  };

  return {
    items,
    addItem,
    findById,
    findAndDelete,
    findAndUpdate,
    findAndExpand,
    filterRatings
  };

}()
);