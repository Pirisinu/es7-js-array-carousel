/*
SVOLGIMENTO 

1.Richiamare i vari elementi
2.Creare un arrey[] contenete le immagini
3.
4.
5.
6.
7.
8.

*/
//1.Richiamare i vari elementi
//elementi
const boxImg = document.querySelector('.box-img');
const btnTop = document.querySelector('.top');
const btnDown = document.querySelector('.down');



//2.Creare un arrey contenete le immagini
//Arrey
const listImg = [
  '<img src="img/01.webp" class="hide">' +
  '<img src="img/02.webp" class="hide">' +
  '<img src="img/03.webp" class="hide">' +
  '<img src="img/04.webp" class="hide">' +
  '<img src="img/05.webp" class="hide">' 
]



boxImg.innerHTML += listImg;


