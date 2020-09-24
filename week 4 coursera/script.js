(function (window) {

// Hello Yaakov
// Good Bye Jeyte
// Good Bye Mo
// Good Bye Usame
// Hello Abdirahman
// Hello Abdukadir
// Hello Sabirin
// Hello Ahmed
// Hello Nasro
// Hello Gasle
// Good Bye Tasniim

var names = ["Yaakov", "Jeyte", "Mo", "Usame", "Abdirahman", "Abdukadir", "Haajiro", "Nasro", "Gasle", "Tasniim"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);