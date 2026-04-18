function validateForm() {
    document.getElementsByClassName("error").innerHTML = ""; // Clear previous error messages
    
    let isValid = true;

    /*PERSONAL INFO (full name, birthday, sex, email)*/

    /*name validation (at least 2 characters)*/
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your full name.";
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Name must be at least 2 characters long.";
        isValid = false;
    }

    /*birthday validation (must be at least 13 years old)*/
    const bdayInput = document.getElementById("bday").value;
    if (bdayInput === "") {
        document.getElementById("bdayError").innerHTML = "Please enter your birthdate.";
        isValid = false;
    } else {
        const birthdate = new Date(bdayInput);
        const today = new Date();
        const thirteenYearsAgo = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
        if (birthdate > thirteenYearsAgo) {
            document.getElementById("bdayError").innerHTML = "You must be at least 13 years old to register.";
            isValid = false;
        }
    }

    /*sex validation (must select one)*/
    const sexOptions = document.getElementsByName("sex");
    let sex = false;
    for (let i = 0; i < sexOptions.length; i++) {
        if (sexOptions[i].checked === true) {
            sex = true;
        }
    }
    if (sex === false) {
        document.getElementById("sexError").innerHTML = "Please select your sex.";
        isValid = false;
    }

    /*email validation (must be a valid email, including @ and .)*/
    const email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Please enter your email.";
        isValid = false;
    } else if (email.includes("@") === false || email.includes(".") === false) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }


    /*ACCOUNT INFO (username, password, confirm password)*/
    
    /*username validation (at least 10 characters, only specific characters allowed)*/
    const username = document.getElementById("user").value.trim();
    if (username === "") {
        document.getElementById("userError").innerHTML = "Please enter a username.";
        isValid = false;
    } else if (username.length < 10) {
        document.getElementById("userError").innerHTML = "Username must be at least 10 characters long.";
        isValid = false;
    } else if (/^[a-zA-Z0-9_]+$/.test(username) === false) {
        document.getElementById("userError").innerHTML = "Username can only contain letters, numbers, and underscores.";
        isValid = false;
    }

    /*password validation (at least 10 characters, must include at least one uppercase letter, one lowercase letter, and one number)*/
    const password = document.getElementById("pass").value;
    if (password === "") {
        document.getElementById("passError").innerHTML = "Please enter a password.";
        isValid = false;
    } else if (password.length < 10) {
        document.getElementById("passError").innerHTML = "Password must be at least 10 characters long.";
        isValid = false;
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password) === false) {
        document.getElementById("passError").innerHTML = "Password must include at least one uppercase letter, one lowercase letter, and one number.";
        isValid = false;
    }

    /*confirm password validation (must match the password)*/
    const confirmPassword = document.getElementById("confirm").value;
    if (confirmPassword === "") {
        document.getElementById("confirmError").innerHTML = "Please confirm your password.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match.";
        isValid = false;
    }


    /*TOPIC INFO (pronouns, reasons for volunteering, region)*/

    /*pronouns validation (must select one)*/
    const pronouns = document.getElementById("pronouns").value;
    if (pronouns === "") {
        document.getElementById("pronounsError").innerHTML = "Please select your pronouns.";
        isValid = false;
    }

    /*reasons for volunteering validation (must select at least one)*/
    const reasonOptions = document.getElementsByName("reason");
    let reason = false;
    for (let i = 0; i < reasonOptions.length; i++) {
        if (reasonOptions[i].checked === true) {
            reason = true;
        }
    }
    if (reason === false) {
        document.getElementById("reasonError").innerHTML = "Please select at least one reason for volunteering.";
        isValid = false;
    }

    /*region validation (must select one)*/
    const region = document.getElementById("region").value;
    if (region === "") {
        document.getElementById("regionError").innerHTML = "Please select your region.";
        isValid = false;
    }


    /*success message*/
    if (isValid === true) {
        alert("Registration successful! Thank you for signing up to volunteer with us.");
    }

    return isValid;
}