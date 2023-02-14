
  function validate(){
    var content = document.getElementById("jobposition").value;
    var password=document.getElementById("password").value;
    if(content=="Employee" && password=="Employee123"){
      window.open("Employee_Request_page.html","_blank");
    }
   else if(content=="Departement Head" && password=="Departement123" ){
      window.open("Dept_approve.html","_blank");
    }
    else if(content=="Accountant" && password=="Accountant123"){
      window.open("finance_approval.html","_blank");
    }
   else if(content=="College Dean" && password=="College123"){
      window.open("College_approval.html","_blank");
    }
    else if(content=="Vice President" && password=="President123"){
      window.open("Vpresident_approval.html","_blank");
    }
    else{
      alert("Unsuccessful\n Please check your email, password or job position");
    }
  }




