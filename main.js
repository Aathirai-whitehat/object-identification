Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90,
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML=`<img src=${pic} id="picture">`;
    })
}

console.log("ml5 version="+ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9J-F40391/model.json",modelloaded);

function modelloaded(){
    console.log("Model has been loaded");
}

function check(){
    var image=document.getElementById("picture");
    classifier.classify(image,showresult);
}

function showresult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    console.log(results[0].label);
    console.log(results[0].confidence);
    document.getElementById("objectname").innerHTML=results[0].label;
    x=results[0].confidence.toFixed(3)*100;
    document.getElementById("accuracy").innerHTML= x + " %";
}
}