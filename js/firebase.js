window.addEventListener('load', function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyACUI2drlg0OYPvn-fuhqq0vRBpYrUakpQ",
        authDomain: "redsco-peru.firebaseapp.com",
        databaseURL: "https://redsco-peru.firebaseio.com",
        projectId: "redsco-peru",
        storageBucket: "redsco-peru.appspot.com",
        messagingSenderId: "916587161580"
    };
    firebase.initializeApp(config);
    var ref = firebase.database().ref('clientes');

    //actualizar data
    //Si usas set(), se sobrescriben los datos en la ubicación que especificas, incluidos todos los nodos secundarios.
    /*
     */
    var firebasePost = ref.child('usuarios/productos/pc');
    firebasePost.set({
        'part-number': 'nuevo.pat@h generado'
    })
    /*
    var actualizandoDatos = ref.child('cartopac/productos/pc');
    actualizandoDatos.update ({
        "part-number": 101121212
    }) 
    */

    //añadiendo data
    /*
    var añadiendoNuevosDatos = ref.child('cartopac/productos/pc');
    añadiendoNuevosDatos.push ({
        precio: 'mucho'
    })
    */

    //mostrando la data
    var verClientes = firebase.database().ref('clientes').child('cartopac/productos/pc');
    verClientes.on('value', function (snapshot) {
        console.log(snapshot.val());
    });


    //creando correo
    /*
    var email = "myemail@email.com";
    var password = "mypassword";

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       console.log(error.code);
       console.log(error.message);
    });
    */

    var email = "juan.palomino@redscoperu.com";
    var password = "123456";

    firebase.auth().signInWithEmailAndPassword(email, password)
    try {
        console.log(email);
        console.log(password);
    } catch (error) {
        console.log(error.code);
        console.log(error.message);
    };

});