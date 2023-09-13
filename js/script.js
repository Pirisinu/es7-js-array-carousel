/*
SVOLGIMENTO 

  1. Richiamare i vari elementi
  2. Creo un arrey con le immagini da inserire nell'html
  3. Effettuo prove con l'hide
  4. Creo un ciclo che mi stampi le immagini in img-box
  5. Raggruppo gli elementi(getElementsByClassName('')) per assegnare classi
  6. Creo Un eventListner per il pulsante superiore collegato ai bottoni per inserire un ciclo 
  7. creo un ciclo che mi va a far ruotare le img grazie al(remove/add) class:hide.

*/
//1.Richiamare i vari elementi
//elementi
const boxImg = document.querySelector('.box-img');
const btnTop = document.querySelector('.top');
const btnDown = document.querySelector('.down');

//Serve per dichiarare l'inizio
let counter = 0;


//2.Creare un arrey contenete le immagini
//Arrey
const listImg = [
  '<img src="img/01.webp" class="my_img">' +
  '<img src="img/02.webp" class="my_img hide">' +
  '<img src="img/03.webp" class="my_img hide">' +
  '<img src="img/04.webp" class="my_img hide">' +
  '<img src="img/05.webp" class="my_img hide">' 
]
//4.
for (let i = 0; i < listImg.length; i++) {
  const img = listImg[i];
  boxImg.innerHTML += img;
}

//5.
const imgCollection = document.getElementsByClassName('my_img');
console.log(imgCollection);

btnTop.addEventListener('click', function (){

  imgCollection[counter].classList.add('hide');

  counter++;

  imgCollection[counter].classList.remove('hide');

});

btnTop.addEventListener('click', function (){

  imgCollection[counter].classList.add('hide');

  counter--;

  imgCollection[counter].classList.remove('hide');

});



