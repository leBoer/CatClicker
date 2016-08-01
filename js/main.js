$(function(){

    // Manipulates the DOM and add divs for cats and counters
    $('.cats').append('<div id="cat1" class="catdivs">', '<div id="cat2" class="catdivs">');

    $('#cat1').append('<div id="counter1">');
    $('#cat2').append('<div id="counter2">');

    // Prepends the image of the cat on the page
    $('#cat1').prepend('<img id="clickCat1" class="image" src="img/cutecat.jpg">');
    $('#cat2').prepend('<img id="clickCat2" class="image" src="img/angrycat.jpg">');

    // Prepends the names for the cats
    $('#cat1').prepend('<p>Cute Cat</p>');
    $('#cat2').prepend('<p>Angry Cat</p>');

    // Counts the number of clicks on the cat
    var clickCounter1 = 0;
    $('#clickCat1').click(function(e) {

        clickCounter1++;
        $('#counter1').text("You just clicked the cute cat " + clickCounter1 + " times!");

    });

    var clickCounter2 = 0;
    $('#clickCat2').click(function(e) {

        clickCounter2++;
        $('#counter2').text("You just clicked the angry cat " + clickCounter2 + " times!");

    });

});
