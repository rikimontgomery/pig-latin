// Business Logic
function translator(userSentence) {
  var words = userSentence.toLowerCase().split(" ");

  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  // alert(consonants);
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; words.length > i; i +=1) {
    var firstLetter = words[i].charAt(0);
    var secondLetter = words[i].charAt(1);
    var thirdLetter = words[i].charAt(2);
    alert(firstLetter);

    if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
      words[i] = words[i] + "way"
      alert(words[i]);
    } else if (firstLetter !== 'a' || firstLetter !== 'e' || firstLetter !== 'i' || firstLetter !== 'o' || firstLetter !== 'u') {
      words[i] = words[i].slice(1) + firstLetter + "ay";
    }
  }
  return words.join(" ");
};


// User Interface
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var userSentence = $("input.userInput").val();
    var result = translator(userSentence);

    $("#result").text(result);
    $("#result").show();
  });
});





// function translator(sentence) {

//   // var word = words[0];
// //   // var firstLetter = words.charAt(0);
// //
// // // for (var i = 0; words.length > i; i +=1) {
// // //   if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
// // //     word[i] + "way";
// // //   }
//   // }
// }

  // alert(letter);
// var letter = userSentence[0];


// for (ii = 0; words.length > ii; ii +=1) {
//   if (firstLetter === consonants) {
//     words[i] = words[i].slice(vowels) + words[i] + "ay";
//   }
// }
