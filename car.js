stats = "";

function preload(){
    ac_and_clock = loadImage("ac and clock.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_dectection = ml5.objectDectector("cocossd",modelLoded);
    document.getElementById("status").innerHTML = "Status: Object Detected";
}

function modelLoded(){
    console.log("Model Loaded");
    stats = true;
    object_dectection.detect(fan_image,gotResults);
}

function gotResults(error,results){
    console.log(error);
}
console.log(results);