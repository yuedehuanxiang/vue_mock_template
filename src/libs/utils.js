let utils = {

};

// 数组去重
utils.unique = (arr) => {
  return Array.from(new Set(arr))
}

utils.unique2 = (arr) => {
  return [...new Set(arr)]
}

//纯数组排序
utils.orderArr = (arr) => {
  let newArr = arr.sort((a, b) => {
    return a - b  //将数组升序排列
  })
  return newArr
}

utils.orderArr2 = (arr) => {
  let newArr = arr.sort((a, b) => {
    return b - a  //将数组降序排列
  })
  return newArr
}

//数组对象排序
utils.objectArr = (arr, property) => {
  let newArr = arr.sort((a, b) => {
    let value1 = a[property];
    let value2 = b[property];
    return value1 - value2;
  })
  return newArr
}

//遍历对象身上的属性
utils.ergodic = (obj) => {
  for(let variable in obj){
    //for in 遍历对象所有属性包括继承的
    //如果只想使用对象自身的属性要加一个判断
    if(obj.hasOwnProperty(variable)){
      console.log(variable,obj[variable])
    }
  }
}

utils.ergodic2 = (obj) => {
  for(let variable in obj){
    console.log(variable,obj[variable])
  }
}

//判断是否是数组
utils.isArrayFn = (value) => {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  }else{
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

utils.sum = (...rest) => {
  if(rest.length == 0){
    return 0;
  }else{
    var arg,result = 0;
    for(arg of rest){
      if(typeof arg !== 'number'){
        continue;
      }
      result += arg;
    }
    return result;
  }

}


export default {
  install: function (vm) {
    vm.prototype.$utils = utils;

  }
}
