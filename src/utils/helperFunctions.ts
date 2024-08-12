export const sanitizeToLetters = (str) => str.replace(/[^a-zA-Z]/g, "");
export const sanitizeToPhoneNumber = (str) => str.replace(/[^0-9]/g, "");
export const sanitizeToEmail = (str) => str.replace(/[^a-zA-Z0-9.!#$%&'*+/=?^_`{|}~@-]/g, "")