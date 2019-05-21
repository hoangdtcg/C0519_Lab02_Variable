function changemoney(){
    let D = parseInt(document.getElementById("cot1").value) * parseInt(document.getElementById("cot2").value) / parseInt(document.getElementById("cot3").value);
    let bluecolor= "Result " + D;
    let output= bluecolor.fontcolor("red");
    document.getElementById("money1").innerHTML = output;
}