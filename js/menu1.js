class MenuFirst { 
    constructor(classname,url,caption, text, price, order) {
        this.className = classname;
        this.url = url;
        this.caption = caption;
        this.tex = text;
        this.price = price;
        this.order = order;
        let div = document.querySelector("#divTemplate");
        let p = document.createElement("div");
        p.className = classname;
        //console.log(p)
        div.append(p);


        let template = document.querySelector("#firsTemplate").innerHTML;
        
        let rendered = Mustache.render(template, {caption: caption, text: text, price: price, order: order });
        
       document.getElementsByClassName(`${classname}`)[0].innerHTML= rendered;
        
        let div2 = document.getElementsByClassName(`${classname}`)[0];
        let p2 = document.createElement("img");
        p2.className = classname+"p";
        //console.log(p)
        div2.append(p2);
       document.getElementsByClassName(`${classname}`)[0].lastChild.src=url;
        
     }
}
class MenuSecond { 
    constructor(classname,url,caption, text, price, order) {
        this.className = classname;
        this.url = url;
        this.caption = caption;
        this.tex = text;
        this.price = price;
        this.order = order;
        let div = document.querySelector("#divTemplate");
        let p = document.createElement("div");
        p.className = classname;
        //console.log(p)
        div.append(p);

 let div2 = document.getElementsByClassName(`${classname}`)[0];
        let p2 = document.createElement("img");
        p2.className = classname+"p";
        //console.log(p)
        div2.append(p2);
        document.getElementsByClassName(`${classname}`)[0].lastChild.src = url;
        
        let template = document.querySelector("#secondTemplate").innerHTML;
        
        let rendered = Mustache.render(template, {caption: caption, text: text, price: price, order: order });
        
       document.getElementsByClassName(`${classname}`)[0].innerHTML+= rendered;
        
       
        
     }
}
new MenuFirst(
    "1","./image/image_3.jpg", "American Pizza", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order"
);
new MenuSecond(
    "2","./image/pizza-4.jpg","Italian Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
)
new MenuFirst(
    "3","./image/pizza-2.jpg","Tomatoe Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
)
new MenuSecond(
    "4","./image/pizza-5.jpg","Greek Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
)
new MenuFirst(
    "5","./image/pizza-3.jpg", "Margherita", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia", "2.90", "Order"
);
new MenuSecond(
    "6","./image/pizza-6.jpg","Caucasian Pizza","Far far away, behind the word mountains, far from the countries Vokalia and Consonantia","2.90","Order"
)
