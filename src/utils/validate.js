export const checkValidateData = (email,password)=>{
    const isvalidemail =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isvalidpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(isvalidemail === false){
        return "Email is not Valid";
    }
    if(isvalidpassword === false){
        return "Password is not Valid";
    }
    return null;
}