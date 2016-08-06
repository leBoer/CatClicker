$(function(){

    // The Model //
    var model = {
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
        ]
    };

    // The View //
    // The List View
    var listview = {
        init: function(){
            this.render();

            var catObject = octupus.getCats();
            $('.name').click(function(e) {
                $('#catPicture').empty();
                $('#counterDiv').empty();
                test = this.id;
                for (var i = 0; i < catObject.length; i++){

                    if (test == catObject[i].id){
                        var picture = catObject[i].image;
                        var pictureId = catObject[i].id + "Picture";
                        $('#catPicture').append("<img src=" + picture + " id=" + pictureId + " class='image'>");
                        $('#counterDiv').append("You have clicked " + catObject[i].name + " " + catObject[i].counter + " times");
                        q = i;
                    }
                }

            })
        },

        render: function(){
            octupus.getCats().forEach(function(cat){
                var catname = cat.name;
                var catid = cat.id;
                $('#catNames').append("<p id=" + catid + " class='name'>" + catname + "</br></p>");
            })
        }
    };

    // The Picture View
    var pictureview = {
        init: function(){
            this.render();
            var catObject = octupus.getCats();
            $('#catPicture').click(function(e){
                // Clears the counter before we append the new value
                $('#counterDiv').empty();
                // Figures out which cat it is based on the value of q which was defined in the catselector function
                for (var t = 0; t < catObject.length; t++){
                    if(q == t){

                        octupus.updateCounter(t);
                        $('#counterDiv').empty();
                        $('#counterDiv').append("You have clicked " + catObject[t].name + " " + catObject[t].counter + " times");

                    }
                }
            });
        },

        render: function(){
            $('#catPicture').text("Click on one of the cats to the left to display the cat")

        }
    };

    // The Octupus //
    var octupus = {
        //var q = 0;
        getCats: function(){
            return model.cats;
            //return test;
        },

        updateCounter: function(t){
            model.cats[t].counter++;
        },

        init: function(){
            var q = 0;
            listview.init();
            pictureview.init();

        }
    };

    octupus.init();


    //$('#catPicture').click(function(e){
    //    // Clears the counter before we append the new value
    //    $('#counterDiv').empty();
    //    // Figures out which cat it is based on the value of q which was defined in the catselector function
    //    for (var t = 0; t < clickyCats.cats.length; t++){
    //        if(q == t){
    //
    //            clickyCats.cats[t].counter++;
    //            $('#counterDiv').empty();
    //            $('#counterDiv').append("You have clicked " + clickyCats.cats[t].name + " " + clickyCats.cats[t].counter + " times");
    //
    //        }
    //    }
    //});


});
