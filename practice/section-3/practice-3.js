function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var k;
  var t = [];

  for (var i = 0;i < collection_a.length;i++)
  {
    t = collection_a[i].split("-");
    if (t.length == 1)
    {
      for (var j = 0;j < t.length;j++)
      {
        if (i == 0)
        {
          result.push({key:collection_a[i],count:1});
          k = 0;
        }

        if (collection_a[i] === collection_a[i-1])
        {
          result[k].count++;
        }

        else if(i != 0 && collection_a[i] != result[k].count)
        {
          result.push({key:collection_a[i],count:1});
          k++;
        }
      }
    }
    else
    {
      result.push({key:t[0],count:parseInt(t[t.length-1])});
    }

  }

  for (var p = 0; p < result.length ; p++)
      {
        //temp = result[p].key.split("");
        for(var j = 0;j < object_b.value.length; j++)
        {
          if(object_b.value[j] == result[p].key)
          {
            result[p].count -= parseInt(result[p].count/3);
          }
        }
      }
  return result;
}
