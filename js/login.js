const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const loginBtn = document.querySelector("#loginForm button");
const secondGreetings = document.querySelector("#secondGreetings");

const savedName = localStorage.getItem("name");

const ADDHIDDEN = "hidden";

if (savedName === null){
    loginForm.classList.remove(ADDHIDDEN);
} else {
    loginInput.classList.add(ADDHIDDEN);
    loginBtn.classList.add(ADDHIDDEN);
    secondGreetings.innerText = `Hello ${savedName}`;
    secondGreetings.classList.remove(ADDHIDDEN);
}

function handleLoginBtn(event){
    event.preventDefault;
    const name = loginInput.value;
    loginForm.classList.add(ADDHIDDEN);
    localStorage.setItem("name", name);
}
loginBtn.addEventListener("click", handleLoginBtn);