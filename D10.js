console.log('/=========/ Progetto settimanale Antonio Ruggia Piquer (https://github.com/kaem0n/epicode-U1-W3-D5) /=========/')

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log('/==/ JS Basics /==/')

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20
console.log('A) sum =', sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21)
console.log('B) random =', random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: 'Antonio',
  surname: 'Ruggia Piquer',
  age: 30
}
console.log('C) me =', me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age
console.log('D) me aggiornato =', me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['HTML5', 'CSS', 'JavaScript']
console.log('E) me aggiornato =', me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('CadregaScript')
console.log('F) me aggiornato = ', me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()
console.log('G) me aggiornato =', me)

// Funzioni
console.log('/==/ Funzioni /==/')

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.floor((Math.random() * 6) + 1)
console.log('1) Funzione "dice":', dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1
  } else if (n2 > n1) {
    return n2
  } else if (n1 === n2) {
    return 'I numeri inseriti sono uguali.'
  }
}
console.log('2) Test whoIsBigger() con valori 3 e 2:', whoIsBigger(3, 2))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str) => str.split(' ')
console.log('3) Test splitMe():', splitMe('I love coding'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (str, boolean) {
  if (boolean === true) {
    return str.slice(1)
  } else if (boolean === false) {
    return str.slice(0, str.length-1)
  }
}
console.log('4) Test deleteOne("EPICODE", true):', deleteOne('EPICODE', true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (str) {
  const strArray = str.split(' ')
  for (let i=0; i<strArray.length; i++) {
    if (strArray[i] >= 0) {
      strArray.splice(strArray.indexOf(strArray[i]), 1)
      i=0
    }
  }
  return strArray.join(' ')
}
console.log('5) Test onlyLetters():', onlyLetters('872346238756214 I 43523456 235 have 495148574129721978718954 dogs 4325213453252352'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (str) {
  if (str.includes('@')) {
    return true
  } else {
    return false
  }
}
console.log('6) Test isThisAnEmail("123indirizzo@fasullo.com"):', isThisAnEmail('123indirizzo@fasullo.com'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const today = new Date().getDay()
  const weekDays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
  return weekDays[today]
}
console.log('7) Test whatDayIsIt():', whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (n) {
  const rolls = []
  let sum = 0
  for (let i=0; i<n; i++) {
    rolls.push(dice())
    sum += rolls[i]
  }
  return {
    'sum': sum,
    'rolls': rolls
  }
}
console.log('8) Test rollTheDices(10):', rollTheDices(10))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (year, month, day) {
  const now = new Date()
  const minute = 1000 * 60
  const hour = minute * 60
  const days = hour * 24
  const date = new Date("'"+year+"-"+month+"-"+day+"'")
  const milliseconds = now.getTime() - date.getTime()
  if (year < 1970) {
    return 'Data non valida.'
  } else {
    return Math.round(milliseconds / days)
  }
}
console.log('9) Test howManyDays(2022, 12, 8):', howManyDays(2022, 12, 8))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function (month, day) {
  const now =  new Date()
  const currentMonth = now.getMonth() + 1
  const currentDay = now.getDate()
  if (month > 12 || day > 31) {
    return 'Data non valida.'
  } else if (month !== currentMonth || day !== currentDay) {
    return false
  } else {
    return true
  }
}
console.log('10) Test isTodayMyBirthday(10, 21):', isTodayMyBirthday(10, 21))

// Arrays & Oggetti
console.log('/==/ Arrays & Oggetti /==/')

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (obj, prop) {
  delete obj[prop]
  return obj
}
console.log('11) Test deleteProp():', deleteProp({name: 'Antonio', surname: 'Ruggia', age: '30'}, 'age'))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function () {
  let newestYear = 0
  let newestName
  for (let i=0; i<movies.length; i++) {
    if (newestYear < movies[i].Year) {
      newestName = movies[i].Title
    }
  }
  return newestName
}

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => movies.length

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = function () {
  const years = []
  for (let i=0; i<movies.length; i++) {
    years.push(movies[i].Year)
  }
  return years
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function () {
  const xxCenturyMovies = []
  for (let i=0; i<movies.length; i++) {
    if (movies[i].Year <= 2000) {
      xxCenturyMovies.push(movies[i])
    }
  }
  return xxCenturyMovies
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function () {
  let sum = 0
  const years = onlyTheYears()
  for (let i=0; i<years.length; i++) {
    sum += parseInt(years[i])
  }
  return sum
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (str) {
  const search = []
  for (let i=0; i<movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      search.push(movies[i])
    }
  }
  return search
}

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = function (str) {
  const obj = {
    match: [],
    unmatch: []
  }
  const matched = searchByTitle(str)
  obj.match.push(...matched)
  for (let i=0; i<movies.length; i++) {
    if (movies[i].Title.includes(str) === false) {
      obj.unmatch.push(movies[i])
    }
  }
  return obj
}

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (n) {
  if (n >= movies.length) {
    return 'Valore non valido.'
  } else {
    movies.splice(n, 1)
    return movies
  }
}

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectContainer = function () {
  const container = document.getElementById('container')
  return container
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectTag = function () {
  const tds = document.getElementsByTagName('td')
  return tds
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTds = function () {
  const tds = document.getElementsByTagName('td')
  for (let i=0; i<tds.length; i++) {
    console.log(tds[i].innerText)
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const bgRedToA = function () {
  const a = document.getElementsByTagName('a')
  for (let i=0; i<a.length; i++) {
    a[i].style.backgroundColor = 'red'
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addNewLi = function () {
  const myList = document.getElementById('myList')
  const newLi = document.createElement('li')
  myList.appendChild(newLi)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const deleteLis = function () {
  const myList = document.getElementById('myList')
  myList.innerHTML = ''
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const trClassAddTest = function () {
  const tr = document.getElementsByTagName('tr')
  for (let i=0; i<tr.length; i++) {
    tr[i].classList.add('test')
  }
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function (n) {
  const leaf = '*'
  const parts = []
  parts.push(leaf)
  const container = document.getElementById('e27')
  let treeHTML = `<span>*</span>`
  for (let i=1; i<n; i++) {
    parts.push(parts[i-1].concat(leaf))
    treeHTML += `<span>${parts[i]}</span>`
  }
  container.innerHTML = treeHTML
}
halfTree(4)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = function (n) {
  const leaf = '*'
  const parts = []
  parts.push(leaf)
  const container = document.getElementById('e28')
  container.style.alignItems = 'center'
  let treeHTML = `<span>*</span>`
  for (let i=1; i<n; i++) {
    parts.push((parts[i-1] + leaf + leaf))
    treeHTML += `<span>${parts[i]}</span>`
  }
  container.innerHTML = treeHTML
}
tree(4)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function (n) {
  console.log('29a) Valore di n:', n)
  if (n === 2 || n === 3) {
    return true
  } else if (n % 2 === 0) {
    return false
  } else {
    for (let i=3; i<n; i++) {
      if (n % i === 0) {
        return false
      } else {
        return true
      }
    }
  }
}

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

console.log('12) Il film più recente dell\'array "movies" è:', newestMovie())
console.log('13) Nell\'array "movies" ci sono ' + countMovies() + ' film.')
console.log('14) Array con solo gli anni dei film contenuti in "movies":', onlyTheYears())
console.log('15) Film prodotti nel secolo scorso:', onlyInLastMillennium())
console.log('16) La somma di tutti gli anni dei film di "movies" è:', sumAllTheYears())
console.log('17) Cerco la parola "Rings" usando la funzione appena creata:', searchByTitle('Rings'))
console.log('18) Cerco la parola "Avengers" usando la funzione appena creata:', searchAndDivide('Avengers'))
console.log('19) Rimuovo l\'indice n. 12 dall\'array "movies":', removeIndex(12))
console.log('/==/ EXTRA /==/')
console.log('29b) Test isItPrime():', isItPrime(5))