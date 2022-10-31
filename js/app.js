
/**MENU HAMBURGUESA*/

let menu = document.querySelector("#menu");

let menu_bar = document.querySelector('#menu-bar');
    
    menu_bar.addEventListener('click', function(){

        menu.classList.toggle('menu-retorno');

}
)

/**API DOLAR  https://bluelytics.com.ar/#!/api*/

const urlapi = 'https://api.bluelytics.com.ar/v2/latest'

fetch (urlapi)
.then (response => response.json())
.then (data => {
    document.getElementById('val_buy').textContent = data.blue.value_buy;
    document.getElementById('val_sell').textContent = data.blue.value_sell
    })
.catch (err=> console.log(err))





/**EVENT LISTENER  */


const $form = document.querySelector ('#form')
$form.addEventListener('submit', validacion)

/* ---    VALIDACION    ---

/**declara errorMsj que se compone de los 2 elementos. devuelve mensaje de error según ID*/

function errorMsj(idElemento, mensajeError){
    document.getElementById(idElemento).innerHTML = mensajeError;
}

/**funcion validadora */

function validacion() {

/**extraemos valores de cada ID */
    valor_nme = document.getElementById("nombre").value;
    valor_ape = document.getElementById("apellido").value;
    valor_cor = document.getElementById("correo").value;

	// damos valor por defecto a cada nueva variable creada
    var dotnm = dotap = dotcr = true;
    
    // Validacion Nombre
        if(valor_nme == "") {
        errorMsj("dotnm","*Campo obligatorio");

    } else{
            errorMsj("dotnm", "");
            dotnm = false;
        }

    // Validacion Apellido
    if(valor_ape == "") {
            errorMsj("dotap","*Campo obligatorio");

    } else{
            errorMsj("dotap", "");
            dotap = false;
        }
        
    
    // Validacion Correo
    if(valor_cor == "") {
            errorMsj("dotcr","*Campo obligatorio");
    } else{
        // Validacion de email con @ y . obligatorios
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            errorMsj("dotcr", "*Correo inválido");
        } else{
            errorMsj("dotcr", "");
            dotcr = false;
        }
    }
           
    // En caso que las variables sigan siendo True para ejecutar la funcion submit, que envia el formulario
    if((dotnm || dotap || dotcr) == true) {
       return false;
    }else{
        submit();
        
    }
};


async function submit(event){

    event.preventDefault();
    const form = new FormData(this)
    const response = await fetch (this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'}
        
        })

        if (response.ok) {
            this.reset()
            alert('Mensaje enviado con éxito!')
        }
}

