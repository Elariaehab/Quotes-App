var quotes = [
    "The only way to do great work is to love what you do. ",
    "Innovation distinguishes between a leader and a follower. ",
    "Life is what happens when you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    
];

var writers= ['-- Steve Jobs',"--Steve Jobs", '--John Lennon', '--Eleanor Roosevelt','--Franklin D. Roosevelt' ];
var counter= 0;
function demo(){
    document.getElementById('demo1').innerHTML = quotes[counter];
    document.getElementById('demo2').innerHTML = writers[counter];
    counter++
    if(counter >= quotes.length){
        counter =0;
    }
    if(counter >= writers.length){
        counter =0;
    }
}
