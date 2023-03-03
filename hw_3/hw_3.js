const wsUri = "wss://echo-ws-service.herokuapp.com";
let websocket;

const btn = document.querySelector(".i-btn");
const geoBtn = document.querySelector(".g-btn");
const chat = document.querySelector(".chat");

// функция отображения в чате
function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.innerHTML = message;
  chat.appendChild(pre);
}

// отправить сообщение на сервер
btn.addEventListener("click", () => {
  const message = document.querySelector(".inputMessage").value;
  //console.log(message);

  websocket = new WebSocket(wsUri);
  websocket.onopen = function () {
    writeToScreen(message);
    websocket.send(message);
    document.querySelector(".inputMessage").value = '';
  };

  websocket.onmessage = function (event) {
    //console.log(event);
    if(event.data.indexOf("openstreetmap") != -1){
      console.log('геолокация')
    } else writeToScreen(
      '<span">' + event.data + '</span>'
    );
  };

  websocket.onerror = function (event) {
    writeToScreen(
      '<span style="color: red;">ERROR:</span> ' + event.data
    );
  }

});

// получить геолокацию
const error = () => {
  writeToScreen('Невозможно получить ваше местоположение');
}

const success = (position) => {
  console.log('position', position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const mapLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  
  writeToScreen(`<a href="${mapLink}">Ссылка на карту</a>`);

  websocket.send(mapLink);

}

geoBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    writeToScreen('Geolocation не поддерживается вашим браузером');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
})





