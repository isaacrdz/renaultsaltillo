
export const showFieldError = (error,messages) => {
    if (error){
        let helperText = error?.message;
        if (messages) {
            helperText = messages[error.type];
        }
        return { error: true, helperText }
    }
    return { error: false };
}

export const phoneFormat = (num) => {
    const number = num.replace(/\D+|(\s)+/g,'').replace(/(\d{2})(\d{4})(\d{4})/,'$1 $2 $3');
   return number;
}

export const trimAndLowerCase = (str) => {
    str.replace(/\s/g, '');
    return str.toLowerCase();
}

export const capitalizeFirstLetter = (str) => {
    return str.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}