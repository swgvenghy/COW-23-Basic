function initCarousel() {
  const carousel = document.querySelector('.imageslide');
  const carouselItems = carousel.querySelectorAll('.imageslideitem');
  const carouselIndicatorButtons = carousel.querySelectorAll('.imagesmallbutton button');
  const prevButton = carousel.querySelector('.prev-button');
  const nextButton = carousel.querySelector('.next-button');

  let currentPageIndex = 0;
  const carouselInterval = 4000;
  let carouselTimer;

  function moveCarouselTo(index) {
    carouselItems.forEach(item => {
      item.style.display = 'none';
    });
    carouselItems[index].style.display = 'block';
    currentPageIndex = index;
  }

  function nextCarouselPage() {
    let nextPageIndex = currentPageIndex + 1;
    if (nextPageIndex >= carouselItems.length) {
      nextPageIndex = 0;
    }
    moveCarouselTo(nextPageIndex);
  }

  function prevCarouselPage() {
    let prevPageIndex = currentPageIndex - 1;
    if (prevPageIndex < 0) {
      prevPageIndex = carouselItems.length - 1;
    }
    moveCarouselTo(prevPageIndex);
  }

  function handleIndicatorButtonClick(event) {
    clearInterval(carouselTimer);
    const buttonIndex = Number(event.target.getAttribute('data-index'));
    if (!isNaN(buttonIndex) && buttonIndex >= 0 && buttonIndex < carouselItems.length) {
      moveCarouselTo(buttonIndex);
    }
    startCarouselTimer();
  }

  prevButton.addEventListener('click', prevCarouselPage);
  nextButton.addEventListener('click', nextCarouselPage);

  carouselIndicatorButtons.forEach((button, index) => {
    button.addEventListener('click', handleIndicatorButtonClick);
    button.setAttribute('data-index', index);
  });

  function startCarouselTimer() {
    carouselTimer = setInterval(nextCarouselPage, carouselInterval);
  }

  moveCarouselTo(0);
  startCarouselTimer();
}

initCarousel();
