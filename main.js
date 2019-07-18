$(document).ready(function(){
	//Привязка на клик по мяч8
   $('.ball').on('click',function(){

//Нормальный рандомайзер
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
//Получение изначальных данных
let left = $('.ball').css('margin-left');
let top = $('.ball').css('margin-top');
//Задание новой Y-координаты
let changeTop = randomInteger(0,50);

//Получение ширины экрана для корректного перепинывания из стороны в сторону
let width = parseInt($('body').css('width'))*0.5;

//Проверка координаты мяча, чтобы знать куда пинать
if(parseInt(left) < width){
	let changeX = randomInteger(50,90);
    //Перемещение мяча
	$('.ball').animate({
	'margin-top':changeTop + '%',
	'margin-left': changeX + "%"
    },1500,function(){
    	//Проверка координат для засчитывания голов
    	if(changeX < 14 && changeTop > 18 && changeTop < 34){
           $('.left').append('<li class = "left_goal">ГОЛ</li>');       
        }
        if(changeX > 80  && changeTop > 18 && changeTop < 34){
           $('.right').append('<li class = "right_goal">ГОЛ</li>');       
      }
  });
//Пинание в другую сторону
}else{
	let changeX = randomInteger(0,50);
    //Перемещение мяча
	$('.ball').animate({
	'margin-top':changeTop + '%',
	'margin-left': changeX + "%"
     },1500,function(){
     	//Проверка координат для засчитывания голов
         if(changeX < 14 && changeTop > 18 && changeTop < 34){
             $('.left').append('<li class = "left_goal">ГОЛ</li>');
	     }
	     if(changeX > 80 && changeTop > 18 && changeTop < 34){
             $('.right').append('<li class = "right_goal">ГОЛ</li>');
	   }
   });	 
}

   });
});