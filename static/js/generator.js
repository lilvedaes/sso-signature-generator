function generates(){
    document.getElementById("fillName").innerHTML = document.querySelector('#fillForm [name="name"]').value;
    document.getElementById("fillPosition").innerHTML = document.querySelector('#fillForm [name="position"]').value;
    document.getElementById("fillPhone").innerHTML = document.querySelector('#fillForm [name="phone"]').value;
    document.getElementById("fillLink").setAttribute("href", document.querySelector('#fillForm [name="linkedinURL"]').value);
}