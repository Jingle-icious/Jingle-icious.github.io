document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("#js-new-quote");
    const quote = document.querySelector("#js-quote-text");
    const cite = document.querySelector("#js-quote-author");

 async function getQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        quote.textContent = data.content;
        cite.textContent = data.author;
    }else{
        quote.textContent = "failed to fetch quote :(";
        console.log(data);
    }
}
    button.addEventListener("click", getQuote);
});

const twitterURL = "https://twitter.com/intent/tweet/";
const linkTarget = '_top';
const windowOptions = 'menubar=no,status=no,height=750,width=500';

function extractQuote(){
    return document.querySelector('#js-quote-text');
}

function extractAuthor(){
    return document.querySelector('#js-quote-author');
}

function openTwitterWindow(text, link) {
    const twitterQuery = `text=${text}&url=${link}`;
    return window.open(`${twitterUrl}?${twitterQuery}&`, linkTarget, windowOptions);
}

function shareQuote() {
    const quote = extractQuote()
    const author = extractAuthor();
    const twitterButton = document.querySelector('#js-tweet-button');
    twitterButton.addEventListener('click', () => openTwitterWindow(quote, author))
}

shareQuote()
