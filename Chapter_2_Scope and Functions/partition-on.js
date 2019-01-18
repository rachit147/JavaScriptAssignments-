function partitionOn(pred, items) {
  var leftArray= [];
  var rightArray = [];
  
  for(var arrayIndex = 0; arrayIndex < items.length; arrayIndex++) {
    var item = items[arrayIndex];
    
    if(pred(item)) 
    {
      rightArray.push(item);
    
    } else 
    {
        leftArray.push(item);
     }
  }
  
  items.length = 0;
  
  for(var arrayIndex = 0; arrayIndex < leftArray.length; arrayIndex++) {
    items.push(leftArray[arrayIndex]);
  }
  
  for(var arrayIndex = 0; arrayIndex < rightArray.length; arrayIndex++) {
    items.push(rightArray[arrayIndex]);
  }
  
  return leftArray.length;
}