//  var firstName = prompt('Ismingizni kiriting : ', 'Bekmirza');
//  var secondName = prompt('Familiyangizni kiriting : ', 'Yoqubov');
//  var studyName = prompt('O"quv muassasangizni kiriting : ', 'TATU');
//  var faculty = prompt('Fakultetingizni kiriting : ', 'Axborot xavfsizligi');
//  var age = prompt('Yoshingizni kiriting : ', '19');
//  var addres = prompt('Manzilingizni kiriting : ', 'Namangan');
//  var profession = prompt('Kasbingizni kiriting : ', 'Web Developer');
//  var hobby = prompt('Sevimli mashg"ulotingizni kiriting : ', 'Footbal');
//  var youYear = prompt('Yilingizni kiriting : ', '2002');
//  var date = prompt('Qaysi sanada tug"ilgansiz : ', '9-sentabr');


//  console.log(
//      'Ism : ' +
//      firstName +
//      '\nFamiliyangiz : ' +
//      secondName +
//      "\nO'quv muassasa : " +
//      studyName +
//      "\nFakultet : " +
//      faculty +
//      "\nYoshingiz : " +
//      age +
//      "\nManzilingiz : " +
//      addres +
//      "\nKasbingiz : " +
//      profession +
//      "\nSevimli mashg'ulotingiz : " +
//      hobby +
//      "\nYilingiz : " +
//      youYear +
//      "\nTug'ilgan sanangiz : " +
//      date 
//  )

// var a = prompt('Dastlabki sonni kiriting :');
// var b = prompt('Keyingi sonni kiriting :');
// // var c = prompt('Keyingi sonni kiriting :');

// var c = a + b ;

// if(c = a + b){
//     console.log('Ha teng')
// }
// else{
//     console.log('yoq teng emas')
// }
// **************************************************Alisher********************************


 /* var elHeader = document.querySelector('.heading_white')

alert('Sayohat uchun xarajatlar :  Borish-kelish samolyot bileti - $500  , - Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250 , - Muzey va ko’ngilochar joylar uchun - 120 yevro')
alert('Hozirgi pul kurslari : $1 = 9433.34 so’m , 1 yevro = 10354.03 so’m')
var a = prompt('O"zingizdagi mavjud mablag"ni kiriting :');

if(a >= 750*9433.34 + 120*10354.03){
    console.log(elHeader.textContent = 'Oq yo"l Alisher');
} else{ 
    console.log(elHeader.textContent = 'Alisher, ozgina sabr qilish kerak bo’lar ekan.');
}  */

var elForm = document.querySelector('.form');
var elNumberInput = elForm.querySelector('.form-input');
var elResultBox = elForm.querySelector('.result-box');

function generateNumber(number) {
	if (number % 3  === 0 && number % 5 !== 0) {
		return 'fizz';
	} else if (number % 5  === 0 && number % 3 !== 0) {
		return 'buzz';
	} else if (number % 3  === 0 && number % 5  === 0) {
		return 'fizzbuzz';
	}  else {
		return 'no number';
	}
}

function submitElForm(evt) {
	evt.preventDefault();
	var numberInput = Number(elNumberInput.value.trim());
	elResultBox.textContent = generateNumber(numberInput);
}

elForm.addEventListener('submit', submitElForm);
