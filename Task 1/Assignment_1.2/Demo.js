function getElementById(id) {
  var element = null;
  var nodes = document.getElementsByTagName('*');
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].id === id) {
      element = nodes[i];
      break;
    }
  }
  return element;
}

// It uses getElementsByTagName() method to retrieve all elements in the document, and then loops 
// through each element to check its id.
// When it finds an element with id matching with the one which is passed to the function, it returns that element.
// If no element with the given id is found, it returnss null.