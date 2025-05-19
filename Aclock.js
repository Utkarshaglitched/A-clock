let tk = document.getElementById('circle1');
for (let i = 0; i <= 59; i++) {
    let mainticks = document.createElement('div');
    mainticks.className = "tick";
    mainticks.id = `tick${i}`;
    tk.appendChild(mainticks);
}

let pc = document.querySelectorAll(".tick");

//Right Side
cnt = 0;
sidecnt = 0;
let numcnt = 0;
for (let i = 0; i <= 29; i++) {
    let chkid = pc[sidecnt].id;
    if (sidecnt % 5 === 0) {
        pc[sidecnt].innerHTML = `<span>${numcnt}</span>`;
        pc[sidecnt].style.transform = `rotate(${cnt}deg) translateY(-35vh)`;
        pc[sidecnt].style.background = "none";
        let span = pc[sidecnt].querySelector("span");
        span.innerText = `${numcnt}`;
        span.className='thetick';
        span.style.transform = `rotate(${-cnt}deg)`;
        span.style.display = "inline-block";
        span.style.transformOrigin = "center";
        
        if (sidecnt % 15 === 0) {
            span.style.fontSize = "7vh";
            span.style.color = "red";
        }
        else {
            span.style.fontSize = "5vh";
        }

        numcnt++;


    }
    else {
        pc[sidecnt].style.transform = `rotate(${cnt}deg) translateY(34.5vh)`;
    }

    cnt += 6;
    sidecnt++;
}

//Left Side
cnt = 0;
for (let i = 0; i <= 29; i++) {
    if (sidecnt % 5 === 0) {
        pc[sidecnt].innerHTML = `<span>${numcnt}</span>`;
        pc[sidecnt].style.transform = `rotate(${cnt}deg) translateY(30vh)`;
        pc[sidecnt].style.background = "none";
        let span = pc[sidecnt].querySelector("span");
        span.innerText = `${numcnt}`;
        span.className="tickleft";
        span.id=`tickleft${sidecnt}`;
        span.style.transform = `rotate(${-cnt}deg)`;
        span.style.display = "inline-block";
        span.style.transformOrigin = "center";
        if (sidecnt % 15 === 0) {
            span.style.fontSize = "7vh";
            span.style.color = "red";
        }
        else {
            span.style.fontSize = "5vh";
        }

        numcnt++;
    }
    else {
        pc[sidecnt].style.transform = `rotate(${cnt}deg) translateY(-34.5vh)`;
    }

    cnt += 6;
    sidecnt++;
}

//Time display
let hands = document.querySelectorAll('.hand');
let digidisplay=document.getElementById('digi');
let but = document.getElementById('clkcng');
function timing() {
    let tm = new Date();

    let calmili=tm.getMilliseconds();
    let calsec = tm.getSeconds();
    let calmin = tm.getMinutes();
    let calhrs = tm.getHours();

    but.innerText=calmili;
    hands[0].style.transform = `rotate(${calsec * 6}deg)`;
    hands[1].style.transform = `rotate(${calmin * 6}deg)`;
    hands[2].style.transform = `rotate(${calhrs * 30 + calmin * 0.5}deg)`;

    if (tm.getHours() >= 0 && tm.getHours() <= 6) {
        document.body.style.backgroundImage = "url(ratri.jpg)";
        document.body.style.backgroundSize = "cover";
    }

    else if (tm.getHours() > 6 && tm.getHours() <= 12) {
        document.body.style.backgroundImage = "url(subah.jpg)";
        document.body.style.backgroundSize = "cover";
    }

    else if (tm.getHours() > 12 && tm.getHours() <= 18) {
        document.body.style.backgroundImage = "url(dopahar.jpg)";
        document.body.style.backgroundSize = "cover";
    }

    else {
        document.body.style.backgroundImage = "url(ratri.jpg)";
        document.body.style.backgroundSize = "cover";
    }
}
setInterval(timing, 1);

//face change
let face = document.getElementById('circle1')
face.style.backgroundImage = `url(jhoola.jpg)`;
face.style.backgroundSize = "cover";
let cntIndex = 0;
function afclk() {
    let images = ["phool.jpg", "keshav.jpg", "taree.jpg", "jhoola.jpg"];
    let face = document.getElementById('circle1')
    face.style.backgroundImage = `url(${images[cntIndex]})`;
    face.style.backgroundSize = "cover";
    cntIndex = (cntIndex + 1) % images.length;
}


but.addEventListener('click', afclk);


function onloading() {
    let load = document.getElementById('circle1');
    load.classList.add("outinanimation");
}
window.onload = onloading;

