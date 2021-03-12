exports.min = function min (array) {
  if(array&&array.length!=0 ){
return Math.min.apply(0, array)
  }
  else return 0;
}

exports.max = function max (array) {
  if(array&&array.length!=0){
    return Math.max.apply(0, array)
      }
      else return 0;
}

exports.avg = function avg (array) {
  
 let avgValue = 0;
 let sum = 0;

 if(array&&array.length>0){
  for(let i = 0; i <array.length; i++)
  {
 sum+=array[i];
  }
  return avgValue = sum/array.length;
 }
 else return 0;
}
