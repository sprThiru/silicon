function setup()
{
    canvas=createCanvas(500,500);
    canvas.position(50,100);
    video=createCapture(VIDEO);
    video.hide()
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/iTyh_chUT/model.json','https://teachablemachine.withgoogle.com/models/17wGluitB/','https://teachablemachine.withgoogle.com/models/BvGKikvb6/','https://teachablemachine.withgoogle.com/models/Pdl2BhGXs/',modelLoaded);

}


function modelLoaded()
{
    console.log('model loaded');
}

function draw()
{
    image(video,0,0,500,500);
    classifier.classify(video,gotResult);



}

function gotResult(error, results)
{
        if (error)
        {
            console.error(error);
        }   
        else
        {
            console.log(results);
            document.getElementById("result_object_name").innerHTML = results[0].label;
            document.getElementById("sandiya").innerHTML = results[0].label;

            document.getElementById("abina").innerHTML = results[0].label;

            document.getElementById("thiru").innerHTML = results[0].label;

        }     
}

    