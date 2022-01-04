function getInputValue() {
    // Selecting the input element and get its value 
   let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // Displaying the value
    
    fetch('http://nada123-001-site1.ftempurl.com/User/put',
    {
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
            },
        body: JSON.stringify({
            id:id,
            name:name,
            password:password,
            email:email})
    }).then(res=>{
       
        window.location.href = "file:///D:/4th%20year/first%20term/cloud/project/main.html";
    }

    )
    fetch('http://nada123-001-site1.ftempurl.com/User/put',
    {
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
            },
        body: JSON.stringify({
            id:id,
            name:name,
            password:password,
            email:email})
    }).then(res=>{
       
        window.location.href = "file:///D:/4th%20year/first%20term/cloud/project/main.html";
    }

    )
    
    
    return false;
    
  }