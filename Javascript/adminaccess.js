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
var status1=[];
var str;
var pp;
function showAllApplications() {
    
       var key =0;
       
       var list = "<tr><th>S.No</th><th>FullName</th><th>Email</th><th>Phone Number</th><th>Educational Qualifications</th><th>Fathers Name</th><th>Mothers Name</th><th>Nationality</th><th>Gender</th><th>Address</th><th>Zipcode</th><th>Date of Birth</th><th>Status</th></tr>\n";
           key =  JSON.parse(localStorage.getItem("appname"));
           key1 = JSON.parse(localStorage.getItem("mail"));
           key2= JSON.parse(localStorage.getItem('phno'));
           key3 = JSON.parse(localStorage.getItem('EQ'));
           key4 = JSON.parse(localStorage.getItem('fname'));
           key5 = JSON.parse(localStorage.getItem('mname'));
           key6 = JSON.parse(localStorage.getItem('POB'));
           key7 =JSON.parse(localStorage.getItem('gender'));
           key8 = JSON.parse(localStorage.getItem('address'));
           key9 = JSON.parse(localStorage.getItem('zip'));
           key10 = JSON.parse(localStorage.getItem('dob'));
           if(key==null)
           {
               alert("No applications found!")
               window.location.assign("index.html");
           }
           else
           {
           for(i=0;i<key.length;i++)
           { str= "status" + i;
           var sno=i+1; 
           list += "<tr><td>"+ sno +"</td>\n<td>" + key[i] + "</td>\n<td>"
           + key1[i] +"</td>\n<td>"+key2[i]+"</td>\n<td>"+key3[i]+"</td>\n<td>"+key4[i]+"</td>\n<td>"+
           key5[i]+"</td>\n<td>"+key6[i]+"</td>\n<td>"+key7[i]+"</td>\n<td>"+key8[i]+"</td>\n<td>"+key9[i]+ 
           "</td>\n<td>"+key10[i]+"</td><td><select value='1' id=" + str + "><option value=''>select</option><option value='Approved'>Approved</option><option value='Rejected'>Rejected</option></select></td></tr>\n";
           }
           
        }
       document.getElementById('list').innerHTML = list; 
       

}


var str;
function updatedApplication(){
    
        var list2 = "<tr><th>S.No</th><th>FullName</th><th>Email</th><th>Phone Number</th><th>Educational Qualifications</th><th>Fathers Name</th><th>Mothers Name</th><th>Nationality</th><th>Gender</th><th>Address</th><th>Zipcode</th><th>Date of Birth</th><th>Status</th><th>Delete</th></tr>\n";
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
       var key11=[];

        for(i=0;i<key.length;i++)
        { 
        
       
         str= "status" + i;
        
         status1= document.getElementById(str).value;
         window.localStorage[str] = JSON.stringify(status1); 
         key11.push({str:document.getElementById(str).value});  
        }


       
       for(i=0;i<key.length;i++)
       {   var str="status" + i;  
       var sno=i+1; 
       list2 += "<tr><td>" +sno+"</td>\n<td>" + key[i] + "</td>\n<td>"
       + key1[i] +"</td>\n<td>"+key2[i]+"</td>\n<td>"+key3[i]+"</td>\n<td>"+key4[i]+"</td>\n<td>"
       +key5[i]+"</td>\n<td>"+key6[i]+"</td>\n<td>"+key7[i]+"</td>\n<td>"+key8[i]+"</td>\n<td>"+key9[i]+
       "</td>\n<td>"+key10[i]+"</td>\n<td>"+key11[i].str+"</td><td><input type=submit onclick=deletee(this) value='Delete ' id=btn-delete></td></tr>\n";
       }
      
       document.getElementById('list').innerHTML =list2 ;  
   }   
    

   function deletee(td) {   
    
    if (confirm('Are you Sure ?')) {
        row = td.parentElement.parentElement;
        count = td.parentElement;
        pp = row.rowIndex;
        document.getElementById("list").deleteRow(row.rowIndex);
             
    } 
    
}

