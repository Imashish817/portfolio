function sendMail() {
     var name=document.getElementById('inlineFormInputGroupUsername1').value
     var email=document.getElementById('inlineFormInputGroupUsername2').value
     var subject=document.getElementById('inlineFormInputGroupUsername3').value
     var msg=document.getElementById('msg').value
     var detail="name: " + name + " email id: "+email+" Message "+msg;
    var link = "mailto:me@example.com"
    + "?cc=myCCaddress@example.com"
    + "&subject=" + escape("This is my subject")
    + "&body=" + escape(detail)
;

window.location.href = link;
}