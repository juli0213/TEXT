function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var k;
  var t = [];

  for (var i = 0;i < collection.length;i++)
  {
    t = collection[i].split("-");
    if (t.length == 1)
    {
      for (var j = 0;j < t.length;j++)
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

        else if(i != 0 && collection[i] != result[k].count)
        {
          result.push({key:collection[i],count:1});
          k++;
        }
      }
    }
    else
    {
      result.push({key:t[0],count:parseInt(t[t.length-1])});
    }

  }

  return result;
}

