function validate(){

    // var box1=document.getElementById("name");
    // if(box1.value ==""){
    //     document.getElementById("p1").innerHTML="*Name field can not be empty*";  
    //     box1.focus();
    //     box1.style.border="1px solid red";
    //     return false; 
    // }
    // if(box1.value.length>10){
    //     document.getElementById("p1").innerHTML="*Name Length is 10 Character only*";  
    //     box1.focus();
    //     box1.style.border="1px solid red";
    //     return false; 
    // }

    // var box2=document.getElementById("num"); 
    // if(box2.value ==""){
    //     document.getElementById("p2").innerHTML="Fill The Ph No";
    //     return false;
    // }

    const email_id = document.getElementById("email");
    console.log(email_id.type)
    document.getElementById('p1').innerHTML = `The entered email_id is ${email_id}`
}