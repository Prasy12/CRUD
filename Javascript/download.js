


function download()
{
           
    var test=localStorage.getItem("userid");
    var display= "status"+ test;  
    var validate=JSON.parse(localStorage.getItem(display))
    if(validate=='Approved')
    {
        key =  JSON.parse(localStorage.getItem("appname"));;
        key4 = JSON.parse(localStorage.getItem('fname'));
        key5 = JSON.parse(localStorage.getItem('mname'));
        key6 = JSON.parse(localStorage.getItem('POB'));
        key7 =JSON.parse(localStorage.getItem('gender'));
        key8 = JSON.parse(localStorage.getItem('address'));
        key10 = JSON.parse(localStorage.getItem('dob'));
      
    
    alert("Congrats "+key[test]+"! Your application has been approved!");
          
        var a="Name:";
        var b="Fathers' Name:";
        var c="Mothers' Name:";
        var d="Nationality:";
        var e="Gender:";
        var f="Address:";
        var g="DOB:";
        var type="Type:";
        var h="P";
        var k="3811567890"+test;
        

         document.getElementById('download').innerHTML =type+h+"<br>"+a+key[test] +"<br>"+b+ key4[test]+"<br>"+c + key5[test]+"<br>"+d+ key6[test]+"<br>"+e+ key7[test]+"<br>"+f+ key8[test]+"<br>"+g+ key10[test]+"<br>"+h+":"+key[test]+"::"+k;
         
    }
    else if(validate==null)
    {
        alert("Oops!! Your application is still being processed...");
        alert("Redirecting you back to your application!")
        window.location.assign("../Sources/trackapplication.html");
    }
    else
    {
alert("Sorry, your form has been rejected :(");
window.location.assign("../Sources/index.html");
    }
}

