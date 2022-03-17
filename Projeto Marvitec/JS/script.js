// animação dos produtos ======================
const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}
animeScroll();

if (target.length) {
  window.addEventListener("scroll", () => {
    animeScroll();
  });
}
// =======================menus=======================
 


const target2 = document.querySelectorAll("[data-smenu]");
const animationClass2 = "animate";
let hamb= document.getElementById('hamburguer')
let btn= document.getElementById('btn-close')

hamb.addEventListener('click',()=>{

mostrarmenu()
})


btn.addEventListener('click',()=>{

fecharmenu()

})




const mostrarmenu=()=>{

  target2.forEach((element) => {
    if (hamb=true) {
      element.classList.add(animationClass);
    } 
  });
}

const fecharmenu=()=>{

  target2.forEach((element) => {
    if (btn=true) {
      element.classList.remove(animationClass);
    } 
})
}
  
