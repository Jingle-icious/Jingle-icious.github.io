
const btn = document.querySelector('button');
btn.addEventListener('click', () => displayMessage('Gavin: EVIE HELP ME IN GENSHIN!', 'chat'));

function displayMessage(msgText,msgType) {
  const html = document.querySelector('html');

  const panel = document.createElement('div');
  panel.setAttribute('class','msgBox');
  html.appendChild(panel);

  const msg = document.createElement('p');
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  }

  if(msgType === 'warning') {
    msg.style.backgroundImage = 'url(/img/warning.png)';
    panel.style.backgroundColor = 'red';
  } else if(msgType === 'chat') {
    msg.style.backgroundImage = 'url(/img/chat.png)';
    panel.style.backgroundColor = 'lightskyblue';
  } else {
    msg.style.paddingLeft = '20px';
  }
}





