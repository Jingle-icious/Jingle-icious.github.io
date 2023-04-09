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
        quote.textContent = "failed to fetch quote, this is quite sadge";
        console.log(data);
    }
}
    button.addEventListener("click", getQuote);
});

const twitterURL = "https://twitter.com/intent/tweet/";
const linkTarget = '_top';
const windowOptions = 'menubar=no,status=no,height=750,width=500';

function takeQuote(){
    console.log(document.querySelector('#js-quote-text').textContent);
    return document.querySelector('#js-quote-text').textContent;
    
}

function citeAuthor(){
    console.log(document.querySelector('#js-quote-author').textContent);
    return document.querySelector('#js-quote-author').textContent;
}

function openTwitterWindow() {
    const quote = extractQuote();
    const author = extractAuthor();
    const twitterQuery = `text=${encodeURIComponent(`"${quote}" - ${author}`)}&url=`;
    return window.open(`${twitterURL}?${twitterQuery}&`, linkTarget, windowOptions);
}

function shareQuote() {
    const twitterButton = document.querySelector('#js-tweet-button');
    twitterButton.addEventListener('click', () => openTwitterWindow());
}

getQuote();
shareQuote();