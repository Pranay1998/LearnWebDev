const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox-icon-2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your user name");
    if (myName) {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

let storedName = localStorage.getItem("name");
if (!storedName) {
    setUserName();
} else {
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}


myButton.onclick = () => { setUserName(); };
