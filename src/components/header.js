const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  // element construction
  const headerEl = document.createElement('div');
  const timeEl = document.createElement('span');
  const titleEl = document.createElement('h1');
  const tempEl = document.createElement('span');
  
  // class assignments
  headerEl.classList.add('header');
  timeEl.classList.add('date');
  tempEl.classList.add('temp');

  // assigning to parent class
  headerEl.appendChild(timeEl);
  headerEl.appendChild(titleEl);
  headerEl.appendChild(tempEl);

  // text assignments
  titleEl.textContent = title;
  timeEl.textContent = date;
  tempEl.textContent = temp;

  return headerEl

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

  const h = document.querySelector(selector)
  return h.appendChild(Header())
  
}

export { Header, headerAppender }
