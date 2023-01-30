function sendXHR(method, url, data, success, failure) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200 && success) {
          success(xhr.responseText);
        } else if (failure) {
          failure(xhr.status, xhr.responseText);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  }
  
  function get(url, success, failure) {
    sendXHR('GET', url, null, success, failure);
  }
  
  function post(url, data, success, failure) {
    sendXHR('POST', url, data, success, failure);
  }
  
  function put(url, data, success, failure) {
    sendXHR('PUT', url, data, success, failure);
  }
  
  function del(url, success, failure) {
    sendXHR('DELETE', url, null, success, failure);
  }

  function validateEmail(email){
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.match(mailFormat)){
        return true;
    } else {
      alert("You have entered an invalid email address!");
      email.focus();
      return false;
    }
}

function validateName(name){ 
    let letters = /^[A-Za-z]+$/;
    if(name.value.match(letters)){
        return true;
    } else {
        alert('Username must have alphabet'); 
        name.focus();
        return false;
    }
}

function validatePhoneNumber(number){ 
    let numbers = /^[0-9]{10,14}$/;
    if(number.value.match(numbers)){
        return true;
    } else {
        alert('telephone number code must contain only numbers');
        number.focus();
        return false;
    }
}

function validateMessage(message) {
    return true;
}

