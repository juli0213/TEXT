function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for (var i = 0; i < collection_a.length ; i++)
  {
    for(var j = 0;j < object_b.value.length; j++)
    {
      if(object_b.value[j] == collection_a[i].key)
      {
        collection_a[i].count--;
      }
    }
  }
  return collection_a;
}