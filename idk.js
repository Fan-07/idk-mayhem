const button = document.getElementById("idkButton");
const title = document.getElementById("mainText");

button.addEventListener("click", () => {
    title.textContent = "idk";
});

function createIdk() {
    const idk = document.createElement("div");

    idk.className = "idk-float";
    idk.textContent = "idk";

    idk.style.left = Math.random() * window.innerWidth + "px";
    idk.style.fontSize = (20 + Math.random() * 60) + "px";

    const duration = 5 + Math.random() * 10;
    idk.style.animationDuration = duration + "s";

    document.body.appendChild(idk);

    setTimeout(() => {
        idk.remove();
    }, duration * 1000);
}

setInterval(createIdk, 150);

document.addEventListener("mousemove", (e) => {
    const idk = document.createElement("div");

    idk.className = "idk-float";
    idk.textContent = "idk";

    idk.style.left = e.pageX + "px";
    idk.style.top = e.pageY + "px";
    idk.style.fontSize = "14px";
    idk.style.animationDuration = "2s";

    document.body.appendChild(idk);

    setTimeout(() => {
        idk.remove();
    }, 2000);
});
