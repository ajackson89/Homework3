var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';
var copyText = document.getElementById("copy");
var charNum = document.getElementById("charNum");
var submit = document.getElementById("gen");
var yourPw = document.getElementById("yourPw");

submit.addEventListener("click", function(e) {
  var characters = char;
  (num) ? characters += num: '';
  (sym) ? characters += sym: '';
  yourPw.value = password(charNum.value, characters);
});

function password(l, characters) {
  var pwd = '';
  for (var i = 0; i < l; i++) {
    pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pwd;
}

function copy() {
copyText.select(yourPw);
copyText.setSelectionRange(0, 128)
document.execCommand("copy");
}