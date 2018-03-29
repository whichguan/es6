/**
 * Created by which on 2018/3/29.
 */
// 解构赋值
// 数组解构
{
  let a, b, rest;
  [a, b] = [1, 2];
  console.log(`a:${a}  b:${b}`);
}
{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.log(`a:${a}  b:${b} rest:${rest}`);
}
// 对象解构
{
  let a, b;
  ({a, b} = {a: 3, b: 4});
  console.log(a, b);
}
// 默认值
{
  let a, b, c, rest;
  [a, b, c = 3] = [1, 2];
  console.log(`a:${a}  b:${b} c:${c}`);
}
//  变量交换
{
  let a = 1;
  let b = 2;
  [a, b] = [b, a];
  console.log(a, b);
}
// 解构赋值
{
  function f () {
    return ['test1', 'test2']
  }

  let a, b;
  [a, b] = f();
  console.log(a, b);
}
{
  function f () {
    return [1, 2, 3, 4, 5, 6]
  }

  let a, b, c, d;
  [a, , , b] = f();
  console.log(a, b);
  [c, ...d] = f();
  console.log(c, d);
}
{
  function f () {
    return [1, 2, 3, 4, 5, 6]
  }

  let a, b;
  [a, , ...b] = f();
  console.log(a, b);
}

// 对象解构
{
  let o = {p:42,q:true}
  let {p,q}=o;
  console.log(p,q);
}
{
  let {a=10,b=5}={a:3}
  console.log(a,b);
}

{
  let metaData ={
    title:'abc',
    test:[{
      title:'test',
      desc:'description'
    }]
  }
  let {title:esTitle,test:[{title:cnTitle}]} = metaData;
  console.log(esTitle,cnTitle);
}