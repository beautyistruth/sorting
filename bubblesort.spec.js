describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect(bubbleSort([]) ).toEqual( [] );
    });
    it('returns a sorted array', function(){
        expect(bubbleSort([3, 4, 2, 1])).toEqual([1, 2, 3, 4]);
    });

    it('does not use Array.prototype.sort', function() {
      spyOn(Array.prototype, 'sort').and.callThrough();

      let unsorted = [4,3,2,1];
      let sorted = bubbleSort(unsorted);

      expect(sorted).toEqual([1,2,3,4]);
      expect(Array.prototype.sort.calls.count()).toBe(0);
    });
    
  });

