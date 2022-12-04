"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SecondMenu = function SecondMenu(classname, url, nameT, priceT, textT) {
  _classCallCheck(this, SecondMenu);

  this.className = classname;
  this.url = url;
  this.nameT = nameT;
  this.textT = textT;
  this.priceT = priceT;
  var div = document.querySelector("#seconDivTemplate");
  var p = document.createElement("div");
  p.className = classname; //console.log(p)

  div.append(p);
  var template = document.querySelector("#menuSecondTamplate").innerHTML;
  var rendered = Mustache.render(template, {
    nameT: nameT,
    textT: textT,
    priceT: priceT
  });
  document.getElementsByClassName("".concat(classname))[0].innerHTML = rendered;
  var div2 = document.getElementsByClassName("".concat(classname))[0];
  var p2 = document.createElement("img");
  p2.className = classname + "p";
  div2.prepend(p2);
  document.getElementsByClassName("".concat(classname))[0].firstChild.src = url;
};

new SecondMenu("10", "./image/pizza-1.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia");
new SecondMenu("11", "./image/pizza-2.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia");
new SecondMenu("12", "./image/pizza-3.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia");
new SecondMenu("13", "./image/pizza-4.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia");
new SecondMenu("14", "./image/pizza-5.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia");
new SecondMenu("15", "./image/pizza-6.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia");
new SecondMenu("16", "./image/pizza-7.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia");
new SecondMenu("17", "./image/pizza-8.jpg", "American Pizza", "2.90", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"); // new MenuSecond(
//     "2","./image/pizza-4.jpg","Italian Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
// )
// new MenuFirst(
//     "3","./image/pizza-2.jpg","Tomatoe Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
// )
// new MenuSecond(
//     "4","./image/pizza-5.jpg","Greek Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
// )
// new MenuFirst(
//     "5","./image/pizza-3.jpg", "Margherita", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order"
// );
// new MenuSecond(
//     "6","./image/pizza-6.jpg","Caucasian Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
// )