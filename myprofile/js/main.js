let picture = ["images/bg00.jpg", "images/bg02.jpg", "images/bg01.jpg"]
let p_idx = 0;

showPicture(); 

function showPicture() {
    document.querySelector("#pic").src = picture[p_idx];
    p_idx++;
    if(p_idx === picture.length)
        p_idx = 0;
    setTimeout(showPicture, 2000); //肄쒕갚 �⑥닔
}



setInterval(myWatch, 1000);

function myWatch(){
    var date = new Date();
    var now = date.toLocaleTimeString();
    document.getElementById("demo").innerHTML = "�묒냽�쒓컙: " + now;
}