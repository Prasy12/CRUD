var name1= new Array();
var pw= new Array ();
 
// storing input from register-fo
function registervalidate(){
      name1=(document.getElementById('name1').value) ;
      pw=(document.getElementById('pw').value);
  
if (name1 == "") {
    alert("Please enter a name");
        }
    else if (pw == "") {
    alert("Please enter a password");
    }
    else
    {
        
        addToLocalStorageArray('name1', name1);
        addToLocalStorageArray('pw',pw);
            alert("Registered Successfully")  
            
    }  
    
}


// check if stored data from register-form is equal to entered data in the   login-form
function login() {

    
   var storedName=new Array();
   var storedPw=new Array();
   
   
    // stored data from the register-form
     storedName =localStorage.getItem("name1");
     storedPw = localStorage.getItem("pw");
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
  

console.log(localStorage.length)

var addToLocalStorageArray = function (name, value) {
    
    // Get the existing data
    var existing = localStorage.getItem(name);
    
    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(',') : [];
    
    // Add new data to localStorage Array
    existing.push(value);
    
    // Save back to localStorage
    localStorage.setItem(name, existing.toString());
    
}




function SaveItem() {
			
	var name = document.forms.ShoppingList.name.value;
    var Email = document.forms.ShoppingList.mail.value;
    var phno = document.forms.ShoppingList.phno.value;
    var EQ = document.forms.ShoppingList.EQ.value;
    var fname = document.forms.ShoppingList.fname.value;
    var mname = document.forms.ShoppingList.mname.value;
    var POB = document.forms.ShoppingList.POB.value;
    var gender = document.forms.ShoppingList.gender.value;
    var address = document.forms.ShoppingList.address.value;
    var zip = document.forms.ShoppingList.zip.value;
     
	localStorage.setItem(name,Email,phno,EQ,fname,mname,POB,gender,address,zip);
	doShowAll();
	
}



// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>FullName</th><th>Email</th><th>Phone Number</th><th>DOB</th><th>Educational Qualifications</th><th>Fathers Name</th><th>Mothers Name</th><th>Place of Birth</th><th>Gender</th><th>Address</th><th>Zipcode</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
            key = localStorage.key(i);
            key1 = localStorage.key(i+1);
            key2= localStorage.key(i+2);
            key3 = localStorage.key(i+3);
            key4 = localStorage.key(i+4);
            key5 = localStorage.key(i+5);
            key6 = localStorage.key(i+6);
            key7 = localStorage.key(i+7);
            key8 = localStorage.key(i+8);
			list += "<tr><td>" + key + "</td>\n<td>"
            + localStorage.getItem(key) +"</td>\n<td>"+localStorage.getItem(key)+"</td>\n<td>"+localStorage.getItem(key2)+"</td>\n<td>"+localStorage.getItem(key3)+"</td>\n<td>"+localStorage.getItem(key4)+"</td>\n<td>"+localStorage.getItem(key5)+"</td>\n<td>"+localStorage.getItem(key6)+"</td>\n<td>"+localStorage.getItem(key7)+"</td>\n<td>"+localStorage.getItem(key8)+ "</td></tr>\n";
		}
		
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