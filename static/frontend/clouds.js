


const addListeners = (cloudAnim, element) => {
    cloudAnim.addEventListener('finish', function (e) {
        let anim = addAnimation(element);
        addListeners(anim, element);
    }, false);
}

const randomNumber = (max, min) => {
    return Math.floor((Math.random() * (max - min)) + min);
}

const addAnimation = (ele) => {

    ele.style.top = Math.floor(Math.random() * window.innerHeight * 0.75) + "px";

    let anim = ele.animate([
        { transform: 'translate(-300px)', opacity: 0 },
        { opacity: 1},
        { transform: 'translate( -' + (window.innerWidth + 150) + 'px)', opacity: 0}
    ],
        {
            duration: window.innerWidth * 20,
            iterations: 1,
            easing: "linear",
            delay: randomNumber(0, window.innerWidth) * 20,
        });
    return anim;
}



let cloudContainer = document.getElementById("cloud-container");
cloudContainer.style.height = Math.floor(window.innerHeighteight * 0.75 )+ "px";

for (let i = 1; i <= 30; i++) {

    let cloudDiv = document.createElement("div");
    let image = document.createElement("img");
    let cloud_counter = ( (i % 12) !== 0) ? i % 12 : 1;
    image.src = "/static/frontend/media/Clouds/Cloud" + cloud_counter + ".png";
    cloudDiv.appendChild(image);
    cloudDiv.setAttribute("class", "cloud");
    let cloudAnim = addAnimation(cloudDiv);
    addListeners(cloudAnim, cloudDiv);
    cloudContainer.appendChild(cloudDiv);
}