document.addEventListener('DOMContentLoaded',()=>{
    //Form Selection
    const form = document.getElementById("registration-form");
    //Feedback Division Selection
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function(event){
        event.preventDefault(); //pPrevents default form submssion
    })

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    //Initialize validation variable
    let isValid = true;
    const messages =[];

    //Username Validation

    if(username.length<3){
        isValid =false;
        messages.push("Username must be atleast 3 characters");

    }
    //Email verification
    if(!email.includes("@") || !email.includes(".")){
        isValid = false;
        messages.push('Email must include both"@"and"." characters');
    }

    //password Verification
    if(password.length<8){
        isValid =false;
        messages.push("password must have more than 8 characters");
    }

    //Displaying feedback
    feedbackDiv.style.display = "block";
    if(isValid = true){
        feedbackDiv.textContent ="Registration successful!";
        feedbackDiv.style.color ="#28a745";
    }else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color= "#dc3545";
    }


});