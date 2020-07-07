/*
Solution of assignment 4:
Expected output:
Hello Avadhi
Good Bye sonu
Good Bye Jen
Good Bye Jason
Hello Parul
Hello Farhan
Hello Guy
Hello Paula
Hello Lara
Good Bye Jim
*/

(function() {
    var names = ["Avadhi", "sonu", "Jen", "Jason", "Parul", "Fahan", "Guy", "Paula", "Lara", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter == 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();