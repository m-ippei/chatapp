const socket = io();

function submit(e) {
    const form = document.getElementById('form');
    e.preventDefault();
    socket.emit('chat message', form.msg.value);
    form.msg.value = "";
}

window.onload = () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', submit);
}

