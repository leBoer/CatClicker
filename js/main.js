$(function(){

    // Appends the image of the cat on the page
    $('.catimage').append('<img id="clickCat" class="image" src="img/cutecat.jpg">');

    // Counts the number of clicks on the cat
    var clickCounter = 0;
    $('#clickCat').click(function(e) {

        clickCounter++;
        $('.counter').text("You just clicked the cat " + clickCounter + " times!");

    });

});
