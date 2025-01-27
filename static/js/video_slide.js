let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');
const totalItems = items.length;

items[currentIndex].classList.add('active'); // 显示第一个视频

document.querySelector('.slider-navigation-previous').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
  items[currentIndex].classList.add('active');
});

document.querySelector('.slider-navigation-next').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
  items[currentIndex].classList.add('active');
});
