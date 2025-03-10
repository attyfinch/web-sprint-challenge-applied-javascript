import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div');
  card.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  card.appendChild(headline)
  headline.textContent = article.headline;

  const author = document.createElement('div');
  author.classList.add('author');
  card.appendChild(author);

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('img-container');
  author.appendChild(imageContainer);

  const img = document.createElement('img');
  imageContainer.appendChild(img);
  img.src = article.authorPhoto;

  const name = document.createElement('span')
  author.appendChild(name);
  name.textContent = `By ${article.authorName}`

  return card;

}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const articleObject = 'http://localhost:5001/api/articles'
  const content = document.querySelector(selector);
  
  axios.get('http://localhost:5001/api/articles')
  .then (res => {
    for (let [key, value] of Object.entries(res.data.articles)) {      
      value.forEach((ele, index) => {
        content.appendChild(Card(ele))
      })
      
    }

      
  })
  .catch (res => {
    debugger
  })


}

// cardAppender()

export { Card, cardAppender }

