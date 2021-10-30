song1="";
song2="";
song1_status="";
song2_status="";
scorerightwrist=0;
scoreleftwrist=0;
rightristX=0;
rightristY=0;
leftwristX=0;
leftwristY=0;
function preload(){
song1="music1.mp3";
song2="music2.mp3";    
}
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log(" Pose Net is initalized")    
}
function gotPoses(results){
if(results.length>0){
console.log(results);
scorerightwrist=results[0].pose.keypoints[10].score;    
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
rightristX=results[0].pose.rightWrist.x;
rightristX=results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);  
leftristX=results[0].pose.leftWrist.x;
leftristX=results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);  
}
}