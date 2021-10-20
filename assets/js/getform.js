const db = firebase.firestore();

const todoForm = document.getElementById('contactForm');

const create = (name, phone, dni, precio, cupon) => {
    db.collection('promocion').doc().set({
        name,
        phone,
        dni,
        precio,
        cupon,
    })
}
contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const name = todoForm['name'].value;
    const phone = todoForm['phone'].value;
    const dni = todoForm['dni'].value;
    const precio = todoForm['precio'].value;
    const cupon = todoForm['cupon'].value;
    if(cupon == 'aodcupones'){
        $('#modal3').modal('show');
    }else{
        $('#modal2').modal('show');
        return;
    }
    await create(name, phone, dni, precio, cupon); // Llamo a mi función create
    $('#modal').modal('show');
    todoForm.reset(); // Reseteamos los campos
});