'use strict';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

//Input array

let inputArray = [username,email,password,confirmPassword];
//Functions

//Show error functions
const showError = function(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;

}
// show success function
const showSuccess = function(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//is valid email
const isValidEmail = function(input){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase()); //test checks the inside input comapare it with regex and throws false or true.
}

//check email
const checkEmail = function(input){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(String(input.value).toLowerCase().trim())){
    showSuccess(input); 
  }else if (input.value === ''){
    showError(input, 'Email Address is Required');
  }else{
    showError(input, 'Email Address is not valid');
  }
}
//check required function
// let input;
const checkRequired = function(inputArr){
  inputArr.forEach((input) =>{
    if(input.value === ''){
      showError(input , `${message(input)} is required`);
    }else{
      showSuccess(input);
    }
  })
}

//min max function

const checkLength = function(inputAr,  min , max ){
  if(inputAr.value === ''){
    showError( inputAr , `Username is Required`);
  }else if(inputAr.value.length < min){
    showError( inputAr, `not enough characters`);
  }else if(inputAr.value.length > max){
    showError(inputAr, `more characters`);
  }else{
    showSuccess(inputAr);
  }
}

//password match
const checkPasswordMatch = function(input1, input2){
  if(input1.value === ''){
    showError(input1, 'Password is Required');
  }else if(input2.value === ''){
    showError(input2, 'Confirm Password is Required');
  }else if(input1.value === input2.value && input1.value.length >= min && input1.value.length <= max && input2.value.length >= min && input2.value.length <= max){
    showSuccess(input1);
    showSuccess(input2);
  }else{
    showError(input2,'Password not matched');
  }
}

//message function
const message = function(input){
  var errorMessage = input.id.replace(/-p/, ' P');
  return errorMessage.charAt(0).toUpperCase()+errorMessage.slice(1);
}

// main event i.e submit button 

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  checkRequired(inputArray);
  checkEmail(email);
  checkLength(username, 3, 20 );
  checkLength(password , 5 , 12);
  checkLength(confirmPassword , 5 , 12);
  checkPasswordMatch(password ,confirmPassword);
});


//event listeners

// form.addEventListener('submit',(e) => {
//   e.preventDefault(); //To remove any default events. refresh,pushing data will not happen .
//   if(username.value === ''){
//     //alert('username is required');
//     showError(username, 'Username is required'); //Function to show error
//   }else{
//     showSuccess(username);
//   }

//   if(email.value === ''){
//     //alert('username is required');
//     showError(email, 'Email Address is required'); //Function to show error
//   }else if(!isValidEmail(email.value)){
//     showError(email, 'Email Address is not valid');
//   }else{
//     showSuccess(email);
//   }

//   if(password.value === ''){
//     //alert('username is required');
//     showError(password, 'password is required'); //Function to show error
//   }else{
//     showSuccess(password);
//   }

//   if(confirmPassword.value === ''){
//     //alert('username is required');
//     showError(confirmPassword, 'Confirmation of password is required'); //Function to show error
//   }else{
//     showSuccess(confirmPassword);
//   }
// })