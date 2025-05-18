const checkButton = document.querySelector(".btn-check");
const popup=document.querySelector(".popup");

checkButton.onclick=()=>{
    popup.classList.add("active");
}
const typeSelect=document.getElementById("type");
const extraField=document.getElementById("extraField");

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
    }
});