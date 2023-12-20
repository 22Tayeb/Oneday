const dialog = document.getElementById('dialog');
const openbtn = document.getElementById('Openbtn');
const closeBtn = document.getElementById("Closebtn");

    openbtn.addEventListener('click', function () {dialog.setAttribute('open', true);  })
    closeBtn.addEventListener('click', function () {dialog.removeAttribute('open');  })