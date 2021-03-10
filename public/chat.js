const socket = io.connect('http://localhost:4000');

let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

socket.on('chat', function(data){
output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});