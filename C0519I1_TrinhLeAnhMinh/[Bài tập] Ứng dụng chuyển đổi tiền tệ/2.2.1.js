function moneyout(){
    let D = parseInt(document.getElementById("X").value)*parseInt(document.getElementById("A").value)/parseInt(document.getElementById("B").value);
    let bluecolor= "Result "+D;
    let outputmsg= bluecolor.fontcolor("blue")
    document.getElementById("Outputmoney").innerHTML = outputmsg;
}