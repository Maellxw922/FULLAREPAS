function UsuarioRegistrado(){
    var usuario = document.getElementById("usuario").value;
    var contra = document.getElementById("contra").value;

    if(usuario=="Maxwell" && contra =="12345"){
        document.location.href="rol.html";
        alert("Bienvenido/a " + usuario);
        
    }else if(usuario=="Danna" && contra =="54321"){
        document.location.href="rol.html";
        alert("Bienvenido " + usuario);
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
    var cocinero = document.getElementById("pagc");
    if(cocinero){
        document.location.href="pagcocinero.html";
    }
}
