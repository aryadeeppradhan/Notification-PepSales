const checkButton = document.querySelector(".btn-check");
const popup=document.querySelector(".popup");

checkButton.onclick=()=>{
    popup.classList.add("active");
}
const typeSelect=document.getElementById("type");
const extraField=document.getElementById("extraField");
const message=document.getElementById("message");
typeSelect.addEventListener("change",()=>{
    const selected=typeSelect.value;
    extraField.innerHTML="";
    if(selected==="sms"){
        extraField.innerHTML=`
        <div class="extrainputs">
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" required>
        </div>`;
        setTimeout(() => {
            const phoneInput = document.querySelector("#phone");
            window.intlTelInput(phoneInput, {
            initialCountry: "in",
            separateDialCode: true,
            });
        }, 10);
    }else if(selected === "email"){
        extraField.innerHTML=`
        <div class="extrainputs">
        <label for="email">Email Address:</label>
        <input type="email" id="email" required>
        </div>`;
    }else{
        const form = document.getElementById("notification-form");
form.addEventListener("submit", () => {
    const msg=message.value;
    const username=document.getElementById("username").value;
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification(`${username} sent you a message!`, {
                body: msg,
                icon:"./img/logo.png",
            });
        } else {
            alert("Notification permission denied.");
        }
    });
});
    }
});