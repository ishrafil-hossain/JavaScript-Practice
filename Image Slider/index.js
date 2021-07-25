// photos is an array where i have putted all images
var photos = ["images/img-1.jpg", "images/img-2.jpg", "images/img-3.jpeg"];
var imgTag = document.querySelector("img");

//count is array index. index start zero, for that reason count start zero
var count = 0;

function next(){
    count++;
    if(count>=photos.length){ //when count's value grater than or equal to photos array's length then start with zero index
        count = 0;
        ingTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}

function prev(){
    count--;
    if(count<0){
        count = photos.length-1;
        ingTag.src = photos[count];
    }
    else{
        imgTag.src = photos[count];
    }
}