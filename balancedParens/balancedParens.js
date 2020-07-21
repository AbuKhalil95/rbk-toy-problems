/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 var balancedParens = function (input) {
  var arrInput = input.split('')
  var bracket = [];
  var curly = [];
  var parenth = []; 
  console.log(arrInput);
  arrInput.forEach(element => {
    console.log(element);
    if (element === '['){
      bracket.push(element);
      console.log('bracket add',bracket);

    }
    if (element === '{'){
      curly.push(element);
      console.log('curly add',curly);

    }
    if (element === '('){
      parenth.push(element);
      console.log('parenth add',parenth);

    }
    if (bracket && element === ']'){
      bracket.pop();
      console.log('bracket pop',bracket);

    }
    if (curly && element === '}'){
      curly.pop();
      console.log('curly pop',curly);

    }
    if (parenth && element === ')'){
      parenth.pop();
      console.log('parenth pop',parenth);

    }
  });
  if (bracket.length || curly.length || parenth.length){
    return false;
  } else {
    return true;
  }
 };

 console.log(balancedParens('this is very () good ()'));