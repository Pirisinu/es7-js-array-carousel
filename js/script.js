/*
SVOLGIMENTO 

  1. Richiamare i vari elementi
  2. Creo un arrey con le immagini da inserire nell'html
  3. Effettuo prove con l'hide
  4. Creo un ciclo che mi stampi le immagini in img-box
  5. Raggruppo gli elementi(getElementsByClassName('')) per assegnare classi
  6. Creo Un eventListner per il pulsante superiore collegato ai bottoni per inserire un ciclo 
  7. creo un ciclo che mi va a far ruotare le img grazie al(remove/add) class:hide.
  8. Nascondo il bottone inferiore
  9. Creo un IF che mi faccia sparire il bottone superiore (data la lunghezza del container immagini)
  10. vado a creare un altro if che gestisca il bottone inferiore
  
*/
//1.Richiamare i vari elementi
//elementi
const boxImg = document.querySelector('.box-img');


//Serve per dichiarare l'inizio
let counter = 0;


//2.Creare un arrey contenete le immagini
//Arrey
const listImg = [
  '<img src="img/01.webp" class="my_img">',
  '<img src="img/02.webp" class="my_img hide">',
  '<img src="img/03.webp" class="my_img hide">',
  '<img src="img/04.webp" class="my_img hide">',
  '<img src="img/05.webp" class="my_img hide">' 
]
//4.
for (let i = 0; i < listImg.length; i++) {
  const img = listImg[i];
  boxImg.innerHTML += img;
}

const btnTop = document.querySelector('.top');
const btnDown = document.querySelector('.down');
btnDown.classList.add('hide');
//5.
const imgCollection = document.getElementsByClassName('my_img');
console.log(imgCollection);

btnTop.addEventListener('click', function (){

  imgCollection[counter].classList.add('hide');
  btnDown.classList.remove('hide');

  counter++;
  
  imgCollection[counter].classList.remove('hide');

  if(counter == imgCollection.length -1) {
    btnTop.classList.add('hide');
  }
});

btnDown.addEventListener('click', function (){

  imgCollection[counter].classList.add('hide');

  counter--;

  imgCollection[counter].classList.remove('hide');

  btnTop.classList.remove('hide');

  if(counter == 0) btnDown.classList.add('hide');
  
});



