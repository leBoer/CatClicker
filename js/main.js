$(function(){
    // Used to keep track of which cat we're displaying at all times
    var q = 0;

    var clickyCats = {
        'cats': [
            {
                'name': 'Cute cat',
                'image': 'img/cutecat.jpg',
                'id': 'cute',
                'counter': 0
            },
            {
                'name': 'Angry cat',
                'image': 'img/angrycat.jpg',
                'id': 'angry',
                'counter': 0
            },
            {
                'name': 'Bat cat',
                'image': 'img/batcat.jpg',
                'id': 'bat',
                'counter': 0
            },
            {
                'name': 'Drunk cat',
                'image': 'img/drunkcat.jpeg',
                'id': 'drunk',
                'counter': 0
            },
            {
                'name': 'Grumpy cat',
                'image': 'img/grumpycat.jpg',
                'id': 'grumpy',
                'counter': 0
            }
        ],
        // Appends the cat names to the menu
        'display': function(){
            clickyCats.cats.forEach(function(cat){
                var catname = cat.name;
                var catid = cat.id;
                $('#catNames').append("<p id=" + catid + " class='name'>" + catname + "</br></p>");
            })
        }
    };

    clickyCats.display();

    $('.name').click(function(e){
        $('#catPicture').empty();
        $('#counterDiv').empty();
        var test = this.id;
        // Figures out which cat we selects, and appends the picture and the correct counter to the picture
        for (var i = 0; i < clickyCats.cats.length; i++){

            if (test == clickyCats.cats[i].id){
                var picture = clickyCats.cats[i].image;
                var pictureId = clickyCats.cats[i].id + "Picture";
                $('#catPicture').append("<img src=" + picture + " id=" + pictureId + " class='image'>");
                $('#counterDiv').append("You have clicked " + clickyCats.cats[i].name + " " + clickyCats.cats[i].counter + " times");
                q = i;
            }
        }

    });

    // Detects when we click the picture
    $('#catPicture').click(function(e){
        // Clears the counter before we append the new value
        $('#counterDiv').empty();
        // Figures out which cat it is based on the value of q which was defined in the catselector function
        for (var t = 0; t < clickyCats.cats.length; t++){
            if(q == t){

                clickyCats.cats[t].counter++;
                $('#counterDiv').empty();
                $('#counterDiv').append("You have clicked " + clickyCats.cats[t].name + " " + clickyCats.cats[t].counter + " times");

            }
        }
    });


});
