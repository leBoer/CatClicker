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
                octupus.updateForm(q);
            });
            // Shows and hides the admin div
            $('#adminButton').click(function(e){
                if ($('.admin').attr("style")=="display:none"){
                    $('.admin').attr("style", "display:inline");
                } else {
                    $('.admin').attr("style", "display:none");
                }
            });

            // Fills in the admin div with the fields and the buttons. Starts out hidden.
            $('.admin').append('<div class="field"><input type="text" value="Cat Name" id="nameField"></div>');
            $('.admin').append('<div class="field"><input type="text" value="URL" id="urlField"></div>');
            $('.admin').append('<div class="field"><input type="text" value="Number of Clicks" id="clickField"></div>');
            $('.admin').append('<div><input type="button" value="Save" id="saveButton"><input type="button" value="Cancel" id="cancelButton"></div>');



            // Updates the model with the new cat attributes
            $('#saveButton').click(function(e){
                if (typeof q !== 'undefined'){
                    octupus.updateModel(q);
                    octupus.updateForm(q);
                }

            });

            // Cancels the input that hasn't been saved
            $('#cancelButton').click(function(e){
                if (typeof q !== 'undefined'){
                    console.log(q);
                    octupus.updateForm(q);
                }
            });
        },

        render: function(){
            octupus.getCats().forEach(function(cat){
                var catname = cat.name;
                var catid = cat.id;
                $('#catNames').append("<p id=" + catid + " class='name'>" + catname + "</br></p>");
            });

            // Appends the admin button and admin div. Admin div starts out as hidden
            $('#catNames').append("<input type='button' value='Admin' id='adminButton'>");
            $('#catNames').append("<div class='admin' style='display:none'>")
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
                        octupus.updateForm(q);
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

        getCats: function(){
            return model.cats;
            //return test;
        },

        updateCounter: function(t){
            model.cats[t].counter++;
        },

        updateForm: function(q){
            var catObject = octupus.getCats();
            var catname = catObject[q].name;
            var catimage = catObject[q].image;
            var catcounter = catObject[q].counter;
            $('.field').empty();
            $('.admin').prepend('<div class="field"><input type="text" value=' + catcounter + ' id="clickField"></div>');
            $('.admin').prepend('<div class="field"><input type="text" value=' + catimage + ' id="urlField"></div>');
            $('.admin').prepend('<div class="field"><input type="text" value=' + catname + ' id="nameField"></div>');
        },

        updateModel: function(q){
            model.cats[q].name = $('#nameField').val();
            model.cats[q].image = $('#urlField').val();
            model.cats[q].counter = $('#clickField').val();
        },

        init: function(){
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
