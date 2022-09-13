export class App {
  constructor(selector, options) {
    this.$element = document.querySelector(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = document.createElement('div');
    $root.classList.add('app');
    this.components = this.components.map((Component) => {
      const $el = document.createElement('div');
      $el.classList.add(Component.className);
      const component = new Component($el);
      $el.innerHTML = component.toHTML();
      $root.appendChild($el);
      return component;
    });

    return $root;
  }

  render() {
    this.$element.appendChild(this.getRoot());
  }
}
