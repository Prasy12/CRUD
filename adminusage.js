function adminlogin() {

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

function doShowAll() {
	 {
		var key =0;
		var list = "<tr><th>FullName</th><th>Email</th><th>Phone Number</th><th>Educational Qualifications</th><th>Fathers Name</th><th>Mothers Name</th><th>Place of Birth</th><th>Gender</th><th>Address</th><th>Zipcode</th><th>Date of Birth</th><th>Status</th></tr>\n";
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
            + key1 +"</td>\n<td>"+key2+"</td>\n<td>"+key3+"</td>\n<td>"+key4+"</td>\n<td>"+key5+"</td>\n<td>"+key6+"</td>\n<td>"+key7+"</td>\n<td>"+key8+"</td>\n<td>"+key9+ "</td>\n<td>"+key10+"</td><td><select><option>select</option><option>Approved</option><option>Rejected</option></select></td></tr>\n";
	
		
		document.getElementById('list').innerHTML = list;
	} 
}