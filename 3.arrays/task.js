function compareArrays(arr1, arr2) {
  let result = arr1.length === arr2.length && arr1.every((i, elem) => arr1[elem] === arr2[elem]);

  return result;
}


function advancedFilter(arr) {
  
  let resultArr = arr.filter((elem) => elem > 0).filter((elem) => elem % 3 === 0).map((elem) => elem * 10)

  return resultArr;
}
