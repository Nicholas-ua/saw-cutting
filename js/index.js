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

//for calculation N
function calcNp() {
  var C = 7;
  var x = 0.4;
  var y = -0.17;
  var q = 0.0;
  var h_N = document.getElementById("h_N").value;
  var b_N = document.getElementById("b_N").value;
  var Vs_N = document.getElementById("Vs_N").value;
  var i_N = document.getElementById("i_N").value;
  var D_N = document.getElementById("D_N").value;
  var n_N = document.getElementById("n_N").value;
  var z_N = document.getElementById("z_N").value;
  var Ap_N = document.getElementById("Apor_N").value;
  var Aw_N = document.getElementById("Aw_N").value;
  var Ar = 1.0;
  var Ah_N = document.getElementById("Ah_N").value;
  var Ad_N = document.getElementById("Ad_N").value;
  var Av_N = document.getElementById("Av_N").value;

  var Apopr_N = (Ap_N*Aw_N*Ar*Ah_N*Ad_N*Av_N).toFixed(2);
  var Sz_N = Vs_N * 1000/(n_N * z_N);
  var Kt = C/((Math.pow(Sz_N, x))*Math.pow(h_N, y)*Math.pow(b_N, q));

  var Np = Kt*Apopr_N*h_N*b_N*Vs_N*i_N/60000;
  
  document.getElementById("Np").innerHTML = "Потужність на різання Np = " + Np.toFixed(2) + " кВт.";
  document.getElementById("Kt").innerHTML = "Питома робота різання Kt = " + Kt.toFixed(2) + " Дж/см.куб."
}


function calcVrSz() {
  var D_N = document.getElementById("D_N").value;
  var n_N = document.getElementById("n_N").value;
  var z_N = document.getElementById("z_N").value;
  var Vs_N = document.getElementById("Vs_N").value;

  var Vr_N = Math.PI * D_N * n_N / 60000;
  var Sz_N = Vs_N * 1000/(n_N * z_N);

  document.getElementById("Vr_N").innerHTML = "Швидкість різання Vr = " + Vr_N.toFixed(2) + " м/с";
  document.getElementById("Sz_N").innerHTML = "Подача на зуб становить Sz = " + Sz_N.toFixed(2) + " мм";
}

function calcZ_h() {
  var D_h = document.getElementById("D_h").value;
  var h_mat = document.getElementById("h_mat").value;
  var z_h = 1.4142*Math.PI * D_h/ h_mat;
  document.getElementById("z_h").innerHTML = "Рекомендована кількість зубів пил z = " + z_h.toFixed();
}