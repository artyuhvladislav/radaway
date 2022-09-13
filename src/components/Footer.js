export class Footer {
  className = 'footer';

  toHTML() {
    return `
        <footer class="${this.className}">
            <div class="container">
                <p class="${this.className}__text">
                    Copyright 2007 &copy;
                    some text
                </p>
                <p class="${this.className}__text">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </footer>
      `;
  }
}
