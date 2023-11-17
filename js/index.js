// ------->  SCROLL NAVBAR DEGRADE OU SOLID
let scrollCount = 0;

function handleScroll() {

  scrollCount++;

  if (scrollCount >= 10) {
    document.getElementById('menu').classList.add('black-bg');
  } else {
    document.getElementById('menu').classList.remove('black-bg');
    document.getElementById('menu').classList.add('gradient-bg');
  }

  if (window.scrollY === 0) {
    scrollCount = 0;
    handleScroll();
  }
}


window.addEventListener('scroll', handleScroll);

// ------->  FIM SCROLL NAVBAR DEGRADE OU SOLID


// ------->  CONTROLE MUTAR AUDIO

const meuVideo = document.querySelector("#meuVideo");
const botaoSom = document.querySelector("#botaoSom");

botaoSom.addEventListener("click", function () {
  if (meuVideo.muted) {
    meuVideo.muted = false;
    iconeSom.innerHTML = '<svg class="icone-color-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320Z"/></svg>';
  } else {
    meuVideo.muted = true;
    iconeSom.innerHTML = '<svg  class="icone-color-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m616-320-56-56 104-104-104-104 56-56 104 104 104-104 56 56-104 104 104 104-56 56-104-104-104 104Zm-496-40v-240h160l200-200v640L280-360H120Z"/></svg>';
  }
});

// ------->  FIM CONTROLE MUTAR AUDIO

// ------->  VIDEO REDUÇÃO DE TAMANHO


document.addEventListener("DOMContentLoaded", function () {
  var video = document.querySelector("#meuVideo");
  var titulo = document.querySelector(".logo-img-serie");
  var descricao = document.querySelector(".descText");
  var logoFly = document.querySelector(".serie-logo")
  var contentBanner = document.querySelector(".content-sec-navegation")

  video.addEventListener("timeupdate", function () {
    if (video.currentTime > 8) {
      titulo.style.width = "324px";
      titulo.style.height = "118px";
      titulo.style.transform = "translate(0, 125%)";
      logoFly.style.width = "324px";
      logoFly.style.transform = "scale(0.5)";
      logoFly.style.transform = "translate(-0%, 250%)";
      contentBanner.style.transform = "translate(0, 8%)";
      descricao.style.display = "none";
    }
  });
});


// ------->  FIM VIDEO REDUÇÃO DE TAMANHO

// ------->  CARD HOVER

document.addEventListener("DOMContentLoaded", function () {

  var hoverProfileIco = document.querySelector('#hoverCardProfile');
  var cardProfile = document.querySelector('#profile-card');
  var leaveHover = document.querySelector('#profile-card');
  var icoArrow = document.querySelector('.arrow-down-profile svg')

  hoverProfileIco.addEventListener('mouseleave', (event) => {
    onmouseleave = (event) => {

    };
  })

  // Quando o mouse entra no botão ou no card
  hoverProfileIco.addEventListener("mouseenter", function () {
    cardProfile.style.display = "block";
    icoArrow.classList.add("rotating-icon");
    icoArrow.style.transform = "rotate(180deg)";
    icoArrow.style.transition = "0.5s ease";
  });

  // Quando o mouse sai do botão, do card ou do ícone
  hoverProfileIco.addEventListener("mouseleave", function () {
    cardProfile.style.display = "none";
    icoArrow.classList.remove("rotating-icon");
    icoArrow.style.transform = "rotate(360deg)";
    icoArrow.style.transition = "0.5s ease";
  });

  leaveHover.addEventListener("mouseleave", function () {
    cardProfile.style.display = "none";
    icoArrow.classList.remove("rotating-icon");
    icoArrow.style.transform = "rotate(360deg)";
    icoArrow.style.transition = "0.5s ease";
  });
})
// ------->  FIM CARD HOVER

document.addEventListener("DOMContentLoaded", function () {
  var imagens = {
    imagemUm: {
      src: "../media/img/movies/amaldiçãodaresidenciahill.png",
      alt: "Imagem 1"
    },
    imagemDois: {
      src: "../media/img/movies/amoresquecido_novidade_top_10.png",
      alt: "Imagem 2"
    },
    imagemTres: {
      src: "../media/img/movies/aniquilação.png",
      alt: "Imagem 4"
    },
    imagemQuatro: {
      src: "../media/img/movies/aquedadacasadeusher_novidade.png",
      alt: "Imagem 5"
    },
    imagemCinco: {
      src: "../media/img/movies/awake.png",
      alt: "Imagem 6"
    },
    imagemSeis: {
      src: "../media/img/movies/bailarina_top_10.png",
      alt: "Imagem 7"
    },
    imagemSete: {
      src: "../media/img/movies/belavingança_novidade.png",
      alt: "Imagem 8"
    }
  };

  console.log(imagens.imagemUm.src);

  var carrouselList = document.querySelector("#carrouselList");


  for (var key in imagens) {
    if (imagens.hasOwnProperty(key)) {
      var li = document.createElement("li");
      var divCarrousel = document.createElement("div");
      divCarrousel.className = "cardCarrousel";
      var imagemElement = document.createElement("img");
      imagemElement.src = imagens[key].src;
      imagemElement.alt = imagens[key].alt;


      imagemElement.style.maxWidth = "100%";
      imagemElement.style.maxHeight = "100%";

      divCarrousel.appendChild(imagemElement);
      li.appendChild(divCarrousel);
      carrouselList.appendChild(li);
    }
  }
});


// Carrousel ==>

// var sliders = document.querySelector('.carrouselList')
// var scrollClick

// var scrollSlider = 0;

// function sliderLeft() {

//   sliders.scrollTo({
//     top: 0,
//     left: (scrollSlider -= scrollClick),
//     behavior: 'smooth'
//   }):

//   if (scrollSlider < 0) {
//     scrollSlider = 0;
//   }

// }

// function sliderRight() {


//   if (scrollSlider <= sliders.scrollWidth - sliders.clientWidth) {

//     sliders.scrollTo({
//       top: 0,
//       left: (scrollSlider += scrollClick),
//       behavior: 'smooth'
//     }):
//   }
//   if (scrollSlider < 0) {
//     scrollSlider = 0;
//   }

// }
