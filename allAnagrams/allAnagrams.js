/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  var possibleAnagrams= [];
  var position = 0;
  var onePossible = '';

  console.log('length',string.length);
  for (var i = 0; i < string.length; i++) {
    console.log('first',i);

    for (var j = 0; j < string.length-1; j++) {
      console.log('variable',j);
      onePossible += string[i];
      position = j+1;
      if (position > string.length) {
        position = 0;
      }
      console.log('fixed',j+1);
      var count = 1;

      while (count < string.length) {
        console.log('position',position);
        if (position >= string.length) {
          position = 0;
        }
        onePossible += string[position]
        console.log('count',count);
  
        count++;
        position ++;
      } 
      
    possibleAnagrams.push(onePossible);
    onePossible = '';
    console.log(possibleAnagrams);
    }
  }
};

var anagrams = allAnagrams('abcde');
