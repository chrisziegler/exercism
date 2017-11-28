var circularBuffer = function(size) {

  var c = {
    store: [],
    read: function() {
      if(c.store.length == 0) {
        throw bufferEmptyException();
      }
      return c.store.shift();
    },
    write: function(item, overwrite = false) {
      if(item == null || item == undefined) {
        return;
      }
      if(c.store.length == size) {
        if(overwrite) {
          c.store.shift();
        } else {
          throw bufferFullException();
        }
      }
      c.store.push(item);
    },
    forceWrite: function(item) {
      c.write(item, true);
    },
    clear: function() {
      c.store = [];
    }
  };

  return c;
}

var bufferEmptyException =  function()  {
  return  new Error('Buffer empty');
};
var bufferFullException =  function()  {
  return  new Error('Buffer full');
};
module.exports = {circularBuffer, bufferEmptyException, bufferFullException}