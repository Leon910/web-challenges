console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const postArticle = document.createElement("article");
console.log(postArticle);
postArticle.classList = "post";

const postP = document.createElement("p");
console.log(postP);
postP.classList = "post__content";
postP.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
postArticle.appendChild(postP);

const postFooter = document.createElement("footer");
console.log(postFooter);
postFooter.classList = "post__footer";
postArticle.appendChild(postFooter);

const postSpan = document.createElement("span");
console.log(postSpan);
postSpan.classList = "post__username";
postSpan.textContent = "@username";
postFooter.appendChild(postSpan);

const postButton = document.createElement("button");
console.log(postButton);
postButton.classList = "post__button";
postButton.textContent = "♥ Like";
postButton.addEventListener("click", handleLikeButtonClick);
postFooter.appendChild(postButton);

document.body.appendChild(postArticle);
