const validation = (value, rules, form) =>{
  let valid = true;

  for(let rule in rules){
    switch(rule){
      case 'isRequired':
        valid = valid && validateRequired(value)
        break;

      case 'isEmail':
        valid = valid && validatEmail(value)
        break;

      case 'minLength':
          valid = valid && validatMinLength(value, rules[rule])
          break;

      case 'maxLength':
            valid = valid && validatMaxLength(value, rules[rule])
            break;
      case 'confirmPass':
        valid = valid && validatConfirmPass(value, form[rules.confirmPass].value)
        break;

      default:
        valid = true;


    }
  }
  return valid;
}

const validatConfirmPass =(cnf, pass)=>{
return cnf === pass;
}

const validatMinLength =(value, ruleValue) =>{
  if(value.length >= ruleValue){
    return true;
  }
  return false;
}

const validatMaxLength =(value, ruleValue) =>{
  if(value.length <= ruleValue){
    return true;
  }
  return false;
}

const validateRequired = value =>{
  if(value !== ''){
    return true;
  }
  return false;
}

const validatEmail= email =>{
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email).toLocaleLowerCase());
}
export default validation;