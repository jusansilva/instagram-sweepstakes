# instagram-sweepstakes

## About

#### Sort and sweepstakes to instagram.

## Install 

#### npm install instagram-sweepstakes --save

### In your code 


```
const sweepstake = require('instagram-sweepstakes');

const refactor = () => {
    var url = "https://www.instagram.com/p/CDPQHq7Dpc2/"; //post url
    var order = "desc"; //order to list, desc or asc
    var char = "@"; // character to find hastag # or profile @

    var sortComments = sweepstake.sorte(url, order, char);
    var random = sweepstake.random(url, char)

    console.log(sortComments);
    /*[
  '#swiftui',             '#swift',
  '#mobiledeveloper',     '#ios',
  '#iosdeveloper',        '#dev',
  '#programming',         '#tech',
  '#apple',               '#coding',
  '#xcode',               '#iosdesign',
  '#iosdevelopment',      '#appdeveloper',
  '#appdevelopment',      '#developerlife',
  '#programminglife',     '#swiftlang',
  '#ui',                  '#ux',
  '#appdesign',           '#uidesign',
  '#code',                '#coder',
  '#swiftdev',            '#swiftdeveloper',
  '#findswiftdevelopers', '#swiftuitutorials'
]*/

console.log(random);
// print a profile or hashtag - #swiftui
}
``` 

[I hope that help you!](https://www.linkedin.com/in/jusanmagno/) 


# Author 
## San Magno 
[github](https://github.com/jusansilva)
[LinkedIn](https://www.linkedin.com/in/jusanmagno/)
[Twiter](https://twitter.com/JusanMagno)