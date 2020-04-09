
function calcVs() {
    var C = document.getElementById("koef_C").value;
    var x = document.getElementById("koef_x").value;
    var y = document.getElementById("koef_y").value;
    var q = document.getElementById("koef_q").value;
    var Nd = document.getElementById("Nd").value;
    var KKD = document.getElementById("KKD").value;
    var h = document.getElementById("h").value;
    var b = document.getElementById("b").value;
    var n = document.getElementById("n").value;
    var z = document.getElementById("z").value;
    var i = document.getElementById("i").value;
    var Ap = document.getElementById("A_por").value;
    var Aw = document.getElementById("A_w").value;
    var Ar = document.getElementById("A_r").value;
    var Ah = document.getElementById("A_h").value;
    var Ad = document.getElementById("A_d").value;
    var Av = document.getElementById("A_v").value;

    var Apopr = (Ap*Aw*Ar*Ah*Ad*Av).toFixed(2);

    var Vs = Math.pow(60000*Math.pow(1000, x)*Nd*KKD/(C*Apopr*Math.pow(h, (1-y))*Math.pow(b, (1-q))*i*Math.pow((n*z), x)), (1/(1-x)));
    
    document.getElementById("Vs").innerHTML = "Швидкість подачі за потужністю становить не більше " + Vs.toFixed(2) + " м/хв.";

    return Vs;
}

var Vs = calcVs();

function calcVr() {
    var D = document.getElementById("D").value;
    var n = document.getElementById("n").value;
    var Vr = Math.PI * D * n / 60000;
    document.getElementById("Vr").innerHTML = "Швидкість різання становить " + Vr.toFixed(2) + " м/с";
}



function calcSz() {
    var n = document.getElementById("n").value;
    var z = document.getElementById("z").value;
    var Sz = Vs * 1000/(n * z);
    document.getElementById("Sz").innerHTML = "Подача на зуб становить Sz = " + Sz.toFixed(2) + " мм";
}