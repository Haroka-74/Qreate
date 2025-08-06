const input = document.getElementById('input-box');
const qrCode = document.getElementById('qr-code');
const button = document.getElementById('btn');
const toast = document.getElementById('toast-error');
const toastMsg = document.getElementById('toast-msg');
const toastClose = document.getElementById('toast-close');

function showToast() {
    toastMsg.textContent = "Please enter text or a URL";
    toast.classList.remove('hidden');
};

toastClose.addEventListener('click', () => {
    toast.classList.add('hidden');
});

button.addEventListener('click', () => {
    if(input.value.trim() === '') {
        showToast();
        return;
    }

    qrCode.innerHTML = '';
    qrCode.classList.add('visible');

    const qr = new QRCode(qrCode, {
        text: input.value,
        width: 200,
        height: 200,
    });

    setTimeout(() => {
        qrCode.classList.add('visible');
    }, 100);

    input.value = '';
});