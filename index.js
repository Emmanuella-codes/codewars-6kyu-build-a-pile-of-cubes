// Write Javascript code!
function findNb(m) {
  // your code
  let total = 0;
  let n = 0;

  while (total < m) {
    n += 1
    total += n**3
  }
  return total === m ? n : -1;
}

console.log(findNb(4183059834009))
