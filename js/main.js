// Call Elements
let iconShare = document.querySelector(".i-share");
let shareInfo = document.querySelector(".share");

function click() {
    if (window.innerWidth > 730) {
        shareInfo.classList.contains("desktopInfo") ? shareInfo.classList.remove("desktopInfo") : shareInfo.classList.add("desktopInfo")
    }
    else {
        shareInfo.classList.contains("mobileInfo") ? shareInfo.classList.remove("mobileInfo") : shareInfo.classList.add("mobileInfo")
    }
}
iconShare.addEventListener("click", click)

