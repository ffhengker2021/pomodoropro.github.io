// Bagian Jam
let jam1 = document.getElementById('jam1');
let jam2 = document.getElementById('jam2');
let menit1 = document.getElementById('menit1');
let menit2 = document.getElementById('menit2');
let detik1 = document.getElementById('detik1');
let detik2 = document.getElementById('detik2');
let container = document.getElementById('container')


// Pengaturan Waktu
let timerJ = 0;
let timerM = 2;
let timerD = 0;
timerJ = document.getElementById('InputJam').value = "";
timerM = document.getElementById('InputMenit').value = "2";
timerD = document.getElementById('InputDetik').value = "";
if(timerJ == ""){
    timerJ = document.getElementById('InputJam').value = 0;
}
if(timerM == ""){
    timerM = document.getElementById('InputMenit').value = 0;
}
if(timerD == ""){
    timerD = document.getElementById('InputDetik').value = 0;
}

// Angka Jam
if(timerD == 0){
    detik1.innerHTML = timerD;
    detik2.innerHTML = timerD;
    if(timerD == 0 && timerM == 0 && timerJ == 0){
        tombolStart.innerHTML = `Start`;
        sop = true;
        clearInterval(maju);
    }
}else if(timerD <= 9 ){
    detik1.innerHTML = "0";
    detik2.innerHTML = timerD;
}else if(timerD <= 19){
    detik1.innerHTML = "1";
    detik2.innerHTML = timerD-10;
}else if(timerD <= 29){
    detik1.innerHTML = "2";
    detik2.innerHTML = timerD-20;
}else if(timerD <= 39){
    detik1.innerHTML = "3";
    detik2.innerHTML = timerD-30;
}else if(timerD <= 49){
    detik1.innerHTML = "4";
    detik2.innerHTML = timerD-40;
}else if(timerD <= 59){
    detik1.innerHTML = "5";
    detik2.innerHTML = timerD-50;
}else{
    detik1.innerHTML = "0";detik2.innerHTML = "0";
}
// Menit
if(timerM == 0){
    menit1.innerHTML = timerM;
    menit2.innerHTML = timerM;
}else if(timerM <= 9 ){
    menit1.innerHTML = 0;
    menit2.innerHTML = timerM;
}else if(timerM <= 19){
    menit1.innerHTML = "1";
    menit2.innerHTML = timerM-10;
}else if(timerM <= 29){
    menit1.innerHTML = "2";
    menit2.innerHTML = timerM-20;
}else if(timerM <= 39){
    menit1.innerHTML = "3";
    menit2.innerHTML = timerM-30;
}else if(timerM <= 49){
    menit1.innerHTML = "4";
    menit2.innerHTML = timerM-40;
}else if(timerM <= 59){
    menit1.innerHTML = "5";
    menit2.innerHTML = timerM-50;
}else{
    menit1.innerHTML = "0";menit.innerHTML = "0";
}
// Jam
if(timerJ == 0){
    jam1.innerHTML = timerJ;
    jam2.innerHTML = timerJ;
}else if(timerJ <= 9 ){
    jam1.innerHTML = "0";
    jam2.innerHTML = timerJ;
}else if(timerJ <= 19){
    jam1.innerHTML = "1";
    jam2.innerHTML = timerJ-10;
}else if(timerJ <= 24){
    jam1.innerHTML = "2";
    jam2.innerHTML = timerJ-20;
}else{
    jam1.innerHTML = "0";jam.innerHTML = "0";
}

// Bagian Tombol
let tombolStart = document.getElementById('mulai');
let tombolEdit = document.getElementById('edit');
let tombolReset = document.getElementById('reset');
let sop = true;
let eot = true;
let maju;
let editor = document.getElementById('editor');

// Apabila Tombol Start ditekan maka
function start(){
    if(sop == true){
    if(!(timerJ==0 && timerM == 0 && timerD ==0)){
        tombolStart.innerHTML = `Pause`;
        editor.style.display = 'none';
        sop = false;
        if(eot == false){
        editor.style.animation = 'muncul2 .5s forwards'
        container.style.animation = 'naik2 .5s'
        container.style.animationFillMode = 'forwards'
        layar.style.animation = 'tope2 1.3s forwards'
        eot = true
        maju = setInterval(timer,1000);
        }else{
        maju = setInterval(timer,1000);
        }
    }
    }else{
        tombolStart.innerHTML = `Start`;
        sop = true;
        clearInterval(maju);
    }
}
let layar = document.getElementById('awe')
// Apabila Tombol Edit Ditekan Maka
function edit(){
    if(eot==true){
    tombolStart.innerHTML = `Start`;
    editor.style.animation = 'muncul .3s forwards'
    container.style.animation = 'naik .5s'
    editor.style.display = 'block';
    container.style.animationFillMode = 'forwards'
    layar.style.animation = 'tope .5s forwards'
    clearInterval(maju);
    sop = true;
    eot = false;
    }else{
        eot = true;
        sop = true;
        editor.style.animation = 'muncul2 .5s forwards'
        container.style.animation = 'naik2 .5s'
        container.style.animationFillMode = 'forwards'
        layar.style.animation = 'tope2 1.3s forwards'
    }
    clearInterval(maju);
}

// Apabila Mulai Diinput
function masukan(){
    timerJ = document.getElementById('InputJam').value;
    timerM = document.getElementById('InputMenit').value;
    timerD = document.getElementById('InputDetik').value;

    timerD = parseInt(timerD);
    timerM = parseInt(timerM);
    timerJ = parseInt(timerJ);

    if(timerD == 0){
        detik1.innerHTML = timerD;
        detik2.innerHTML = timerD;
        if(timerD == 0 && timerM == 0 && timerJ == 0){
            tombolStart.innerHTML = `Start`;
            sop = true;
            clearInterval(maju);
        }
    }else if(timerD <= 9 ){
        detik1.innerHTML = "0";
        detik2.innerHTML = timerD;
    }else if(timerD <= 19){;
        detik1.innerHTML = "1";
        detik2.innerHTML = timerD-10;
    }else if(timerD <= 29){
        detik1.innerHTML = "2";
        detik2.innerHTML = timerD-20;
    }else if(timerD <= 39){
        detik1.innerHTML = "3";
        detik2.innerHTML = timerD-30;
    }else if(timerD <= 49){
        detik1.innerHTML = "4";
        detik2.innerHTML = timerD-40;
    }else if(timerD <= 59){
        detik1.innerHTML = "5";
        detik2.innerHTML = timerD-50;
    }else{
        detik1.innerHTML = "0";detik2.innerHTML = "0";
    }
    // Menit
    if(timerM == 0){
        menit1.innerHTML = timerM;
        menit2.innerHTML = timerM;
    }else if(timerM <= 9 ){
        menit1.innerHTML = 0;
        menit2.innerHTML = timerM;
    }else if(timerM <= 19){
        menit1.innerHTML = "1";
        menit2.innerHTML = timerM-10;
    }else if(timerM <= 29){
        menit1.innerHTML = "2";
        menit2.innerHTML = timerM-20;
    }else if(timerM <= 39){
        menit1.innerHTML = "3";
        menit2.innerHTML = timerM-30;
    }else if(timerM <= 49){
        menit1.innerHTML = "4";
        menit2.innerHTML = timerM-40;
    }else if(timerM <= 59){
        menit1.innerHTML = "5";
        menit2.innerHTML = timerM-50;
    }else{
        menit1.innerHTML = "0";menit2.innerHTML = "0";
    }
    // Jam
    if(timerJ == 0){
        jam1.innerHTML = timerJ;
        jam2.innerHTML = timerJ;
    }else if(timerJ <= 9 ){
        jam1.innerHTML = "0";
        jam2.innerHTML = timerJ;
    }else if(timerJ <= 19){
        jam1.innerHTML = "1";
        jam2.innerHTML = timerJ-10;
    }else if(timerJ <= 24){
        jam1.innerHTML = "2";
        jam2.innerHTML = timerJ-20;
    }else{
        jam1.innerHTML = "0";jam2.innerHTML = "0";
    }
}

// Apabila Tombol Reset Ditekan Maka
function reset(){
        tombolStart.innerHTML = `Start`;
        timerJ = 0;
        timerD = 0;
        timerM = 0;
        if(timerD == 0){
            detik1.innerHTML = timerD;
            detik2.innerHTML = timerD;
            if(timerD == 0 && timerM == 0 && timerJ == 0){
                tombolStart.innerHTML = `Start`;
                sop = true;
                clearInterval(maju);
            }
        }else if(timerD <= 9 ){
            detik1.innerHTML = "0";
            detik2.innerHTML = timerD;
        }else if(timerD <= 19){
            detik1.innerHTML = "1";
            detik2.innerHTML = timerD-10;
        }else if(timerD <= 29){
            detik1.innerHTML = "2";
            detik2.innerHTML = timerD-20;
        }else if(timerD <= 39){
            detik1.innerHTML = "3";
            detik2.innerHTML = timerD-30;
        }else if(timerD <= 49){
            detik1.innerHTML = "4";
            detik2.innerHTML = timerD-40;
        }else if(timerD <= 59){
            detik1.innerHTML = "5";
            detik2.innerHTML = timerD-50;
        }else{
            detik1.innerHTML = "0";detik2.innerHTML = "0";
        }
        // Menit
        if(timerM == 0){
            menit1.innerHTML = timerM;
            menit2.innerHTML = timerM;
        }else if(timerM <= 9 ){
            menit1.innerHTML = 0;
            menit2.innerHTML = timerM;
        }else if(timerM <= 19){
            menit1.innerHTML = "1";
            menit2.innerHTML = timerM-10;
        }else if(timerM <= 29){
            menit1.innerHTML = "2";
            menit2.innerHTML = timerM-20;
        }else if(timerM <= 39){
            menit1.innerHTML = "3";
            menit2.innerHTML = timerM-30;
        }else if(timerM <= 49){
            menit1.innerHTML = "4";
            menit2.innerHTML = timerM-40;
        }else if(timerM <= 59){
            menit1.innerHTML = "5";
            menit2.innerHTML = timerM-50;
        }else{
            menit1.innerHTML = "0";menit.innerHTML = "0";
        }
        // Jam
        if(timerJ == 0){
            jam1.innerHTML = timerJ;
            jam2.innerHTML = timerJ;
        }else if(timerJ <= 9 ){
            jam1.innerHTML = "0";
            jam2.innerHTML = timerJ;
        }else if(timerJ <= 19){
            jam1.innerHTML = "1";
            jam2.innerHTML = timerJ-10;
        }else if(timerJ <= 24){
            jam1.innerHTML = "2";
            jam2.innerHTML = timerJ-20;
        }else{
            jam1.innerHTML = "0";jam.innerHTML = "0";
        }
        sop = true;
        clearInterval(maju);
}

// Timer Function
function timer(){
    // Pengaturan Waktu
    
    if(timerJ == 0){
        if(timerM > 0){
            if(timerD > 0){
                timerD--;
            }else{
                timerM--;
                timerD = 59;
            }
        }else{
            timerD--;
        }
    }else{
        if(timerM > 0){
            if(timerD > 0){
                timerD--;
            }else{
                timerM--;
                timerD = 59;
            }
        }else{
            timerJ--;
            timerD = 59;
            timerM = 59;
        }
    }

    // Angka Jam
    if(timerD == 0){
        detik1.innerHTML = timerD;
        detik2.innerHTML = timerD;
        if(timerD == 0 && timerM == 0 && timerJ == 0){
            tombolStart.innerHTML = `Start`;
            sop = true;
            clearInterval(maju);
        }
    }else if(timerD <= 9 ){
        detik1.innerHTML = "0";
        detik2.innerHTML = timerD;
    }else if(timerD <= 19){
        detik1.innerHTML = "1";
        detik2.innerHTML = timerD-10;
    }else if(timerD <= 29){
        detik1.innerHTML = "2";
        detik2.innerHTML = timerD-20;
    }else if(timerD <= 39){
        detik1.innerHTML = "3";
        detik2.innerHTML = timerD-30;
    }else if(timerD <= 49){
        detik1.innerHTML = "4";
        detik2.innerHTML = timerD-40;
    }else if(timerD <= 59){
        detik1.innerHTML = "5";
        detik2.innerHTML = timerD-50;
    }else{
        detik1.innerHTML = "0";detik2.innerHTML = "0";
    }

    // Menit
    if(timerM == 0){
        menit1.innerHTML = timerM;
        menit2.innerHTML = timerM;
    }else if(timerM <= 9 ){
        menit1.innerHTML = 0;
        menit2.innerHTML = timerM;
    }else if(timerM <= 19){
        menit1.innerHTML = "1";
        menit2.innerHTML = timerM-10;
    }else if(timerM <= 29){
        menit1.innerHTML = "2";
        menit2.innerHTML = timerM-20;
    }else if(timerM <= 39){
        menit1.innerHTML = "3";
        menit2.innerHTML = timerM-30;
    }else if(timerM <= 49){
        menit1.innerHTML = "4";
        menit2.innerHTML = timerM-40;
    }else if(timerM <= 59){
        menit1.innerHTML = "5";
        menit2.innerHTML = timerM-50;
    }else{
        menit1.innerHTML = "0";menit.innerHTML = "0";
    }

    // Jam
    if(timerJ == 0){
        jam1.innerHTML = timerJ;
        jam2.innerHTML = timerJ;
    }else if(timerJ <= 9 ){
        jam1.innerHTML = "0";
        jam2.innerHTML = timerJ;
    }else if(timerJ <= 19){
        jam1.innerHTML = "1";
        jam2.innerHTML = timerJ-10;
    }else if(timerJ <= 24){
        jam1.innerHTML = "2";
        jam2.innerHTML = timerJ-20;
    }else{
        jam1.innerHTML = "0";jam.innerHTML = "0";
    }
}