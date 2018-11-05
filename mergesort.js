  /*
  merge (arr1, arr2) { //merge ([1], [2])
      //return one sorted array
  }

  split () {
      //splits the array 
      //i.e. [1,2,3,4]
      return [[1,2], [3,4]]
  }



  mergeSort()
    if arr.length > 1
        left = split (arr) [0]
        right = split (arr) [1]
        return merge (mergeSort(left), mergeSort(right))
    
    else return arr
  */

function split(wholeArray) {
    let firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
    let secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
    return [firstHalf, secondHalf];
}