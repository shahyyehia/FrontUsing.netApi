function getInputValue() {
    // Selecting the input element and get its value 
let name = document.getElementById("name").value;
   let type = document.getElementById("type").value;
   let loc = document.getElementById("location").value;
   //document.getElementById("both").innerHTML="";
   
    // Displaying the value
    fetch('http://nada123-001-site1.ftempurl.com/Restaurant/post',
    {
        method:"POST",
        headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
        body: JSON.stringify({
            id:0,
            name:name,
            type:type,
            location:loc})
    }).then(res=>{

        window.location.href = "file:///D:/4th%20year/first%20term/cloud/project/main.html";
    
    })
    return false;
    
  }