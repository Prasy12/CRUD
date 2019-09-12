
 
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

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName&& userPw.value == storedPw) {
        alert('Successfully Logged in ');
        window.location.assign("Apply Now.html");
    }
    else {
        alert('Error! Enter correct Username and Password');
    }
}
  



    


function SaveItem() {
    var appname = document.forms.PassportForm.name.value;
    var mail = document.forms.PassportForm.mail.value;
    var phno = document.forms.PassportForm.phno.value;
    var EQ = document.forms.PassportForm.EQ.value;
    var fname = document.forms.PassportForm.fname.value;
    var mname = document.forms.PassportForm.mname.value;
    var POB = document.forms.PassportForm.POB.value;
    var gender = document.forms.PassportForm.gender.value;
    var address = document.forms.PassportForm.address.value;
    var zip = document.forms.PassportForm.zip.value;
    var dob = document.forms.PassportForm.dob.value;
    localStorage.setItem('appname', appname); 
    localStorage.setItem('mail', mail); 
    localStorage.setItem('phno', phno); 
    localStorage.setItem('EQ', EQ); 
    localStorage.setItem('fname', fname); 
    localStorage.setItem('mname', mname); 
    localStorage.setItem('POB', POB); 
    localStorage.setItem('gender', gender); 
    localStorage.setItem('address', address); 
    localStorage.setItem('zip', zip); 
    localStorage.setItem('dob', dob); 
    
    doShowAll();
    
	
}


// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		var key =0;
		var list = "<tr><th>FullName</th><th>Email</th><th>Phone Number</th><th>Educational Qualifications</th><th>Fathers Name</th><th>Mothers Name</th><th>Place of Birth</th><th>Gender</th><th>Address</th><th>Zipcode</th><th>Date of Birth</th></tr>\n";
		    key =  localStorage.getItem('appname');
            key1 = localStorage.getItem('mail');
            key2= localStorage.getItem('phno');
            key3 = localStorage.getItem('EQ');
            key4 = localStorage.getItem('fname');
            key5 = localStorage.getItem('mname');
            key6 = localStorage.getItem('POB');
            key7 =localStorage.getItem('gender');
            key8 = localStorage.getItem('address');
            key9 = localStorage.getItem('zip');
            key10 = localStorage.getItem('dob');

			list += "<tr><td>" + key + "</td>\n<td>"
            + key1 +"</td>\n<td>"+key2+"</td>\n<td>"+key3+"</td>\n<td>"+key4+"</td>\n<td>"+key5+"</td>\n<td>"+key6+"</td>\n<td>"+key7+"</td>\n<td>"+key8+"</td>\n<td>"+key9+ "</td>\n<td>"+key10+"</td></tr>\n";
	
		
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}