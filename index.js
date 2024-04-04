var quote = ["Success is not final, failure is not fatal: It is the courage to continue that counts.",
"The only way to do great work is to love what you do." ,
"In the end, it's not the years in your life that count. It's the life in your years.",
 "The future belongs to those who believe in the beauty of their dreams.", 
 "The only limit to our realization of tomorrow will be our doubts of today.", 
 "Life is what happens when you're busy making other plans.",
 "The greatest glory in living lies not in never falling, but in rising every time we fall." ,
 "In three words I can sum up everything I've learned about life: it goes on." ,
 "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment." , 
 "Happiness is not something you postpone for the future; it is something you design for the present."];
var author = ["Winston ","Steve Jobs", "Abraham Lincoln", "Eleanor Roosevelt"," Franklin D. Roosevelt", "John Lennon" ," Nelson Mandela", "Robert Frost","Ralph Waldo Emerson"," Jim Rohn"];
const copybtn= document.querySelector("#copy");

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quote.length));
    document.getElementById('quote').innerHTML = quote[randomNumber];
    
    // var randomNumber1 = Math.floor(Math.random() * (author.length));
    document.getElementById('auth').innerHTML = author[randomNumber];
}

copybtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(document.getElementById('quote').innerHTML);
    console.log(document.getElementById('quote').innerHTML);
});

// copybtn.addEventListener("copy",(event)=>{
//     const select=document.getSelection();
//     event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
//     event.preventDefault();
// })