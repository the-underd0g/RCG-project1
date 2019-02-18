/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/
var quotes = [
     {
        quote:'Whatever the mind of man can conceive and believe, it can achieve',
        source:'Napoleon Hill',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:'1923'
    },
    {
        quote:' Strive not to be a success, but rather to be of value',
        source:'Albert Einstein',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'You miss 100% of the shots you don’t take.',
        source:'Wayne Gretzky',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'Every strike brings me closer to the next home run',
        source:'Babe Ruth',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'Eighty percent of success is showing up.',
        source:'Woody Allen',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'Winning isn’t everything, but wanting to win is.',
        source:'Vince Lombardi',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
        source:'Michael Jordan',
        citation: 'https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/#4a2c60f36c7a',
        year:''
    },
    {
        quote:'Only I can change my life. No one can do it for me',
        source:'Carol Burnett',
        citation: 'https://www.brainyquote.com',
        year:'1933'
    },
    {
        quote:'Always do your best. What you plant now, you will harvest later.',
        source:'Og Mandino',
        citation: 'https://www.brainyquote.com',
        year:'1923'
    },
    {
        quote:'Life is about making an impact, not making an income',
        source:'Kevin Kruse',
        citation: 'http://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/',
        year:'2016'
    }
];



/***
  Create the `getRandomQuote` function to:
   - generate a random number 
   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/
function getRandomQuote(){
  let randomNumber = Math.random() * (quotes.length);
  return quotes[Math.floor(randomNumber)];
}

function createHtmlFromQuote(quote){
    var html = '<p class="quote">' + quote['quote'] + '</p>';
    html += '<p class="source">' + quote['source'] + '<br>';
    html += '<span class="citation">'+ quote['citation'] + '</span> <br>';
    html += '<span class="year" ' + quote['year'] + '</span>';
    html += '</p>';
    return html;
}

/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote(){
  var quote = getRandomQuote();
  document.getElementById('quote-box').innerHTML = createHtmlFromQuote(quote);

}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.