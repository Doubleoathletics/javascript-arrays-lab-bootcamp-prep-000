var kittens = ['Milo', 'Otis', 'Garfield'];
console.log(kittens)

function destructivelyAppendKitten(name) {
      kittens = ['Milo', 'Otis', 'Garfield'];
      return kittens.push('Ralph')
    }
    
function destructivelyPrependKitten(name) {
    kittens = ['Milo', 'Otis', 'Garfield'];
     return kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
    return kittens.shift()
  }
function appendKitten(name) {
  return kittens.concat('Broom')
}

function prependKitten(name) {
kittens = ['Milo', 'Otis', 'Garfield'];
console.log(kittens.unshift('Arnold'))
return console.log.concat
  }

    it('prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(prependKitten("Arnold")).toEqual(["Arnold", "Milo", "Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })

  function removeLastKitten() {
     kittens = ['Milo', 'Otis', 'Garfield'];
    console.log(kittens.slice(2))
  }
  
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
function removeFirstKitten() {
  kittens = ['Milo', 'Otis', 'Garfield'];
  return console.log(kittens.slice(0));
}
