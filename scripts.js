/**
 * Created by LU59 on 9/21/2016.
 */
var HistoryInfo = {

    Toys: 3,
    "Home & Seasonal": 150,
    "Electrical": 5,
    "Books": 0,
    "Fresh Food": 1200

}

var SpecialOffers = {
    Toys: 'Toys',
    "Home & Seasonal": {msg: 'Home & Seasonal', imag: './images/choco.jpg',desc:"Vanilla Choco Truffle",code:'DISCOUNT CODE:YOU100'},
    "Electrical": 'Electrical',
    "Books": 'Books',
    "Fresh Food": {msg: 'Fresh Food', imag: './images/vegetables.jpg',desc:"Vegetables",code:'DISCOUNT CODE:SSS110'}
}
$(document).ready(function () {

    $('.open-intro').click(function () {

        $('#intro-wrap').css('display', 'block');
        $('#intro-wrap').animate({
            //opacity: 1,
            left: '0',
        }, 500, function () {
            // Animation complete.
        });
        $('.open-intro').hide();
        $('.close-intro').show();

    });


    $('.close-intro').click(function () {
        $('#intro-wrap').css('display', 'none');
        $('#intro-wrap').animate({
            //opacity: 0.25,
            left: '-225',
        }, 400, function () {
            // Animation complete.
        });
        $('.open-intro').show();
        $('.close-intro').hide();
    });


    var arr = Object.keys(HistoryInfo).map(function (key) {
        return HistoryInfo[key];
    });
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);

    var key = Object.keys(HistoryInfo).filter(function (key) {
        return HistoryInfo[key] === max
    })[0];

    var offerCategory = SpecialOffers[key].msg

    /*document.getElementById("offerMsg").innerText = offerCategory*/
    var imageSource = SpecialOffers[key].imag
    var desc = SpecialOffers[key].desc
    var code = SpecialOffers[key].code
    //$('#offerMsg').append('<div style="display:inline;max-width:80%;float:right" class="container"> <br> <div id="myCarouse2" style="max-width: 70%;"class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#myCarouse2" data-slide-to="0" class="active"></li> <li data-target="#myCarousel" data-slide-to="1"></li> <li data-target="#myCarouse2" data-slide-to="2"></li> <li data-target="#myCarouse2" data-slide-to="3"></li> </ol> <div class="carousel-inner" role="listbox"> <div class="item active"> <img src="./images/vegetables.jpg" alt="Chania" width="460" height="300"> </div> <div class="item "> <img src="./images/choco.jpg" alt="Chania" width="460" height="300"> </div> <div class="item"><img src="./images/chips.jpg" alt="Flower" width="460" height="300"> </div> <div class="item"> <img src="./images/food.jpg" alt="Flower" width="460" height="300"> </div> </div> <a class="left carousel-control" href="#myCarouse2" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarouse2" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> </div>');

    $('#offerMsg').append('<div style="display: inline;"> <img id="myImage1" style="height: 100px" src="./images/dis.jpg" ><img id="myImage" src="" ></div><div style="display: inline;top: 0;font-size: 22px; margin-left: 3%;">'+desc+'</div><div style="margin-left: 66%">'+code+'</div>');

    document.getElementById('myImage').src = imageSource;
    $('#delay').on('click', function (e) {
        var $target = $($(this).data('target'));
        $target.data('triggered',true);
        setTimeout(function() {
            if ($target.data('triggered')) {
                $target.modal('show').data('triggered',false);
            };
        }, 5000); // milliseconds
        return false;
    });

});



