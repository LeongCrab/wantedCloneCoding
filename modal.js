let body = document.getElementsByTagName("body");
{
    let signUpButton = document.getElementById("signUpBtn");
    let signUpModal = document.getElementById("signUpModal");
    let signUpCloseButton = document.getElementById("signUpCloseButton");
    let signUpOverlay = document.getElementById("signUpOverlay");
    let userEmail = document.getElementById("userEmail");
    let emailError = document.getElementById("emailError");
    let mailLogin = document.getElementById("mailLogin");

    signUpButton.addEventListener("click", () => {
        signUpModal.style.visibility = "visible";
        signUpOverlay.style.visibility = "visible";
        body.item(0).style.overflow = "hidden";
        userEmail.focus();
    });

    signUpOverlay.addEventListener("click", () => {
        userEmail.value = null;
        emailError.innerText = "";
        userEmail.style.borderColor = "blue";
        signUpModal.style.visibility = "hidden";
        signUpOverlay.style.visibility = "hidden";
        body.item(0).style.overflow = "auto";
    });

    signUpCloseButton.addEventListener("click", () => {
        userEmail.value = null;
        emailError.innerText = "";
        userEmail.style.borderColor = "blue";
        signUpModal.style.visibility = "hidden";
        signUpOverlay.style.visibility = "hidden";
        body.item(0).style.overflow = "auto";
    });

    userEmail.addEventListener("focusout", () => {
        userEmail.style.borderColor = "#e1e2e3";
    });

    userEmail.addEventListener("focusin", () => {
        userEmail.style.borderColor = "blue";
        userEmail.style.outline = "none";
    });

    function checkEmail(str){
        let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(str))
            return false;
        else
            return true;
    }

    mailLogin.addEventListener("click", () => {
        if (checkEmail(userEmail.value)) {
            emailError.innerText = "";
            userEmail.style.borderColor = "#e1e2e3";
            userEmail.value = null;
            signUpModal.style.visibility = "hidden";
            signUpOverlay.style.visibility = "hidden";
            joinModal.style.visibility = "visible";
            joinOverlay.style.visibility = "visible";
        }
        else {
            userEmail.style.borderColor = "red";
            emailError.innerText = "올바른 이메일 형식을 입력해주세요.";
        }
    });
}
{
    let joinModal = document.getElementById("joinModal");
    let joinCloseButton = document.getElementById("joinCloseButton");
    let joinOverlay = document.getElementById("joinOverlay");
    const inputs = document.querySelectorAll('.joinInput');
    inputs.forEach( (input) => {
        input.addEventListener("focusout", () => {
            input.style.borderColor = "#e1e2e3";
        });
    });
    inputs.forEach( (input) => {
        input.addEventListener("focusin", () => {
            input.style.borderColor = "blue";
            input.style.outline = "none";
        });
    });
    let name = document.joinForm.name;
    let password = document.joinForm.password;
    let passwordAgain = document.joinForm.passwordAgain;

    name.addEventListener("input", () => {
        name.style.borderColor = "#e1e2e3";
        nameError.innerText = "";
    });
    password.addEventListener("input", () => {
        password.style.borderColor = "#e1e2e3";
        pwError.innerText = "";
    });
    passwordAgain.addEventListener("input", () => {
        passwordAgain.style.borderColor = "#e1e2e3";
        pwAgainError.innerText = "";
    });
    function checkMobileNumber(str){
        let reg_mobile_number1 = /^01[1,6,7,8,9]?([0-9]{7,8})$/;
        let reg_mobile_number2 = /^010?([0-9]{8})$/;
        if(!reg_mobile_number1.test(str) && !reg_mobile_number2.test(str))
            return false;
        else
            return true;
    }
    
    function checkPassword(str){
        let reg_password = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
        if(!reg_password.test(str))
            return false;
        else
            return true;
    }
    
    let country = document.joinForm.country;
    country.addEventListener("change", () => {
        clearInterval(remainedTime);
        timeCode.innerText = "";
        codeGuide.innerText = "";
        document.joinForm.mobileNumber.value = null;
        mobileCodeSubmit.style.opacity = "0";
        mobileCodeSubmit.disabled = true;
        mobileCodeButton.disabled = true;
        let selected = document.getElementById("selected");
        const KoreaOnly = document.querySelectorAll(".KoreaOnly");
        if(country.value == "+82"){
            selected.opacity = "1";
            country.style.opacity = "0";
            KoreaOnly.forEach( (KO) => {
                KO.style.display = "block";
            });
        }
        else{
            selected.opacity = "0";
            country.style.opacity = "1";
            KoreaOnly.forEach( (KO) => {
                KO.style.display = "none";
            });
        }
    });
    let mobileCodeButton = document.getElementById("mobileCodeButton");
    let mobileNumber = document.joinForm.mobileNumber;
    let codeGuide = document.getElementById("codeGuide");
    let timeCode = document.getElementById("timeCode");
    let mobileCode = document.joinForm.mobileCode;
    let mobileCodeSubmit = document.getElementById("mobileCodeSubmit");
    let mobileInputError = document.getElementById("mobileInputError");

    mobileNumber.addEventListener("input", () => {
        if (!checkMobileNumber(mobileNumber.value)){
            if(!mobileNumber.value){
                mobileInputError.innerText = "휴대폰 번호는 필수정보 입니다.";
            }else{
                mobileInputError.innerText = "올바른 전화번호를 입력해 주세요.";
            }
            mobileCodeSubmit.style.opacity = "0";
            mobileCodeSubmit.disabled = true;
            mobileCodeButton.disabled = true;
            mobileNumber.style.borderColor = "red";
            codeGuide.innerText = "";
            timeCode.innerText = "";
        }else {
            mobileCodeButton.disabled = false;
            mobileInputError.innerText = "";
            mobileInputError.style.borderColor = "#e1e2e3";
        }
    });

    function secToMin(num) {
        let mm = parseInt(num / 60);
        let ss = num % 60;
        if(ss < 10)
            min = `0${mm}:0${ss}`;
        else
            min = `0${mm}:${ss}`;
        return min
    }

    let remainedTime;
    mobileCodeButton.addEventListener("click", () =>{
        mobileCodeButton.disabled = true;
        mobileCode.disabled = false;
        codeGuide.innerText = "인증번호가 요청되었습니다.";
        codeGuide.style.color = "#36f";
        timeCode.style.color = "#36f";
        mobileCodeSubmit.style.opacity = "1";
        mobileCodeSubmit.disabled = false;
        let limitTime = 300;
        timeCode.innerText = "유효시간 " + secToMin(limitTime);
        limitTime--;
        remainedTime = setInterval(() => {
            timeCode.innerText = "유효시간 " + secToMin(limitTime);
            if(limitTime == 0){
                codeGuide.innerText = "인증 시간이 만료됐어요. 다시 시도해 주세요.";
                codeGuide.style.color = "#fe415c";
                timeCode.style.color = "#fe415c";
                mobileCodeButton.disabled = false;
                mobileCode.disabled = true;
                mobileCodeSubmit.style.opacity = "0";
                mobileCodeSubmit.disabled = true;
                clearInterval(remainedTime);
            }
            limitTime--;
        }, 1000);
    });
    
    mobileCodeSubmit.addEventListener("click", () =>{
        mobileCodeSubmit.disabled = true;
        mobileCode.disabled = true;
        mobileNumber.disabled = true;
        codeGuide.innerText = "";
        clearInterval(remainedTime);
        timeCode.innerText = "";
    });

    let agreeAll = document.checkForm.agreeAll;
    let agreePrivacy = document.checkForm.agreePrivacy;
    let agreeEventEmail = document.checkForm.agreeEventEmail;
    let modalFooterButton = document.getElementById("modalFooterButton");

    agreeAll.addEventListener("change", () => {
        if(agreeAll.checked){
            modalFooterButton.disabled = false;
            agreePrivacy.checked = true;
            agreeEventEmail.checked = true;
        }
        else{
            modalFooterButton.disabled = true;
            agreePrivacy.checked = false;
            agreeEventEmail.checked = false;
        }
    });

    agreePrivacy.addEventListener("change", () => {
        if (agreePrivacy.checked)
            modalFooterButton.disabled = false;
        else
            modalFooterButton.disabled = true;
        if (agreeEventEmail.checked && agreePrivacy.checked)
            agreeAll.checked = true;
        else
            agreeAll.checked = false;
    });

    agreeEventEmail.addEventListener("change", () =>{
        if (agreeEventEmail.checked && agreePrivacy.checked)
            agreeAll.checked = true;
        else
            agreeAll.checked = false;
    });

    let nameError = document.getElementById("nameError");
    let pwError = document.getElementById("pwError");
    let pwAgainError = document.getElementById("pwAgainError");
    
    modalFooterButton.addEventListener("click", () => {
        if(!name.value){
            nameError.innerText = "이름은 필수정보입니다.";
            name.style.borderColor = "red";
        }
        else if(!mobileNumber.value){
            mobileInputError.innerText = "휴대폰 번호는 필수정보 입니다.";
            mobileNumber.style.borderColor = "red";
        }
        else if(!checkPassword(password.value)){
            pwError.innerText = "비밀번호 조건을 확인해주세요.";
            password.style.borderColor = "red";
        }
        else if(password.value != passwordAgain.value){
            pwAgainError.innerText = "비밀번호를 다시 확인해주세요.";
            passwordAgain.style.borderColor = "red";
        }
        else{
            alert("회원가입이 완료되었습니다.");
            joinModal.style.visibility = "hidden";
            joinOverlay.style.visibility = "hidden";
            body.item(0).style.overflow = "auto";
        }
    });
    joinCloseButton.addEventListener("click", () => {
        const messages = document.querySelectorAll('.modalError, #codeGuide, #timeCode');
        const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
        let retValue = confirm("회원가입을 취소하시겠습니까?");
        if(retValue){
            inputs.forEach( (input) => {
                input.value = null;
                input.style.borderColor = "#e1e2e3";
            });
            clearInterval(remainedTime);
            messages.forEach( (message) => {
                message.innerText = "";
            });
            checkBoxes.forEach( (checkbox) => {
                checkbox.checked = false;
            });
            mobileNumber.disabled = false;
            modalFooterButton.disabled = true;
            joinModal.style.visibility = "hidden";
            joinOverlay.style.visibility = "hidden";
            body.item(0).style.overflow = "auto";
        }
    });
}
