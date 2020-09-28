var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//for calculation
var C = 7;
    var x = 0.4;
    var y = -0.17;
    var q = 0.0;

function calcVs() {
    var Nd = document.getElementById("Nd").value;
    var KKD = document.getElementById("KKD").value;
    var h = document.getElementById("h").value;
    var b = document.getElementById("b").value;
    var n = document.getElementById("n").value;
    var z = document.getElementById("z").value;
    var i = document.getElementById("i").value;
    var Ap = document.getElementById("A_por").value;
    var Aw = document.getElementById("A_w").value;
    var Ar = 1.0;
    var Ah = document.getElementById("A_h").value;
    var Ad = document.getElementById("A_d").value;
    var Av = document.getElementById("A_v").value;

    var Apopr = (Ap*Aw*Ar*Ah*Ad*Av).toFixed(2);

    var Vs = Math.pow(60000*Math.pow(1000, x)*Nd*KKD/(C*Apopr*Math.pow(h, (1-y))*Math.pow(b, (1-q))*i*Math.pow((n*z), x)), (1/(1-x)));
    
    document.getElementById("Vs").innerHTML = "Швидкість подачі за потужністю Vs = " + Vs.toFixed(2) + " м/хв.";
}


function calcVr() {
    var D = document.getElementById("D").value;
    var n = document.getElementById("n").value;
    var Vr = Math.PI * D * n / 60000;
    document.getElementById("Vr").innerHTML = "Швидкість різання Vr = " + Vr.toFixed(2) + " м/с";
}


function calcSz() {
    
    var Nd = document.getElementById("Nd").value;
    var KKD = document.getElementById("KKD").value;
    var h = document.getElementById("h").value;
    var b = document.getElementById("b").value;
    var n = document.getElementById("n").value;
    var z = document.getElementById("z").value;
    var i = document.getElementById("i").value;
    var Ap = document.getElementById("A_por").value;
    var Aw = document.getElementById("A_w").value;
    var Ar = 1.0;
    var Ah = document.getElementById("A_h").value;
    var Ad = document.getElementById("A_d").value;
    var Av = document.getElementById("A_v").value;

    var Apopr = (Ap*Aw*Ar*Ah*Ad*Av).toFixed(2);

    var Vs = Math.pow(60000*Math.pow(1000, x)*Nd*KKD/(C*Apopr*Math.pow(h, (1-y))*Math.pow(b, (1-q))*i*Math.pow((n*z), x)), (1/(1-x)));
    
    var Sz = Vs * 1000/(n * z);
    
    document.getElementById("Sz").innerHTML = "Подача на зуб становить Sz = " + Sz.toFixed(2) + " мм";
}

function calcUpFi() {
  var upperX = document.getElementById("upper_x").value;
  var upperH = document.getElementById("upper_h").value;
  var upperR = document.getElementById("upper_R").value;

  if(upperR && upperX && upperH != 0)
  {
    var upperFi = Math.acos((upperX-upperH)/upperR)*180/Math.PI;
    document.getElementById("upFi").innerHTML = "<i>&#966<sub>вих</sub> = </i>" + upperFi.toFixed(2) + " град.";
  }
  else
  {
    document.getElementById("upFi").innerHTML = "Введіть всі значення!";
  }
}

function calcLowFi() {
  var lowerX = document.getElementById("lower_x").value;
  var lowerR = document.getElementById("lower_R").value;

  if(lowerR && lowerX !=0)
  {
    var lowerFi = Math.acos(lowerX/lowerR) * 180/Math.PI;
    document.getElementById("lowFi").innerHTML = "<i>&#966<sub>вих</sub> = </i>" + lowerFi.toFixed(2) + " град.";
  }
  else
  {
    document.getElementById("lowFi").innerHTML = "Введіть всі значення!";
  }
}

function calcVsRmUp() {
  var SzRm = document.getElementById("SzRmUp").value;
  var zRm = document.getElementById("zRmUp").value;
  var nRm = document.getElementById("nRmUp").value;

  if(SzRm && zRm && nRm != 0)
  {
    var VsRm = (SzRm*zRm*nRm)/1000;
    document.getElementById("Vs_Rm_Up").innerHTML = "<i>Vs<sub>Rm</sub> = </i>" + VsRm.toFixed(2) + " м/хв.";
  }
  else
  {
    document.getElementById("Vs_Rm_Up").innerHTML = "Введіть всі значення!";
  }
}

function calcVsRmLow() {
  var SzRm = document.getElementById("SzRmLow").value;
  var zRm = document.getElementById("zRmLow").value;
  var nRm = document.getElementById("nRmLow").value;

  if(SzRm && zRm && nRm != 0)
  {
    var VsRm = (SzRm*zRm*nRm)/1000;
    document.getElementById("Vs_Rm_Low").innerHTML = "<i>Vs<sub>Rm</sub> = </i>" + VsRm.toFixed(2) + " м/хв.";
  }
  else
  {
    document.getElementById("Vs_Rm_Low").innerHTML = "Введіть всі значення!";
  }
}

function calcZ() {
  var wantedVs = document.getElementById("Vs_wanted").value;
  var wantedSz = document.getElementById("Sz_wanted").value;
  var wantedN = document.getElementById("n_wanted").value;

  if(wantedVs && wantedSz && wantedN != 0)
  {
    var z = wantedVs*1000/(wantedSz*wantedN);
    document.getElementById("Z").innerHTML = "<i>z = </i>" + z.toFixed(1) + " шт.";
  }
  else
  {
    document.getElementById("Z").innerHTML = "Введіть всі значення!";
  }
}

function calcVsT() {
  var tRiz = document.getElementById("t_riz").value;
  var Lzag = document.getElementById("L_zag").value;

  if (tRiz && Lzag != 0)
  {
    var VsT = Lzag*60/(tRiz*1000);
    document.getElementById("Vs_t").innerHTML = "<i>Vs = </i>" + VsT.toFixed(2) + " м/хв.";
  }
  else 
  {
    document.getElementById("Vs_t").innerHTML = "Введіть всі значення!";
  }
}