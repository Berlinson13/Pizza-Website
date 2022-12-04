"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuFirst = function MenuFirst(classname, url, caption, text, price, order) {
  _classCallCheck(this, MenuFirst);

  this.className = classname;
  this.url = url;
  this.caption = caption;
  this.tex = text;
  this.price = price;
  this.order = order;
  var div = document.querySelector("#divTemplate");
  var p = document.createElement("div");
  p.className = classname; //console.log(p)

  div.append(p);
  var template = document.querySelector("#firsTemplate").innerHTML;
  var rendered = Mustache.render(template, {
    caption: caption,
    text: text,
    price: price,
    order: order
  });
  document.getElementsByClassName("".concat(classname))[0].innerHTML = rendered;
  var div2 = document.getElementsByClassName("".concat(classname))[0];
  var p2 = document.createElement("img");
  p2.className = classname + "p"; //console.log(p)

  div2.append(p2);
  document.getElementsByClassName("".concat(classname))[0].lastChild.src = url;
};

var MenuSecond = function MenuSecond(classname, url, caption, text, price, order) {
  _classCallCheck(this, MenuSecond);

  this.className = classname;
  this.url = url;
  this.caption = caption;
  this.tex = text;
  this.price = price;
  this.order = order;
  var div = document.querySelector("#divTemplate");
  var p = document.createElement("div");
  p.className = classname; //console.log(p)

  div.append(p);
  var div2 = document.getElementsByClassName("".concat(classname))[0];
  var p2 = document.createElement("img");
  p2.className = classname + "p"; //console.log(p)

  div2.append(p2);
  document.getElementsByClassName("".concat(classname))[0].lastChild.src = url;
  var template = document.querySelector("#secondTemplate").innerHTML;
  var rendered = Mustache.render(template, {
    caption: caption,
    text: text,
    price: price,
    order: order
  });
  document.getElementsByClassName("".concat(classname))[0].innerHTML += rendered;
};

new MenuFirst("1", "./image/image_3.jpg", "American Pizza", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order");
new MenuSecond("2", "./image/pizza-4.jpg", "Italian Pizza", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order");
new MenuFirst("3", "./image/pizza-2.jpg", "Tomatoe Pizza", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order");
new MenuSecond("4", "./image/pizza-5.jpg", "Greek Pizza", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order");
new MenuFirst("5", "./image/pizza-3.jpg", "Margherita", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order");
new MenuSecond("6", "./image/pizza-6.jpg", "Caucasian Pizza", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order");