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
    if(qrValue3 =="CHS1001" || qrValue3== "CHS1002" || qrValue3== "CHS1003" || qrValue3== "CHS1004" || qrValue3== "CHS1005" || qrValue3== "CHS1006" || qrValue3== "CHS1007" || qrValue3== "CHS1008" || qrValue3== "CHS1009" || qrValue3== "CHS1010" || qrValue3== "CHS1011" || qrValue3== "CHS1012" || qrValue3== "CHS1013" || qrValue3== "CHS1014" || qrValue3== "CHS1015"
    || qrValue3== "CHS1016" || qrValue3== "CHS1017" || qrValue3== "CHS1018" || qrValue3== "CHS1019"|| qrValue3== "CHS1020"|| qrValue3== "CHS1021"|| qrValue3== "CHS1022"|| qrValue3== "CHS1023"|| qrValue3== "CHS1024"|| qrValue3== "CHS1025"|| qrValue3== "CHS1026"|| qrValue3== "CHS1027"|| qrValue3== "CHS1028"|| qrValue3== "CHS1029"|| qrValue3== "CHS1030"|| qrValue3== "CHS1031"|| qrValue3== "CHS1032"|| qrValue3== "CHS1033"|| qrValue3== "CHS1034"|| qrValue3== "CHS1035"|| qrValue3== "CHS1036"|| qrValue3== "CHS1037"|| qrValue3== "CHS1038"|| qrValue3== "CHS1039"|| qrValue3== "CHS1040"|| qrValue3== "CHS1041"|| qrValue3== "CHS1042"|| qrValue3== "CHS1043"|| qrValue3== "CHS1044"|| qrValue3== "CHS1045"|| qrValue3== "CHS1046"|| qrValue3== "CHS1047"|| qrValue3== "CHS1048"|| qrValue3== "CHS1049"|| qrValue3== "CHS1050"|| qrValue3== "CHS1051"|| qrValue3== "CHS1052"|| qrValue3== "CHS1053"|| qrValue3== "CHS1054"|| qrValue3== "CHS1055"|| qrValue3== "CHS1054"|| qrValue3== "CHS1055"|| qrValue3== "CHS1056"|| qrValue3== "CHS1057"|| qrValue3== "CHS1058"|| qrValue3== "CHS1059"|| qrValue3== "CHS1060"|| qrValue3== "CHS1061"|| qrValue3== "CHS1062"|| qrValue3== "CHS1063"|| qrValue3== "CHS1064"|| qrValue3== "CHS1065"|| qrValue3== "CHS1066"|| qrValue3== "CHS1067"|| qrValue3== "CHS1068"|| qrValue3== "CHS1069"|| qrValue3== "CHS1070"|| qrValue3== "CHS1071"|| qrValue3== "CHS1072"|| qrValue3== "CHS1073"|| qrValue3== "CHS1074"|| qrValue3== "CHS1075"|| qrValue3== "CHS1076"|| qrValue3== "CHS1077"|| qrValue3== "CHS1078"|| qrValue3== "CHS1079"|| qrValue3== "CHS1080"|| qrValue3== "CHS1081"|| qrValue3== "CHS1082"|| qrValue3== "CHS1083"|| qrValue3== "CHS1084"|| qrValue3== "CHS1085"|| qrValue3== "CHS1086") {
    
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