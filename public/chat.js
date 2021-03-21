const socket = io();
//const time = timeInfo();

let message = document.getElementById("message");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let feedback = document.getElementById("feedback");
let chatMessages = document.getElementById("chat-window");
let login = document.getElementById('login');
let loginBlock = document.getElementById('loginBlock');
let chatBlock = document.getElementById('chatBlock');
let username = document.getElementById('username');

btn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value,
    username: username.value,
    // time: time.value,
  });
  message.value = '';
  message.focus();
});

message.addEventListener("keypress", () => {
  socket.emit("typing", username.value);
});

socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" + data.username + ": </strong>" /*+ data.time + "<br>"*/+ data.message + "</p>";
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

socket.on("typing", (data) => {
  feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});

login.addEventListener('click', () => {
  loginBlock.style.display = 'none';
  chatBlock.style.display = '';
});