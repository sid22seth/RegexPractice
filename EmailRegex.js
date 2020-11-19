function CheckEmailUsingRegex(email)
{
    let emailRegex = new RegExp(/^[a-zA-Z0-9]+([-.+_#$][a-zA-Z0-9]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$/);
    if(emailRegex.test(email))
    console.log("Valid email");
    else
    console.log("Invalid email");
}
CheckEmailUsingRegex("siddhiseth3009@gmail.com");