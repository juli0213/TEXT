function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var k;
  var t = [];
  var p = [];

  for (var i = 0;i < collection.length;i++) {
    t = collection[i].split("");//全部分成一个一个的
    if (i>0)
    {
      p = collection[i-1].split("");
    }


    if (i == 0)//第一个直接进站
    {
      result.push({name: collection[i], summary: 1});
      k = 0;//第一个a
    }


    else if (p[0] == t[0])//不是第一个,但是一样字母
    {
      if (collection[i-1] === collection[i] || p[0] == collection[i])//完全相同
      {
        result[k].summary++;
      }
      else if (t[0] == p[0] && t.length == 3)//a:2  a-2
      {
        result[k].summary += parseInt(t[t.length-1]);
      }
      else if (t[0] == p[0] && t.length > 3)//a[5]
      {
        if (t.length == 4)
        {
          result[k].summary += parseInt(t[2]);//一位数
        }
        else {
          result[k].summary += (parseInt(t[2])) * 10 + parseInt(t[3]);
          //两位数
        }
      }
    }


    else//不一样
    {
      if (t.length == 1)//基本类型
      {
        result.push({name: t[0], summary: 1});
        k++;
      }
      else if (t[0] != collection[i - 1] || t.length == 2)//a:2  a-2
      {
        result.push({name: t[0], summary: parseInt(t[2])});
        k++;
      }
      else if (t[0] != collection[i - 1] || t.length > 2)//a[5]
      {
        if (t.length == 3) {
          result.push({name: t[0], summary: parseInt(t[2])});
          //一位数
        }
        else {
          result.push({name: t[0], summary: (parseInt(t[2])) * 10 + parseInt(t[3])});//两位数
        }
      }
    }
  }

  return result;
}
