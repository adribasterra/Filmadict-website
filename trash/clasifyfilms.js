var good = getElementById('good');
var broken = getElementById('hb');
var company = getElementById('incomp');
var low = getElementById('lowm');
var love = getElementById('inlove');

var comedy = getElementById('comedy');
var terror = getElementById('terror');
var thriller = getElementById('thriller');
var others = getElementById('others');

var real = getElementById('real');
var inspirational = getElementById('inspirat');
var mindf = getElementById('thriller');
var donutknow = getElementById('donutknow');

var favs = getElementById('favs');

$(document).ready(function(){
  alert("works!");
  good.onclick(goodMood());
});

good.onclick = goodMood;

function goodMood(){
  alert("works!");
}
