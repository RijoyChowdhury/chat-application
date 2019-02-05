var socket = io('https://3000-increasefundedbison.cdr.co/');

var msg = document.querySelector('#message');
var usrname = document.querySelector('#username');
var btnSend = document.querySelector('#send');
var output = document.querySelector('#output');

btnSend.addEventListener('click', () => {
  socket.emit('chat-message',{
    message: message.value,
    usrname: usrname.value,
  });
  output.innerHTML += `<p><strong>${usrname.value}:</strong> ${message.value}</p>`;
  message.value = '';
});

socket.on('chat-message', (data) => {
  output.innerHTML += `<p><strong>${data.usrname}:</strong> ${data.message}</p>`;
});
