function ChangePic() {
    document.getElementById("PicHead").innerHTML = console.log("123")
}

var img = document.getElementById("BtnLike");
var btnPoint1 = true;
function ChangeLove(){
    if( btnPoint1){
     img.src = "image/Lovelike.png";
     btnPoint1 = false;
     console.log("OK");
    }
     else{
        img.src = "image/heart.png";
        btnPoint1 = true;
     }

}

var img1 = document.getElementById("BtnLike1");
var btnPoint = true;
function ChangeLove1(){
    if( btnPoint){
     img1.src = "image/Lovelike.png";
     btnPoint = false;
    }
     else{
        img1.src = "image/heart.png";
        btnPoint = true;
     }
}

var img2 = document.getElementById("BtnLike2");
var btnPoint = true;
function ChangeLove2(){
    if( btnPoint){
     img2.src = "image/Lovelike.png";
     btnPoint = false;
    }
     else{
        img2.src = "image/heart.png";
        btnPoint = true;
     }
}

var img3 = document.getElementById("BtnLike3");
var btnPoint = true;
function ChangeLove3(){
    if( btnPoint){
     img3.src = "image/Lovelike.png";
     btnPoint = false;
    }
     else{
        img3.src = "image/heart.png";
        btnPoint = true;
     }
}