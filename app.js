const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const produtcs = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
          {
            code: "black",
            img: "./img/air.png",
          },
          {
            code: "darkblue",
            img: "./img/air2.png",
          },
        ],
      },
      {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "./img/jordan.png",
          },
          {
            code: "green",
            img: "./img/jordan2.png",
          },
        ],
      },
      {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
          {
            code: "lightgray",
            img: "./img/blazer.png",
          },
          {
            code: "green",
            img: "./img/blazer2.png",
          },
        ],
      },
      {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "./img/crater.png",
          },
          {
            code: "lightgray",
            img: "./img/crater2.png",
          },
        ],
      },
      {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
          {
            code: "gray",
            img: "./img/hippie.png",
          },
          {
            code: "black",
            img: "./img/hippie2.png",
          },
        ],
      },
    ];

    let choosenProduct = produtcs[0]

    const currentProductImg = document.querySelector(".productImg");
    const currentProductTiltle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", ()=>{
        //faz a mudança no carrosel principal
       wrapper.style.transform= `translateX(${-100 * index}vw)`
       //faz a mudança do carrosel de informação do produto
       choosenProduct = produtcs[index];

       //faz o texto mudar tbm
       currentProductTiltle.textContent = choosenProduct.title;

       //faz o preço mudar tbm
       currentProductPrice.textContent = '$' + choosenProduct.price;

        //faz a mudança da img principal
       currentProductImg.src = choosenProduct.colors[0].img;

       currentProductColors.forEach((color, index)=> {
        color.style.backgroundColor = choosenProduct.colors[index].code
       })
    })
});

currentProductColors.forEach((color,index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    })
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach(size => {
        size.style.backgroundColor= 'white';
        size.style.color= 'black';
        });
        size.style.backgroundColor= 'black';
        size.style.color= 'white';
    });
});