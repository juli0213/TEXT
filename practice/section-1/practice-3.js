function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  for (var j = 0;j < collection_a.length;j++)
  {
    for (var i = 0;i < object_b.value.length;i++)
    {
      if (collection_a[j] === object_b.value[i])
      {
        result.push(collection_a[j]);
      }
    }
  }
  return result;
}
