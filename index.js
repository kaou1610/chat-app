
const messages = [
    "you are not serious",
    "kikiki so what?",
    "where did you come from",
    "lol are you kidding me",
    "and so  what do u mean"
  ];
  let counter = 0;
  const chatContainer = document.querySelector(".container");
  const chatArea = document.querySelector(".message-body");
  const text = document.querySelector("#text");
  const form = document.querySelector(".form");
  
  function scroll() {
    chatArea.scroll(0,chatArea.scrollHeight);
  }
  
  function reply(msg) {
    let li = document.createElement("li");
    li.innerHTML = msg;
    li.classList.add("chatbox");
    li.classList.add("chatbox-incoming");
    chatArea.append(li);
    scroll();
  }
  
  
 
  form.addEventListener("submit", e => {
    e.preventDefault();
    msg = text.value;
    let li = document.createElement("li");
    li.innerHTML = msg;
    li.classList.add("chatbox");
    li.classList.add("chatbox-outgoing");
    chatArea.append(li);
    scroll();
    text.value = "";
    setTimeout(reply, 1000, messages[counter]);
    counter++;
    if (counter == messages.length) {
      counter = 0;
    }
  });
  
  window.onload = ()=>{
    reply("hi please type a message for me")
  }
  
  
