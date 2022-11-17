function setup()
{
 video = createCapture(VIDEO);
 video.size(500, 500);

 canvas = createCanvas(500, 500);
 canvas.position(700, 70);

 posenet = ml5.poseNet(video, modelLoaded);
 posenet.on("pose", gotPoses);
}

function modelLoaded()
{
 console.log("Model is loaded");
}

function gotPoses(results)
{
 if(results.length > 0)
 {
  console.log(results);
 }
}