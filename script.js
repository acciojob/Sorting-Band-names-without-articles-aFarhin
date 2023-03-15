//your code here
// array of band names
let bandNames = ['The Rolling Stones', 'Pink Floyd', 'Led Zeppelin', 'The Beatles', 'AC/DC'];

// function to remove articles from band names
function removeArticles(name) {
  // regular expression to match articles at the beginning of a string
  const regex = /^(?:the|an|a)\s+/i;
  // replace article with an empty string
  return name.replace(regex, '');
}

// sort band names in lexicographic order excluding articles
bandNames.sort();

// get ul element by id
const ul = document.getElementById('band');

// create list item for each band name and append to ul
bandNames.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});


