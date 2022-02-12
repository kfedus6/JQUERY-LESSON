/*
jQuery(document).ready(() => {
   console.log("1")
})
*/
/*
$(() => {
   console.log(3)
})
*/
/*
$(document).ready(() => {
   $('.text').css('color', 'red');
})
document.addEventListener('DOMContentLoaded', () => {
   document.querySelector('.text').style.color = 'red'
})
*/
/*
$(document).ready(() => {
   $('*').css('background', 'black');
   $('*').css('color', 'white');
})
*/
//$("tr:even").css('background', 'red')
/*
$('.test li:odd').css('background', 'green'); // odd не чотне
$('.test li:even').css('background', 'red'); // even четне
*/
/*
$('.test li:eq(1)').css('color', 'red') // eq искать по масиву индексу
 */
/*
$('li:first').css('background', "green");
$('li:last').css('background', "green");
*/
//$('.test li:odd:last').css('color', 'green')

//DZ
/*
$('#age-table').css('background', 'pink');
$('#age-table label').css('color', 'red');
$('#age-table td:first').css('font-size', '40px');

$('[name="search"]').css('background', 'orange');
$('[name="search"]').css('font-size', '30px');
$('[name="search"] input:first').css('background', 'blue');
$('[name="search"] input:last').css('background', 'yellow');
 */



//$('ul li:gt(3)').css('background', 'red');
//$('ul li:lt(3)').css('background', 'green');
//$('ul li:gt(4):even').css('background', 'red');
//$('ul li:lt(5):odd').css('background', 'yellow');

//$('*:header').css('color', 'green')
//$('*:not()').css('color', 'red')

//$('div:contains("")').css('color', 'red')

/*
$(document).ready(() => {
   let checkd = true;
   $('button').click(() => {
      console.log('click')
      if (checkd == true) {
         $('#test').hide(2000)
         checkd = false;
      } else if (checkd == false) {
         $('#test').show(2000);
         checkd = true;
      }
   })
})
*/

/*
const arr = $('tabl').filter("tr")
arr.css('color', 'red');
*/

/*
const lis = $('ul li');
lis.eq(4).css('color', 'blue')
lis.first().css('color', 'red')
lis.last().css('color', 'green')
*

/*
for (let i = 0; i < lis.length; i++) {
   console.log(lis[i])
}
*/
/*
lis.each((idx, item) => {
   console.log(item)
})
*/

/*
$('button').click(() => {
   $('ul li:even').hide();
})
*/
/*
const lis = $('ul li');
const li = lis.last()
idxLi = lis.index(li)
console.log(idxLi) */
/*
const lis = $('ul li');
const lis_two = $('.test')
lis.each((idx, item) => {
   lis_two.each((idx_two, item_two) => {
      if (item == item_two) {
         console.log(idx)
      }
   })
})
*/
//DZ
/*
const text = $('.text');
text.css('margin-bottom', '30px');
text.css('cursor', 'pointer');

let prev;
text.click((e) => {
   if (prev != undefined) {
      prev.style.border = '';
   }
   e.target.style.border = 'solid 2px red';
   prev = e.target;
   alert('Words' + ':' + e.target.textContent.length)
});
 */

/*
const text = $('.text');
text.first().hide(3000, () => {
   console.log('hide')
}).show(2000, () => {
   console.log('show')
})
*/

/*
$('h2').hide();
let time = 2000;
$('.text').each((idx, item) => {
   $('.text').eq(idx).hide(time);
   time += 1000
})

$('h2').show(2000);
*/
/*
$('*:header:not(h2)').css('color', 'red')
$('*:not(form)').css('background', 'black')
*//*
const lis = $('ul li').add('<li>7</li>')
console.log(lis)
$('ul').append(lis); */

/*
let res = $('li').not(function () {
   if ($(this).text() != '3') {
      return true
   } else {
      return false
   }
})

res.hide(3000)
*/

//DZ
/*
let collection;
let lastValue = 0;

$('button').click(() => {
   let inp = $('input:first').val();

   if (inp < lastValue) {

   }

   let res = $('li').not(function () {
      if ($(this).text() > inp) {
         return true
      } else {
         return false
      }
   })

   res.hide(2000);
   collection += res
   lastValue = inp
})
*/
//DZ

/*
$('.add').click(() => {
   let text = $('#text').val();
   let newText = $('<div></div>').text(text);
   newText.css('display', 'none')
   $('body').append(newText);
   newText.show(2000)
})

$('.del').click(() => {
   console.log('1')
   $('div').each(function (index, item) {
      if ($(this).text() == $('#del').val()) {
         $(this).hide(2000);
      }
   })
})
*/

//$('ul li').filter(':odd').css('color', 'red')
/*
$('ul li').filter((index, item) => {
   if (index > 3) {
      return true;
   }
}).css('color', 'red')
*/

//$('ul li').filter(idx => idx > 3).css('color', 'red')

//$('*[href$="st"]').css('background', 'red')

/*
$('button').click(() => {
   let text = $('input').val();
   if ($('*[src$="jpg"]').attr('src').includes(text)) {
      $('*[src$="jpg"]').css('border', 'solid 2px red');
   } else if ($('*[src$="jpeg"]').attr('src').includes(text)) {
      $('*[src$="jpeg"]').css('border', 'solid 2px red');
   } else {
      alert('error');
   }
})
*/

//$('ul li').slice(2, 4).css('color', 'red')
//$('ul li').has('ul').css('color', 'red');
/*
const newLi = $('ul li').map(function (index, item) {
   if (item.innerHTML > 2) {
      return $(this)
   }
})

newLi.each((index, item) => {
   item.css('color', 'red');
})
*/
//DZ
/*
$('.show-board').click(() => {
   for (let i = 0; i < 8; i++) {
      for (let k = 0; k < 8; k++) {
         if ((i % 2 == 0 && k % 2 == 0) || (i % 2 != 0 && k % 2 != 0)) {
            $('#board').append($('<div class="block__black"></div>'));
         }
         else {
            $('#board').append($('<div class="block__brown"></div>'));
         }
      }
   }
})

$('.checkers').click(() => {
   $('.block__brown').each(function (index, item) {
      if (index < 12) {
         $(this).append('<img class="shashka" src="img/shashka_brown2.jpg"></img>');
      }
      if (index > 19) {
         $(this).append('<img class="shashka" src="img/shashka.png"></img>');
      }
   })
})
*/

/*
   $('.block__black').each(function (index, item) {
      $(this).append('<img class="block" src="img/black.jpg"></img>')
   })


   $('.block__brown').each(function (index, item) {
      $(this).append('<img class="block" src="img/brown_block.jpg"></img>')
   })
})

$('.checkers').click(() => {
   $('.block__brown').each(function (index, item) {
      if (index <= 12) {
         $(this).append('<img class="shashka" src="img/shashka_brown2.jpg"></img>');
      }
      if (index > 19) {
         $(this).append('<img class="shashka" src="img/shashka.png"></img>');
      }
   })
})
 */
/* $('.checkers').click(() => {
   $('.block__brown').slice(0, 13).append('<img class="shashka" src="img/shashka.png"></img>')
})
 */

/*
let ul = $('ul:first li').find('.menu')
ul.css('color', 'red')
*/

/*
let elem = $('ul.menu')[0]
console.log(elem)

let ul = $('ul:first li').find(elem)
ul.css('color', 'red')
*/


//$('a').first().prop('href', "#qweqweq")

/*
links = ['#1', "#2", '#3', '#4']

$('a').each(function (idx) {
   $(this).prop('href', links[idx]);
})

let a = $('a').first()
a.removeProp('href')
*/

/*
$('a').first().attr('href', 'sdsdv')
$('a').first().removeAttr('href')
*/

//$('.name').data('link', 'qweqwe')
//$('.name').removeData('link')
//console.log($('.name').data('link'))

/*
$('.main').css({ "background": "grey", "cursor": "pointer", "width": "150px" })
$('.main h1').css('margin-bottom', '20px')

$('.main').animate({
   "border-radius": "100%", "font-size": "28px",
}, 1000)

$('.main div').animate({ 'margin-left': "25px" })
*/
/*
$('.main').click(() => {
  $('.main').css('color', (idx, value) => {
     if (value == 'rgb(255, 0, 0)') {
        return "green"
     } else {
        return 'red'
     }
  })
})
*/
/*
$("div:first").addClass('test')
$('div:first').hide(3000)
setTimeout(() => $("div:first").removeClass('test'), 3000)
$('div:first').show(3000)
*/

/*
if ($('div:first').hasClass('test')) {
   $("div:first").removeClass('test')
} else {
   $("div:first").addClass('test')
}
*/

/*
$('button:first').click(() => {
   $("div:first").toggleClass('test')
})
*/
/*
let id_prev_ul;
$('.main div').click(function () {
   $('.selected').removeClass('selected');
   $(this).addClass('selected');
   if ($(this).text() == 'города') {
      $('#city').show(1500)
      $('#city').removeClass('display__none');
      $('#city').animate({ 'margin-left': '40px' }, 2000)
      id_prev_ul = '#city'
   } else if ($(this).text() == 'страны') {
      $(id_prev_ul).animate({ 'margin-rigth': '40px' }, 1000);
      $(id_prev_ul).hide(1000);
      $(id_prev_ul).addClass('display__none');
      $('#country').show(1500);
      $('#country').removeClass('display__none');
      $('#country').animate({ 'margin-left': '40px' }, 2000);
      id_prev_ul = '#country';
   } else if ($(this).text() == 'районы') {
      $(id_prev_ul).animate({ 'margin-rigth': '40px' }, 1000);
      $(id_prev_ul).hide(1000);
      $(id_prev_ul).addClass('display__none');
      $('#areas').show(1500);
      $('#areas').removeClass('display__none');
      $('#areas').animate({ 'margin-left': '40px' }, 2000);
      id_prev_ul = '#areas';
   }
})
*/

//DZ
/*
$('img').click(function () {
   $('.menu').slideToggle(1000, function () {
      if ($(this).css('display') === 'none') {
         $(this).removeAttr('style')
      }
   });
})
 */

/*
const test = $('.test').html()
$('.test').html(test + '<h1>hello</h1>')
console.log($('.test').html());
*/

//$('.test').html((idx, html) => html + '<h1>hello</h1>')


/*
$('.test div:first').text((idx, text) => text + 'world');
$('.test div:last').text((idx, text) => text + 'hello');
console.log($('.test').text())
*/

/*
$('input').val("Hello")
console.log($('input').val())
*/

/*
$('body').prepend("<h1>Start</h1>")
$('body').append("<h1>End</h1>")
$("<h1>prepandTo</h1>").prependTo('ol')
*/
//DZ
/*
$('.send').click(function () {
   let email = $('.email').val();
   let login = $('.login').val();
   let parol = $('.password').val();
   if (email == '') {
      $('.email').css('border', '2px solid red');
   }
   if (parol == '') {
      $('.password').css('border', '2px solid red');
   }
   if (login == '') {
      $('.login').val('user' + parseInt(Math.random() * (1000 - 1 + 1) + 1));
   }
   if (email == '' || parol == '') {
      return false;
   } else if ($('li').hasClass('decoration') == true) {
      $('.decoration').append(`<li>${email}, ${parol}, ${login} <button class="del">delete</button></li>`);
      $('.email').css('border', '2px solid grey').val('');
      $('.login').val('');
      $('.password').css('border', '2px solid grey').val('');
   } else {
      $('ol').append(`<li>${email}, ${parol}, ${login} <button class="del">delete</button></li>`);
      $('.email').css('border', '2px solid grey').val('');
      $('.login').val('');
      $('.password').css('border', '2px solid grey').val('');

   }

   $('li').each(function () {
      $(this).click(() => {
         $('.decoration').removeClass('decoration')
         $(this).addClass('decoration');
      })
   })

   $('.del').click(function () {
      $(this).parent().remove();
   })

})
*/


//before,after,insertBefore,insterAfter

/*
$('#d1').before('<li>before</li>')
$('#d2').after('<li>after</li>')
$('<li>test</li>').insertBefore('#d1');
*/

/*
async function hello() {

   let promise = new Promise((text, reject) => {
      setTimeout(() => text("Готово !"), 1000)
   })

   let res = await promise
   alert(res)
}
hello()
*/


//let promise = fetch(url,[optios])

/*
const apiKey = 'e4Uct2oRTLf0COnSvSGWvWtRd4vxrvfuGZfw5zs5'

let response = await fetch(`https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1`)

if (response.ok) {
   let json = await response.json()
   console.log(json)
}
*/

/*
$('.next img').click(function () {
   let index = $('.img.one').index();
   let nextImgIndex = index + 1;
   let nextImg = $('.img').eq(nextImgIndex);
   $('.img.one').hide(500);
   $('.img.one').removeClass('one');
   if (nextImgIndex == ($('.img:last').index() + 1)) {
      $('.img').eq(0).show(500);
      $('.img').eq(0).addClass('one');
   } else {
      nextImg.show(500);
      nextImg.addClass('one')
   }
})

$('.prev img').click(function () {
   let index = $('.img.one').index();
   let prevImgIndex = index - 1;
   let prevImg = $('.img').eq(prevImgIndex);
   $('.img.one').hide(500);
   $('.img.one').removeClass('one');

   prevImg.show(500);
   prevImg.addClass('one')
})
*/
//Carousel keydown
let width = 310;
let count = 3;
let position = 0;

$(document).bind('keydown', (e) => {
   if (e.which == 39) {
      position -= width * count;
      position = Math.max(position, -width * ($('.img').length - count));
      $('.go').animate({ 'margin-left': `${position}px` }, 700)
   }
   if (e.which == 37) {
      position += width * count;
      position = Math.min(position, 0)
      $('.go').animate({ 'margin-left': `${position}px` }, 700)
   }
})

$('.prev img').click(function () {
   position += width * count;
   position = Math.min(position, 0)
   $('.go').animate({ 'margin-left': `${position}px` }, 700)
})

$('.next img').click(function () {
   position -= width * count;
   position = Math.max(position, -width * ($('.img').length - count));
   $('.go').animate({ 'margin-left': `${position}px` }, 700)
})

/*
fetch(`https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&page=2`)
   .then(response => response.json())
   .then(data => {
      console.log(data)
   })

let id_car = 32026247;
fetch(`https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${id_car}`)
   .then(response => response.json())
   .then(data => {
      $('.block').append(`<img src="${data.photoData.seoLinkB}">`)
      $('.block').append(`<h1>NAME: ${data.markName}</h1>`)
      $('.block').append(`<h3>PRICE: ${data.USD}$</h3>`)
      console.log(data)
   })
*/

//https://developers.ria.com/auto/categories/1/marks?api_key=YOUR_API_KEY (marks)
//https://developers.ria.com/auto/search?api_key=YOUR_API_KEY&category_id=1&marka_id=MARK_ID (объявления)
//https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${id_car} (Информация об объявлении)

$('.search').click(() => {
   const nameCar = $('.marka').val();

   async function getMarkIds(apiKey) {
      const response = await fetch(`https://developers.ria.com/auto/categories/1/marks?api_key=${apiKey}`);
      const data = await response.json();
      return data;
   }

   async function getMarkByName(api_key, name) {
      const mark_ids = await getMarkIds(apiKey);
      const object_car = mark_ids.find(object => object.name == name);
      return object_car;
   }

   async function searchAds(api_key) {
      const car = await getMarkByName(apiKey, nameCar);
      const response = await fetch(`https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&marka_id=${car.value}`);
      const data = await response.json();
      return data;
   }

   async function searchCars() {
      const ids = await searchAds();
      const idsCar = ids.result.search_result.ids;
      for (let i = 0; i < idsCar.length; i++) {
         let cars = idsCar[i]
         const response = await fetch(`https://developers.ria.com/auto/info?api_key=${apiKey}&auto_id=${cars}`)
         const data = await response.json();
         console.log(data)
         $('.go').prepend(
            `<div class="block__img">
            <img class="img" src="${data.photoData.seoLinkB}">
            <div class="block__info">
            <span class="model">Модель:${data.title}</span>
            <span class="price">Цина:${data.USD}</span>
            <a href=" https://auto.ria.com/uk${data.linkToView}"><button class="buy">Купить</button></a>
            </div>
            </div>`
         )
      }
   }

   const apiKey = 'e4Uct2oRTLf0COnSvSGWvWtRd4vxrvfuGZfw5zs5'

   searchCars()
})

/*
function get_ads(apiKey, markId) {
   fetch(`https://developers.ria.com/auto/search?api_key=${apiKey}&category_id=1&marka_id=${markId}`)
      .then(response => response.json())
         .then(data => {
            ads = data.result.search_result.ids
         })
}

let ads = [];


$('button').click(async function () {
   let mark = $('input').val();
   mark_id = await get_mark(apiKey, mark);
   console.log(mark_id)
})
   * /

//$('ul li:first').replaceWith('<li>15</li>')

//const li = $('ul li:last').clone()
//$('ul li:first').replaceWith(li)

//$('ul li:first').remove();

/*
let li = $('ul li:first').detach()
console.log(li)
$('ul').append(li)
*/

//$('ul').empty()

/*
$('ul').bind('click', (e) => {
   console.log(e.target)
   console.log(e.currentTarget)
   $('ul').unbind()
})
*/
//DZ
/* 
$('button').click(function () {
   let lis = $('li').clone();
   $('ul').empty();
   lis.each(function () {
      let li = $(this).clone();
      $('ul').prepend(li);
   })
})

//DZ

let prev;
$('.go').bind('click', (e) => {
   if (prev != undefined) {
      prev.style.border = '';
   }
   e.target.style.border = '2px solid red';
   prev = e.target;
});
 */

/*
$('button').bind('click', () => {
   $('body').append('<h1>click</h1>');
   $('button').unbind();
})
*/

/*
$('button').one('click', () => {
   $('body').append('<h1>click</h1>');
})
*/
/*
$(document).bind('keydown', (e) => {
   if (e.which == 231) {
      $('body').append('qwe')
   } else {
      $('body').append('123')
   }
})
*/
/* 
$(document).bind('keypress', (e) => {
   console.log(e.which);
})
 */

/*
$('div').delegate('img', 'click', function () {
   $(this).css('border', '1px solid red')
})

$('div').undelegete('img','click');
*/
/*
$('div').on('click', 'img', function () {
   $(this).css('border', '1px solid red')
})

$('div').off('click','img');
*/

/*
$('button').click(() => {
   console.log($('div').css('display'))
   if ($('div').css('display') == 'block') {
      console.log(1)
      $('div').slideUp()
   } else {
      $('div').slideDown()
   }
})
*/

/* 
$('button').click(() => {
   $('div').slideToggle(3000);
}) 
*/

/*
$('button').click(() => {
   $('div').fadeOut(2000).fadeIn(1000).fadeTo(500, 0.1)
})
*/