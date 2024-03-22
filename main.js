song = "";
objects = [];
status = "";
function preload(){
    song = loadSound("alarm.mp3") ;
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded );
    document.getElementById("status").innerHTML = "status: detectando o bebe na camera";
}
function modelLoaded(){
        console.log("model loaded");
        status = true;
     }

function gotResults(error, results){
    if(error){
        console.error("LMFAOOOOOOOOO U GLITCHED I DON'T CARE KILL UTTP NOW DOX ME AND U NEVER WIL REACH ME CUZ U LIVE IN ANOTHER PLACE AND U DUMB GIVE YOU IP AND ADRESS AND I NUKE U");
    }
    console.log(results);
    objects = results;
}
function draw(){
    image(video, 0, 0, 480, 380);
    if(status!=""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length;i++){
            document.getElementById("status").innerHTML = "status: objetos detectados com sucesso";
            fill(r, g, b);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("gold");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        if(objects[i].label == "person"){
            document.getElementById("numberOfObjects").innerHTML = "BABY BABY BABY OHHH BABY WATER";
            console.log("stop");
            song.stop()
        }
        else{
            document.getElementById("numberOfObjects").innerHTML = "nao baby vem aqui fazer isso...";
            console.log("start");
            song.play()
        }
    }
}
