var person= {
    
"firstName":"Silba",
    "lastName":"Rajbhandari",
        "dateOfBirth":"12/01/1989",
            "age":"26",
                "address":"North Beltline road",
                    "email":"silba@gmail.com",
};
//console.log(person);

console.log(person.firstName);
console.log(person.lastName);



    //document.getElementById("person").innerHTML="<h1>updated</h1>";
 //   var htmlContents="<h1>updated</h1>";
    
    var htmlContents= //"<table>"+
        "<table class='table table-stripped table-hover table-bordered'>"+
        "<tr>" +
        "<th> FirstName </th>"+
        "<td>"+person.firstName + "</td>"+
        "</tr>"+
        "<br>"+
        
        "<tr>"+
        "<th> LastName </th>"+
        "<td>"+person.lastName+"</td>"+
        "<br>"+
        
        "<tr>"+
        "<th> Date of Birth </th>"+
        "<td>"+person.dateOfBirth + "</td>"+
        "</tr>"+
        "<br>"+
        
        "<tr>"+
        "<th> Age </th>"+
        "<td>"+person.age + "</td>"+
        "</tr>"+
        "<br>"+
        
        "<tr>"+
        "<th> Address </th>"+
        "<td>"+person.address + "</td>"+
        "</tr>"+
        "<br>"+
        
        "<tr>"+
        "<th> Email </th>"+
        "<td>"+person.email + "</td>"+
        "</tr>"+
        "<br>"+
        "</table>"
        "<br>";
    
function loadPerson(){
    document.getElementById("person").innerHTML=htmlContents;
}

//loadPerson();