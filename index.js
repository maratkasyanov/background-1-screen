// Находим элемент изображения
const image = document.querySelector('.image');

// Добавляем обработчик события для движения мыши
document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event; // Получаем координаты мыши
  const { innerWidth, innerHeight } = window; // Получаем размеры окна

  // Вычисляем смещение
  const offsetX = (clientX / innerWidth - 0.5) * 40; // Двигаем по горизонтали
  const offsetY = (clientY / innerHeight - 0.5) * 40; // Двигаем по вертикали

  // Применяем трансформацию к изображению
  image.style.transform = `translate(calc(250% + ${offsetX}px), calc(30% + ${offsetY}px))`;
});
document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;

  const offsetX = (clientX / innerWidth - 0.5) * 50;
  const offsetY = (clientY / innerHeight - 0.5) * 50;

  image.style.transform = `translate(calc(250% + ${offsetX}px), calc(30% + ${offsetY}px)) scale(1.05)`;
});
