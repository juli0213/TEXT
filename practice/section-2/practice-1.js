function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var k;
  for (var i = 0;i < collection.length;i++)
  {
    if (i == 0)
    {
      result.push({key:collection[i],count:1});
      k = 0;
    }

    if (collection[i] === collection[i-1])
    {
      result[k].count++;
    }

    else if(i != 0 && collection[i] != result[k].key)
    {
      result.push({key:collection[i],count:1});
      k++;
    }
  }
  return result;
}
