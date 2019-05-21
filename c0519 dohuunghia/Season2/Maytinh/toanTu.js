function sum() {
    let tong = parseInt(document.getElementById("Firstnumber").value) + parseInt(document.getElementById("Secondnumber").value);
    let outputTong = "Result " + tong;
    let display = outputTong.fontcolor("red");
    document.getElementById("output").innerHTML = display;
}

function tru() {
    let hieu = parseInt(document.getElementById("Firstnumber").value) - parseInt(document.getElementById("Secondnumber").value);
    let outputHieu = "Result " + hieu;
    let display = outputHieu.fontcolor("red");
    document.getElementById("output").innerHTML = display;
}

function nhan() {
    let tich = parseInt(document.getElementById("Firstnumber").value) * parseInt(document.getElementById("Secondnumber").value);
    let outputTich = "Result " + tich;
    let display = outputTich.fontcolor("red");
    document.getElementById("output").innerHTML = display;
}

function chia() {
    let thuong = parseInt(document.getElementById("Firstnumber").value) / parseInt(document.getElementById("Secondnumber").value);
    let outputThuong = "Result " + thuong;
    let display = outputThuong.fontcolor("red");
    document.getElementById("output").innerHTML = display;
}