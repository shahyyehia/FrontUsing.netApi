function getInputValue() {
    // Selecting the input element and get its value 
   let username = document.getElementById("Username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    // Displaying the value
    fetch('http://nada123-001-site1.ftempurl.com/User/post',
    {
        method:"POST",
        headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    
    },
        body: JSON.stringify({
            id:0,
            name:username,
            email:email,
            password:password})
    }).then(res=>{
       
       // window.location.href = "file:///D:/4th%20year/first%20term/cloud/project/main.html";
      
    }
    )
    /*if(username=="")
    {
        document.getElementById("u").innerHTML="username can't be empty";
    }
    else
    {
        document.getElementById("u").innerHTML="";
    }
    if(password=="")
    {
        document.getElementById("p").innerHTML="password can't be empty";
    }
    else
    {
        document.getElementById("p").innerHTML="";
    }
    */
    return false;
    
  }