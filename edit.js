function getInputValue() {
    // Selecting the input element and get its value 
   let id = document.getElementById("id").value;
    let newname = document.getElementById("newname").value;
    let type = document.getElementById("type").value;
    let location = document.getElementById("location").value;
    // Displaying the value
    fetch('http://nada123-001-site1.ftempurl.com/Restaurant/put',
    {
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
            },
        body: JSON.stringify({
            id:id,
            name:newname,
            type:type,
            location:location})
    }).then(res=>{
       
        window.location.href = "file:///D:/4th%20year/first%20term/cloud/project/main.html";
    }

    )
    
    
    return false;
    
  }