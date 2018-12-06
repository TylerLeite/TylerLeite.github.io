function santa (seed) {
<<<<<<< HEAD
  // let peeps = ['Tyler', 'Allie', 'Kyle', 'Ajmal', 'Mama', 'Ddogg'];
  let peeps = ['Austin', 'Cathy', 'Chase', 'Corn', 'Noah', 'Tyler', 'Winslorp']
=======
  let peeps = ['Tyler', 'Allie', 'Kyle', 'Ajmal', 'Mama', 'Ddogg', 'Stefanie'];
>>>>>>> cc2b7a96a5d170228e2b346bd17fdcc1cc9b3801

  function randomNumber (range) {
    seed = (52667*seed + 20219) % 104729;
    return seed % range;
  }

  function randomChoice (arr) {
    return arr[randomNumber(arr.length)]
  }

  function shuffle (arr) {
    for (let i = 0; i < randomNumber(200); i++) {
      a = arr.splice(randomNumber(peeps.length), 1);
      arr.push(a[0]);
    }
  }

  shuffle(peeps);

  let other = peeps.slice(1).concat([peeps[0]]);

  let out = {};
  for (let i = 0; i < peeps.length; i++) {
    out[peeps[i]] = other[i]
  }

  return out;
}
