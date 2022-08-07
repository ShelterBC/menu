$('#bavarages1').click(slidersAppear);
$('#navvCoff').click(slidersAppear);
function slidersAppear () {
    var newElems = $("<div data-aos='fade-up' id = 'addOne' class='slider'>" +
    "<div class='slider__item'> <img class='productImage' src='media/cofee/espresso.jpeg'> </div>" +
    "<div class='slider__item'><img class='productImage' src='media/cofee/coffee-americano.jpg'></div></div>"
    +"<div id = 'addOneo' class='productDescription'><p style = 'text-align: left;''>Еспресо, Американо, Американо з молоком(30₴)<br>Допіо</p><hr></div>");
    $('#fSlider').append(newElems);


    newElems = $("<div data-aos='fade-up' id = 'addTwo' class='slider'>" +
    "<div class='slider__item'> <img class='productImage' src='media/cofee/capuch.jpg'> </div>" +
    "<div class='slider__item'><img class='productImage' src='media/cofee/latte.jpg'></div></div>"
    +"<div id = 'addTwot' class='productDescription'><p style = 'text-align: left;''>Капучіно, Лате</p><hr></div>");
    $('#sSlider').append(newElems);
    
    newElems = $("<div data-aos='fade-up' id = 'addThree' class='slider'>" +
    "<div class='slider__item'> <img class='productImage' src='media/cofee/flet.jpeg'> </div>" +
    "<div class='slider__item'><img class='productImage' src='media/cofee/cacao.png'></div></div>"
    +"<div id = 'addThreeO' class='productDescription'><p style = 'text-align: left;''>Флет уайт, Какао</p><hr></div>");
    $('#bSlider').append(newElems);

    AOS.refresh();

    $(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true
    });
  });
  }

  $('#backk').click(slidersRemove);
  $('#navvLan').click(slidersRemove);
  $('#navvSnid').click(slidersRemove);
  $('#navvTea').click(slidersRemove);
  $('#navvCoctels').click(slidersRemove);
    function slidersRemove() {
        $('#addOne').remove();
        $('#addOneo').remove();
        $('#addTwo').remove();
        $('#addTwot').remove();
        $('#addThree').remove();
        $('#addThreeO').remove();
  }
