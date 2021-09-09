function getData() {
    var phone_number = $("#name").val();
    if(phone_number==""){
        alert("Enter phone number first!")
        return false
    }

    phone_number = phone_number.replace("+","");
    

    //alert(phone_number);
    window.location.href = "https://api.whatsapp.com/send?phone="+phone_number;
}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}

function clearField(){
    $("#name").val("");
}
