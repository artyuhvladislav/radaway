export class Header {
  className = 'header';
  constructor() {
    this.nav = [
      { name: 'first', isActive: true },
      { name: 'second', isActive: false },
      { name: 'third', isActive: false },
      { name: 'fourth', isActive: false },
      { name: 'fifth', isActive: false },
    ];
  }

  createNavigationItems() {
    const nodeList = this.nav.map((nav) => {
      return `<li class="${this.className}-bottom__nav-item">
                <a class="${this.className}-bottom__nav-link ${nav.isActive ? 'link-active' : ''}"
                href="#" rel="nofollow">${nav.name}</a>
            </li>`;
    });
    return nodeList.join('');
  }

  toHTML() {
    return `
    <header class="${this.className}">
        <div class="${this.className}-top">
            <div class="container">
                <a class="${this.className}-top__logo" href="index.html" rel="nofollow">
                    <img src="https://www.radaway.pl/wp-content/themes/radaway_v3/images/logo/radaway-logo-ua.svg"
                        alt="Radaway Logo" class="${this.className}-top__logo-img">
                </a>
                <div class="${this.className}-top__info">
                    <p class="${this.className}-top__info-text">Radaway SP Z.O.O</p>
                    <p class="${this.className}-top__info-text">Radaway SP Z.O.O</p>
                    <p class="${this.className}-top__info-text">Radaway SP Z.O.O</p>
                    <p class="${this.className}-top__info-text">Radaway SP Z.O.O</p>
                    <p class="${this.className}-top__info-text">Radaway SP Z.O.O</p>
                </div>
            </div>
        </div>
        <div class="${this.className}-bottom">
            <div class="container">
                <nav class="${this.className}-bottom__nav">
                    <ul class="${this.className}-bottom__nav-list">
                        ${this.createNavigationItems()}
                    </ul>
                </nav>
                <div class="${this.className}-bottom__search">
                    <input type="search" class="${
                      this.className
                    }-bottom__search-input" placeholder="Search on site ...">
                    <button class="${this.className}-bottom__search-btn">
                        <svg class="${this.className}-bottom__search-img" viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="search">
                                <path fill="#fff"
                                    d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    `;
  }
}
