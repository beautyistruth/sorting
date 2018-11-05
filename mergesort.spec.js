describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    });
    it('is able to split an uneven array into two halves', function() {
        expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
      });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(merge([3, 4], [1, 2])).toEqual([1, 2, 3, 4]);
    });
    it('is able to merge two unsorted arrays into one sorted array', function(){
      expect(merge([3], [2])).toEqual([2, 3]);
    });
    it('is able to merge two sorted uneven arrays into one sorted array', function(){
      expect(merge([3, 4], [1, 2, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('mergeSort function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      expect(mergeSort([3, 4, 1, 2])).toEqual([1, 2, 3, 4]);
    });
    it('is able to merge two unsorted arrays into one sorted array', function(){
      expect(mergeSort([3, 2, 0])).toEqual([0, 2, 3]);
    });
    it('is able to merge two sorted uneven arrays into one sorted array', function(){
      expect(mergeSort([1, 1, 4, 2])).toEqual([1, 1, 2, 4]);
    });
    it('is able to merge two sorted uneven arrays into one sorted array', function(){
        expect(mergeSort([])).toEqual([]);
    });
  });