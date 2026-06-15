const turnSide = () => {
    const imgDom = document.querySelector("img")

    if (imgDom.style.transform === "scale(-1, 1)") {
        imgDom.style.transform = "scale(1, 1)"
    } else {
        imgDom.style.transform = "scale(-1, 1)"
    }
}

const turnVertical = () => {
    const imgDom = document.querySelector("img")

    if (imgDom.style.transform === "scale(1, -1)") {
        imgDom.style.transform = "scale(1, 1)"
    } else {
        imgDom.style.transform = "scale(1, -1)"
    }
}
