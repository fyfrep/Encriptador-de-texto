//--------elementos----///
const btnEncriptar   = document.querySelector(".btn__encriptar");
const textEncriptar  = document.querySelector(".encriptar")
const aviso          = document.querySelector(".texto__aviso");
const respuesta      = document.querySelector(".evaluar");
const contenido      = document.querySelector(".tarjeta__contenedor");
const btncopiar      = document.querySelector(".btn__copiar");
const btnDesencriptar= document.querySelector(".btn__desencriptar");
//------encriptador ---///
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto= textEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
   if (texto == ""){
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontweight="800";
    aviso.textContent= "El campo de Texto no Debe estar vacio";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500)

   }
  else if(texto !== txt){
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontweight="800";
    aviso.textContent= "No debe tener acentos ni caracteres especiales";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500)
  }
  else if (texto !== texto.toLowerCase()){
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontweight="800";
    aviso.textContent= "El  Texto debe ser todo en minuscula";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500)
  }

    else{
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        contenido.remove();
    }
    
})
//------desencriptador ---///
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto= textEncriptar.value;
    let txt= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
   if (texto == ""){
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontweight="800";
    aviso.textContent= "El campo de Texto no Debe estar vacio";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500)

   }
  else if(texto !== txt){
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontweight="800";
    aviso.textContent= "No debe tener acentos ni caracteres especiales";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500)
  }
  else if (texto !== texto.toLowerCase()){
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontweight="800";
    aviso.textContent= "El  Texto debe ser todo en minuscula";
    setTimeout(()=>{
        aviso.removeAttribute("style");
    },1500)
  }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
        btncopiar.style.visibility = "inherit";
        contenido.remove();
    }
    
})
//------copiar ---///
btncopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar= respuesta;
    copiar.select();
    document.execCommand("copy");

})