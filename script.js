const userInterface = new UI();
const average = new Average();

function errorMessage(input,message){
    input.className = "form-control is-invalid";
    const span = input.nextElementSibling;
    span.innerText = message;
    span.className = "invalid-feedback";
}

function success(input){
    input.className = "form-control is-valid";
}

userInterface.form.addEventListener('submit',function(e){
    e.preventDefault();
    let isValid = true;

    if(userInterface.vize1txt.value === ''){
        errorMessage(userInterface.vize1txt,"1.Vize Puanı Zorunludur");
        isValid = false;
    }else{
        success(userInterface.vize1txt);
    }

    if(userInterface.vize2txt.value === ''){
        errorMessage(userInterface.vize2txt,"2.Vize Puanı Zorunludur");
        isValid = false;
    }else{
        success(userInterface.vize2txt);
    }

    if(userInterface.txtFinal.value === ''){
        errorMessage(userInterface.txtFinal,"Final Puanı Zorunludur");
        isValid = false;
    }else{
        success(userInterface.txtFinal);
    }

    if(isValid){
        average.sumAverage(userInterface.vize1txt.value,userInterface.vize2txt.value,userInterface.txtFinal.value);
    }
});
