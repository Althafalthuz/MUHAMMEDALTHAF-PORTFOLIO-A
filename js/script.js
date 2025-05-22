/* Typing Animation */

var typed = new Typed(".typing",{
    strings:[" ","Web Designer","Graphic Designer","Full Stack Web developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


/*----- EMAIL JS ------*/

function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value

    };


const serviceID = "service_a8jubza";
const templateID = "template_jiket5l";

emailjs.send(serviceID,templateID,params)
.then( (res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent successfully");
})

.catch((err) => console.log(err));

}


