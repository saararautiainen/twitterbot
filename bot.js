var express = require('express');
var app = express();

var
    twit = require('twit'),
    config = require('./config');

var Twitter = new twit(config);

Array.prototype.pick = function() {
    return this[Math.floor(Math.random()*this.length)];
}

//list of verbs, nouns, adjectives used for sentence building NEEDS EDITING AND THOUGHT BEHIND STRUCTURE
var verb = [
    "runs",
    "jumps",
    "holds",
    "drinks",
    "eats",
    "sleeps",
    "cycles",
    "sits",

];

//Niels verb (singular)
var singVerb = [

    "sit still",
    "run",
    "jump",
    "hold",
    "drink",
    "eat",
    "sleep",
    "cycle",
    "whisper",
    "invent things",
    "deceive",
    "force",
    "scare",
];

var noun = [
    "table",
    "girl",
    "glass",
    "boy",
    "computer",
    "gun",
    "phone",
    "water",
    "coat",
    "pen",
    "ship",
    "star",
    "wealth",
    "purpose",
    "yarn",
    "fog",
    "dinosaur",
    "trip",
    "army",
    "boat",
    "art",
    "show",
    "day",
    "salt",
    "bee",
    "rose",
    "sky",
    "ice",
    "sheep",
    "bike",
    "limit",
    "son",
    "nose",
    "food",
    "spy",
    "swim",
    "land",
    "person",
];

var adjective = [
    "funny",
    "cold",
    "sad",
    "green",
    "tired",
    "emotional",
    "angry",
    "painful",
    "mammoth",
    "chunky",
    "unsightly",
    "fallacious",
    "barbarous",
    "giant",
    "thoughtful",
    "spotty",
    "dizzy",
    "unsightly",
    "puzzling",
    "deserted",
    "enormous",
    "shaggy",
    "wandering",
    "icky",
    "prickly",
    "tremendous",
    "agonizing",
    "tasteless",
    "uninterested",
    "scary",
    "nervous",
    "itchy",
    "magical",
    "noiseless",
];

var nounSecond = [
    "book",
    "chair",
    "bottle",
    "strawberry",
    "pen",
    "pasta",
    "jacket",
    "pillow",
    "car",
    "wind" ,
    "beginner",
    "snail",
    "airport",
    "morning",
    "downtown",
    "sisters",
    "sneeze",
    "brother",
    "shoes",
    "scissors",
    "man",
    "night",
    "mother",
    "color",
    "daughter",
    "skirt",

];


//Niels

var color = [
    "blue",
    "red",
    "yellow",
    "green",
    "purple",
    "pink",
    "beige",
    "white",
    "black",
    "grey",
    "transparent",
    "light",
    "dark",
    "dim",
    "gold",
    "violet",
    "royal blue",
    "dark Cyan",
    "deep pink",
    "tan",
];

var animal = [
    "moose",
    "goose",
    "cow",
    "snake",
    "horse",
    "sloth",
    "pig",
    "bird",
    "eagle",
    "cat",
    "dog",
    "skunk",
    "rat",
    "mouse",
    "chimpanzee",
    "chipmunk",
    "musk deer",
    "hog",
];



var people = [

    "Katy Perry",
    "Justin Bieber",
    "Barack Obama",
    "Taylor Swift",
    "Rihanna",
    "Ellen DeGeneres",
    "Lady Gaga",
    "Cristiano Ronaldo",
    "Justin Timberlake",
    "Kim Kardashian",
    "Britney Spears",
    "Ariana Grande",
    "Selena Gomez",
    "Demi Lovato",
    "Jimmy Fallon",
    "Shakira",
    "Jennifer Lopez",
    "Donald J. Trump",
    "Bill Gates",
    "LeBron James",
    "Trump",


];



app.post('/LEDon', function(req, res) {
    console.log('LEDon button pressed!');

    var v = verb.pick();
    var n = noun.pick();
    var adj = adjective.pick();
    var ns = nounSecond.pick();
    var co = color.pick();
    var ani = animal.pick();
    var sv = singVerb.pick();
    var pe = people.pick();
    var peTwo = people.pick();

    switch(Math.floor(Math.random()*6)) {
        case 0:
            var sentence = "The " + adj + " " + n + " " + v + " with my " + ns + ".";
            break;
        case 1:
            var sentence = "A " + adj + " " + ani + " ate " + pe + "'s' " + ns + ".";
            break;
        case 2:
            var sentence = "Why did " + pe + " and " + peTwo + " " + v + " together?";
            break;
        case 3:
            var sentence = "Tomorrow I will " + sv + " with " + pe + ", " + peTwo + " and their " + ani + ".";
            break;
        case 4:
            var sentence = "I love " + pe + "'s " + adj + " " + n + ".";
            break;
        case 5:
            var sentence = "I think " + pe + " looks like a " + co + " " + ani + "." ;
            break;
       
    }
    //posts to our account
    Twitter.post('statuses/update', { status: sentence }, function (error, data, response){
    });
    // Run your LED toggling code here
});

app.listen(1337);