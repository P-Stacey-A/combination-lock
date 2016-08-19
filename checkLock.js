var checkLock = function( a, b, c , d  ) {
  var check;
  if (( a === 3 || a === 5 || a === 7) && 
      ( b === 2 ) && 
      ( c >= 5 && c <= 100) && 
      ( d < 9 || d > 20)) {
     check = "correct"; }
     else{
     check = "incorrect";
   }
    return check;
}; 

console.log(checkLock(5,2,45,1));
