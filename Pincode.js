function CheckPincodeUsingRegex(pincode)
{
    let pinRegex = new RegExp(/^[0-9]{3}[ ]?[0-9]{3}$/);
    if(pinRegex.test(pincode))
    console.log("Valid pincode");
    else
    console.log("Invalid pincode");
}
CheckPincodeUsingRegex("562 985");