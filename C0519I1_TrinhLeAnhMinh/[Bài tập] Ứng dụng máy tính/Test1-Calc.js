function number(value){
    if (value==="reset"){
        document.getElementById("Res").value="";
    }
    else{
        document.getElementById("Res").value+=value;
    }
}
function summath() {
    let A = document.getElementById("Res").value;
    B = eval(A);
    document.getElementById("Res").value=B;
}