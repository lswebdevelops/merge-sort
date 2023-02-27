
function recurcFibs(n) {
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    } else {
      let list = recurcFibs(n - 1);
      list.push(list[list.length - 1] + list[list.length - 2]);
      if (list.length > n) {
        list.pop();
      }
      return list;
    }
  }
  
  console.log(recurcFibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13]
  