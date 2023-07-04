// Підключення бібліотеки lodash.throttle
import throttle from 'lodash.throttle';

//Підключення плеєра
import Player from '@vimeo/player';

// Отримання посилання на плеєр
const playerElement = document.getElementById('vimeo-player');

// Ініціалізація плеєра
const player = new Player(playerElement);

// Функція, яка зберігає поточний час відтворення в локальному сховищі
const saveCurrentTime = throttle(() => {
    player.getCurrentTime().then((currentTime) => {
      localStorage.setItem('videoplayer-current-time', currentTime);
    });
  }, 1000); // Оновлення не частіше, ніж раз на секунду
  
// Додавання обробника події timeupdate
player.on('timeupdate', saveCurrentTime);

// Отримання часу відтворення з локального сховища
const savedTime = localStorage.getItem('videoplayer-current-time');

// Встановлення часу відтворення з локального сховища, якщо він збережений
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}
