// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = `expand this`
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // this.domElement.addEventListener('click', () => this.appendArticle());

    this.domElement.addEventListener('mouseover', () => this.highlightArticle());
    this.domElement.addEventListener('mouseout', () => this.offArticle());
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open');
    if(this.expandButton.textContent === 'expand this') {
      this.expandButton.textContent = `close this`;
    } else {
      this.domElement.style.display = 'none';
    }
    
  }
  // give the articles a bit of pop on mouseover
  highlightArticle() {
    this.domElement.style.border = 'solid lightblue 2px';
  }

  offArticle() {
    this.domElement.style.border = 'solid lightgrey 1px';
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles 
NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
// console.log('articles', articles);\

// create input form
const articleForm = document.createElement('form')

const headlineInput = document.createElement('input')
headlineInput.setAttribute('type', 'text')
headlineInput.placeholder = `Headline Here!`;
console.log(headlineInput);

// Create input for paragraph entry
const paragraphInput = document.createElement('textarea')
paragraphInput.placeholder = `Article Here!`;

// create submit button
const createArticle = document.createElement('input')
createArticle.setAttribute('type', 'submit')
createArticle.value = 'Add Article'

// append form to body
document.body.appendChild(articleForm)
articleForm.appendChild(headlineInput)
articleForm.appendChild(paragraphInput)
articleForm.appendChild(createArticle)

//creates a new article
function appendArticle() {
  let articleMaster = document.querySelector('.articles');
  let clonedArticle = articleMaster.firstElementChild.cloneNode(true);
  new Article(clonedArticle);
  clonedArticle.querySelector('h2').textContent = headlineInput.value
  clonedArticle.querySelector('.date').textContent = new Date();
  clonedArticle.querySelector('p:nth-of-type(2)').textContent = paragraphInput.value;
  clonedArticle.querySelector('p:nth-of-type(3)').textContent = null;
  clonedArticle.querySelector('p:last-of-type').textContent = null;
  if (headlineInput.value.length > 0 && paragraphInput.value.length > 0) {
    articleMaster.appendChild(clonedArticle);
    headlineInput.value = null;
    paragraphInput.value = null;
  } else {
    return alert('You must enter a headline and an article.');
  }
  
}

createArticle.addEventListener('click', (event) => {
  event.preventDefault();
  appendArticle()

})