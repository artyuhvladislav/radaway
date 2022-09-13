class Slider {
  constructor() {
    this.activeSlideIdx = 0;
    this.slides = [1, 2];
    this.html = `<li class="slider__wrapper-item slide-active" data="slide-1">
                    <img src="assets/images/${
                      this.slides[this.activeSlideIdx]
                    }.png" alt="slider-img">
                  </li>`;
  }

  init() {
    setInterval(() => {
      const $root = document.querySelector('.slider__wrapper');

      if (this.activeSlideIdx === this.slides.length) {
        this.activeSlideIdx = 0;
      }
      this.html = `<li class="slider__wrapper-item slide-active" data="slide-1">
        <img src="assets/images/${this.slides[this.activeSlideIdx]}.png" alt="slider-img">
      </li>`;
      $root.innerHTML = this.html;
      this.activeSlideIdx++;
    }, 5000);

    this.activeSlideIdx++;
    return this.toHTML();
  }

  toHTML() {
    return this.html;
  }
}

export class About {
  className = 'about';

  constructor() {
    this.slider = new Slider();
  }

  toHTML() {
    return `
    <div class="container">
        <section class="${this.className}">
            <h1 class="${this.className}__title">Kabiny prysznicowe<br>firmy Radaway</h1>
            <div class="slider">
                <ul class="slider__wrapper">
                    ${this.slider.init()}
                </ul>
            </div>
        </section>
    </div>
      `;
  }
}
