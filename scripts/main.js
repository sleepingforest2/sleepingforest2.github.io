let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
/*
document.querySelector("html").addEventListener("click", () => {
  alert("别戳我，我怕疼。");
});
*/
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.png") {
    myImage.setAttribute("src", "images/dog.jpg");
  } else {
    myImage.setAttribute("src", "images/cat.png");
  }
};
let myButton = document.querySelector("button");
function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "好困啊，" + myName;
}
function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}

myButton.onclick = function () {
  setUserName();
};
