Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90,

});


Webcam.attach("#camera")

function take_pic() {
    window.alert("get ready for picture");
    Webcam.snap(function (urlData) {
        document.getElementById("result").innerHTML = '<img src="' + urlData + '" id="camp_pic">';

    });
}
p1 = "";
p2 = "";
function text_to_speech() {
    speekText1 = "prediction one is " + p1;
    speekText2 = "prediction two is" + p2;
    speak_audio = new SpeechSynthesisUtterance(speekText1 + speekText2);
    window.speechSynthesis.speak(speak_audio);
}
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kACJr1kBl/model.json",modeLoaded);
function modeLoaded() {
    console.log("model loaded succefully");
}
function check() {
    pic=document.getElementById("camp_pic");
    classifier.classify(pic,sendResults);
}
function sendResults(e,r) {
    if (e) {
        console.error(e);
    }
    else{
        console.log(r);
        p1=r[0].label;
        p2=r[1].label;
        text_to_speech();
        document.getElementById("emotionName1").innerHTML=p1;
        document.getElementById("emotionName2").innerHTML=p2;

        if (p1=="perfect") {
            document.getElementById("emoji1").innerHTML="&#9996";
        }
        else if(p1=="peace"){
            document.getElementById("emoji1").innerHTML="&#128076";
        }
        else if(p1=="thumbs up"){
            document.getElementById("emoji1").innerHTML="&#128077";
        }
        else{
            document.getElementById("emoji1").innerHTML="&#129311"
        }



        if (p2=="perfect") {
            document.getElementById("emoji2").innerHTML="&#128076";
        }
        else if(p2=="peace"){
            document.getElementById("emoji2").innerHTML="&#9996";
        }
        else if(p2=="thumbs up"){
            document.getElementById("emoji2").innerHTML="&#128077";
        }
        else{
            document.getElementById("emoji2").innerHTML="&#129311"
        }
    }
}