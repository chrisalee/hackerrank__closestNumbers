/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    let sortie = arr.sort((a, b) => a - b);
    let minDiff = Infinity; 
    let lowNum, highNum;
    let pairs = [];
    
    for(let i = 0; i < sortie.length - 1; i++) {
        let currLowNum = sortie[i];
        let currHighNum = sortie[i + 1];
        let tempDiff = currHighNum - currLowNum;
        if(tempDiff < minDiff) {
            minDiff = tempDiff;
        }
    }
    
    for(let i = 0; i < sortie.length - 1; i++) {
        let currLowNum = sortie[i];
        let currHighNum = sortie[i + 1];
        if(currHighNum - currLowNum === minDiff) {
            pairs.push(currLowNum, currHighNum)
        }
    }
    
    console.log(pairs);
    return pairs;
}


///////////////////////////////////////////////////////////////////////////////
function closestNumbers(arr) {

  arr.sort(function(a, b) { return a - b });
  let n = arr.length;
  let min = arr[1] - arr[0];
  let output = [];

  for (let i = 2; i < n; i++) {
    diff = (Math.abs(arr[i + 1] - arr[i]));
    if (diff < min) {
      min = diff;
      output = [arr[i], arr[i + 1]];
    } else if (diff == min) {
      output.push(arr[i], arr[i + 1]);
    }
  }
  return output;
}
