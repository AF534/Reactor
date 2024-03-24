const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form1"),
qrInput1 = wrapper.querySelector(".form2"),
qrInput2 = wrapper.querySelector(".form3"),
qrInput3 = wrapper.querySelector(".form4"),
qrInput4 = wrapper.querySelector(".form5"),
// qrInput2 = wrapper.querySelector(".form3"),
// qrInput3 = wrapper.querySelector(".form4"),
// qrInput4 = wrapper.querySelector(".form5"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;
let preValue1;
let preValue2;
let preValue3;
let preValue4;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    let qrValue1 = qrInput1.value.trim();
    let qrValue2 = qrInput2.value.trim();
    let qrValue3 = qrInput3.value.trim();
    let qrValue4 = qrInput4.value.trim();
    if(!qrValue, !qrValue1,!qrValue2,!qrValue3, !qrValue4 || preValue === qrValue || preValue1===qrValue1 || preValue2===qrValue2 || preValue3===qrValue3 || preValue4=== qrValue4) return;
    preValue = qrValue;
    preValue1 = qrValue1;
    preValue2 = qrValue2;
    preValue3 = qrValue3;
    preValue4 = qrValue4;
    if(qrValue3 =="API2023") {
    
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue} + ${qrValue1}+ ${qrValue2} + ${qrValue3} + ${qrValue4}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
        
        wrapper.style.height ="780px"; 
    
    });
}
   
   
  
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";        
    }
});
qrInput1.addEventListener("keyup", () => {
    if(!qrInput1.value.trim()) {
        wrapper.classList.remove("active");
        preValue1 = "";        
    }
});
qrInput2.addEventListener("keyup", () => {
    if(!qrInput2.value.trim()) {
        wrapper.classList.remove("active");
        preValue2 = "";        
    }
});
qrInput3.addEventListener("keyup", () => {
    if(!qrInput3.value.trim()) {
        wrapper.classList.remove("active");
        preValue3 = "";        
    }
});
qrInput4.addEventListener("keyup", () => {
    if(!qrInput4.value.trim()) {
        wrapper.classList.remove("active");
        preValue4 = "";        
    }
});