let left  = document.querySelector('.left');

left.addEventListener('click', function() {
 console.log('left')
 let ball  = document.querySelector('#ball');
 let square = ball.closest('.square')
 console.log(square.id)
 ball.remove()
 let next = document.querySelector('.Square4' ) 
 console.log(next)
 next.appendChild( `<div id="ball">0</div> `)  
 
 let nextNumber = parseInt(squire.id)-1;


 console.log( `#${nextNumber}`)
 });

let right  = document.querySelector('.right');

right.addEventListener('click', function() {
 console.log('right')
});
 


let button = document.querySelector('.button');

 button.addEventListener('click', function() {
console.log('button')
 });
 let top1  = document.querySelector('.top');

 top1.addEventListener('click', function() {
  console.log('top1')
 });

 






