function UsuarioRegistrado(){
    var usuario1 = document.getElementById("usuario").value;
    var contra1 = document.getElementById("contra").value;
    var usuario2 = document.getElementById("usuario").value;
    var contra2 = document.getElementById("contra").value;

    if(usuario1=="Maxwell" && contra1 =="12345"){
        document.location.href="rol.html";
        alert("Bienvenido " + usuario1);
    }else{
        alert("Usuario y/o contraseña incorrectos")
    }
    if(usuario2=="Danna" && contra1 =="54321"){
        document.location.href="rol.html";
        alert("Bienvenido " + usuario1);
    }else{
        alert("Usuario y/o contraseña incorrectos")
    }
}

function PaginaMesero(){
    var mesero = document.getElementById("pagm");
    if(mesero){
        document.location.href="pagmesero.html";
    }
}

function PaginaCocinero(){
    var cocinero = document.getElementById("pagm");
    if(cocinero){
        document.location.href="pagcocinero.html";
    }
}
