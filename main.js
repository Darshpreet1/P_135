function setup(){
    canvas = createCanvas(480,500);
    video = createCapture(VIDEO);
    canvas.position(800,100);
    posenet = ml5.poseNet(video , modelloded)
    posenet.on("pose",gotposes)
}

function draw(){
    background("grey")
}

function modelloded(){
    console.log("modelloded")
}