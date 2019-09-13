
 
// storing input from register-fo
function registervalidate(){
    var name1=(document.getElementById('name1').value);
    var pw=(document.getElementById('pw').value);
      if (name1 == "") {
    alert("Please enter a name");
        }
    else if (pw == "") {
    alert("Please enter a password");
    }
    else
    {
        
        localStorage.setItem('name1', name1);
        localStorage.setItem('pw',pw);
            alert("Registered Successfully")  
            
    }  
    
}


// check if stored data from register-form is equal to entered data in the   login-form
function login() {
     // stored data from the register-form
     var storedName =localStorage.getItem("name1");
     var storedPw = localStorage.getItem("pw");
    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    var admin="admin";
    var pass="admin";
    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName&& userPw.value == storedPw) {
        alert('Successfully Logged in ');
        window.location.assign("Apply Now.html");
    }
    else if((userName.value==admin && userName.value==pass )) {
        alert("Admin Logged in")
        window.location.assign("track.html")
    }
    else {
        alert('Error! Enter correct Username and Password');
    }
}
  



    
// PassPort Form//

