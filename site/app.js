window.onload = function() {
    var form = document.getElementById('message-form');
    var messageField = document.getElementById('message');
    var messagesList = document.getElementById('messages');
    var socketStatus = document.getElementById('status');
    var closeButton = document.getElementById('close');

    var socket = new WebSocket('ws://localhost:3000');

    socket.onerror = function(error) {
        console.log("WebSocket Error: " + error);
    }

    socket.onopen = function(event) {
        socketStatus.innerHTML = 'Conectado ao servidor: ' + event.currentTarget.url;
        socketStatus.className = 'open';
        console.log("WebSocket opened");
    }

    socket.onmessage = function(event) {
        var message = event.data
        messagesList.innerHTML += '<li class="received"><span>Recebido: </span>' + message + '</li>';
    }

    socket.onclose = function(event) {
        socketStatus.innerHTML = 'Desconectado do servidor:'+ event.currentTarget.url;
        socketStatus.className = 'closed';
        console.log("WebSocket closed");
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        
        var message = messageField.value;

        socket.send(message);

        messagesList.innerHTML += '<li class="sent"><span>Enviado: </span>' + message + '</li>';

        messageField.value = '';

        return false
    }

    closeButton.onclick = function(event) {
        event.preventDefault();
        socket.close();
        return false
    }
};