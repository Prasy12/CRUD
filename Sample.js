
var username = []; var password=[];
flag = true;
var id =0;
function signup() 
    {
        
          if(document.getElementById("name1").value == "")
          {
              alert("Enter a username");
          }
          else if( document.getElementById("pw").value== "")
          {
              alert("Enter a password");
          }
       else
       {
        if(window.localStorage["username"] != null)
        username = JSON.parse(window.localStorage["username"]);
        username.push(document.getElementById("name1").value);
        window.localStorage["username"] = JSON.stringify(username);
   
       if(window.localStorage["password"] != null)
       password = JSON.parse(window.localStorage["password"]);
       password.push(document.getElementById("pw").value);
       window.localStorage["password"] = JSON.stringify(password);
       alert("Registered Successfuly");
       
       
       }
}
;
function login() {
 
    username1 = JSON.parse(localStorage.getItem("username"));
    password1 = JSON.parse(localStorage.getItem("password"));
    var usernameInput = document.getElementById("userName").value;
    var passwordInput = document.getElementById("userPw").value;
    
   
        if(usernameInput!="" && passwordInput!="") {
           for(i=0;i<username1.length;i++){
           if(usernameInput == username1[i] && passwordInput == password1[i]) 
            {
             
                flag = true; id=i;
                localStorage.setItem("userid",id);
                break;
            } else {
                flag = false;
            }
           }
           
        }
         
        if(flag == true){
            alert('Logged in');
            window.location.assign("Apply Now.html");
       
            
        }
        else{
            alert('Invalid Username and password');
            document.getElementById("userName").value = "";
            document.getElementById("userPw").value = "";

    }
}



var appname =[];
var mail=[];
var phno=[];
var dob=[];
var EQ=[];
var fname=[];
var mname=[];
var POB=[];
var gender=[];
var address=[];
var zip=[];




function SaveItem() {
      
 if(document.forms.PassportForm.name.value == "")
{
    alert("Please enter the name");
    
}
else if (document.forms.PassportForm.mail.value == "")
{
    alert("Please enter your mail ID");
}else if (document.forms.PassportForm.phno.value == "")
{
    alert("Please enter your phone number");
}
else if(document.forms.PassportForm.EQ.value == "")
{
    alert("Enter your Educational Qualifications");
}
else if(document.forms.PassportForm.fname.value == "")
{
    alert("Enter your Father's Name");
}
else if(document.forms.PassportForm.mname.value == "")
{
    alert("Enter your Mothers's Name");
}
else if(document.forms.PassportForm.POB.value == "")
{
    alert("Enter your Place of Birth");
}
else if(document.forms.PassportForm.gender.value == "")
{
    alert("Enter your Gender");
}
else if(document.forms.PassportForm.address.value == "")
{
    alert("Enter your address");
}
else if(document.forms.PassportForm.zip.value == "")
{
    alert("Enter the ZIP Code");
}
else{
    //name//
    if(window.localStorage["appname"] != null)
 appname = JSON.parse(window.localStorage["appname"]);
    appname.push(document.forms.PassportForm.name.value);
    window.localStorage["appname"] = JSON.stringify(appname);
//mail//
    if(window.localStorage["mail"] != null)
   mail = JSON.parse(window.localStorage["mail"]);
    mail.push(document.forms.PassportForm.mail.value)
    window.localStorage["mail"] = JSON.stringify(mail);
//phno/
if(window.localStorage["phno"] != null)
phno = JSON.parse(window.localStorage["phno"]);
phno.push(document.forms.PassportForm.phno.value);
window.localStorage["phno"] = JSON.stringify(phno);
//dob//
if(window.localStorage["dob"] != null)
dob = JSON.parse(window.localStorage["dob"]);
dob.push(document.forms.PassportForm.dob.value);
window.localStorage["dob"] = JSON.stringify(dob);
//EQ
if(window.localStorage["EQ"] != null)
EQ = JSON.parse(window.localStorage["EQ"]);
EQ.push(document.forms.PassportForm.EQ.value);
window.localStorage["EQ"] = JSON.stringify(EQ);
//fnamE
if(window.localStorage["fname"] != null)
fname = JSON.parse(window.localStorage["fname"]);
fname.push(document.forms.PassportForm.fname.value);
window.localStorage["fname"] = JSON.stringify(fname);
//mname
if(window.localStorage["mname"] != null)
mname = JSON.parse(window.localStorage["mname"]);
mname.push(document.forms.PassportForm.mname.value);
window.localStorage["mname"] = JSON.stringify(mname);
//POB
if(window.localStorage["POB"] != null)
POB = JSON.parse(window.localStorage["POB"]);
POB.push(document.forms.PassportForm.POB.value);
window.localStorage["POB"] = JSON.stringify(POB);
//gender
if(window.localStorage["gender"] != null)
gender = JSON.parse(window.localStorage["gender"]);
gender.push(document.forms.PassportForm.gender.value);
window.localStorage["gender"] = JSON.stringify(gender);
//address
if(window.localStorage["address"] != null)
address = JSON.parse(window.localStorage["address"]);
address.push(document.forms.PassportForm.address.value);
window.localStorage["address"] = JSON.stringify(address);
//zip
if(window.localStorage["zip"] != null)
zip = JSON.parse(window.localStorage["zip"]);
zip.push(document.forms.PassportForm.zip.value);
window.localStorage["zip"] = JSON.stringify(zip);

alert("Form submitted successfully");
document.forms.PassportForm.name.value = "";
document.forms.PassportForm.mail.value = "";
document.forms.PassportForm.phno.value = "";
document.forms.PassportForm.EQ.value = "";
document.forms.PassportForm.fname.value = "";
document.forms.PassportForm.mname.value = "";
document.forms.PassportForm.POB.value = "";
document.forms.PassportForm.gender.value = "";
document.forms.PassportForm.address.value = "";
document.forms.PassportForm.zip.value = "";

trackapplication();
}
}
function trackapplication()
{
    var test=localStorage.getItem("userid")
    var list1 = "<tr><th>FullName</th><th>Email</th><th>Phone Number</th><th>Educational Qualifications</th><th>Fathers Name</th><th>Mothers Name</th><th>Place of Birth</th><th>Gender</th><th>Address</th><th>Zipcode</th><th>Date of Birth</th><th>Status</th></tr>\n";
           key =  JSON.parse(localStorage.getItem("appname"));;
           key1 = JSON.parse(localStorage.getItem("mail"));;
           key2= JSON.parse(localStorage.getItem('phno'));
           key3 = JSON.parse(localStorage.getItem('EQ'));
           key4 = JSON.parse(localStorage.getItem('fname'));
           key5 = JSON.parse(localStorage.getItem('mname'));
           key6 = JSON.parse(localStorage.getItem('POB'));
           key7 =JSON.parse(localStorage.getItem('gender'));
           key8 = JSON.parse(localStorage.getItem('address'));
           key9 = JSON.parse(localStorage.getItem('zip'));
           key10 = JSON.parse(localStorage.getItem('dob'));
         
           
           {   var display= "status"+ test;  
            list1 += "<tr><td>" + key[test] + "</td>\n<td>"
            + key1[test] +"</td>\n<td>"+key2[test]+"</td>\n<td>"+key3[test]+"</td>\n<td>"+key4[test]+"</td>\n<td>"+key5[test]+"</td>\n<td>"+key6[test]+"</td>\n<td>"+key7[test]+"</td>\n<td>"+key8[test]+"</td>\n<td>"+key9[test]+ "</td>\n<td>"+key10[test]+"\n<td>"+
            localStorage.getItem(display)+ "</td></tr>\n";
             }
             document.getElementById('list1').innerHTML = list1;

           
        
       
}

