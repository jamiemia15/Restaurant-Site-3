/*eslint-env browser*/

function validateItems() {
    
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var phone = document.forms["contact"]["phone"].value;
    var reason = document.forms["contact"]["reason"].value;
    var info = document.forms["contact"]["info"].value;
    
    
    if (name == "") {
        alert("Name must be filled out.");
        document.forms["contact"]["name"].focus();
        return false;
    } 
    if (email == "") {
        alert("Email must be filled out.");
        document.forms["contact"]["email"].focus();
        return false;
    } 
    if (phone == "") {
        alert("Phone must be filled out.")
        document.forms["contact"]["phone"].focus();
        return false;
    } 
    if (reason == "") {
        alert("Reason must be filled out.");
        document.forms["contact"]["reason"].focus();
        return false;
    } 
    if (info == "") {
        alert("Additional Information must be filled out.");
        document.forms["contact"]["info"].focus();
        return false;
    } else {
        alert("Your form has been submitted. Thank you for contacting us.");
        resetForm();
        return false;
    }
    
}

function resetForm() {
    document.forms["contact"]["name"].value = "";
    document.forms["contact"]["email"].value = "";
    document.forms["contact"]["phone"].value = "";
    document.forms["contact"]["reason"].value = "Catering";
    document.forms["contact"]["info"].value = "";
    document.forms["contact"]["answer"].value = "No";
    document.forms["contact"]["m"].value = $( "#m" ).prop("checked", false);
    document.forms["contact"]["t"].value = $( "#t" ).prop("checked", false);
    document.forms["contact"]["w"].value = $( "#w" ).prop("checked", false);
    document.forms["contact"]["th"].value = $( "#th" ).prop("checked", false);
    document.forms["contact"]["f"].value = $( "#f" ).prop("checked", false);
    document.forms["contact"]["name"].focus();
}