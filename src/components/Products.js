export class Products {
  className = 'products';

  constructor() {
    this.products = [
      {
        imgUrl: './assets/images/1.png',
        title: 'Kabiny prysznicowe',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        imgUrl: './assets/images/1.png',
        title: 'Kabiny prysznicowe',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        imgUrl: './assets/images/1.png',
        title: 'Kabiny prysznicowe',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ];
  }

  createProductsItems() {
    const nodeList = this.products.map((product) => {
      return ` <li class="${this.className}__list-item">
                    <img src="${product.imgUrl}" alt="product-img" class="${this.className}__list-img">
                    <h3 class="${this.className}__list-title">${product.title}</h3>
                    <p class="${this.className}__list-text">${product.text}</p>
                </li>`;
    });
    return nodeList.join('');
  }

  toHTML() {
    return `
      <div class="container">
        <section class="${this.className}">
            <div class="${this.className}-row">
                <div class="${this.className}__title">
                    <h2 class="${this.className}__title-text">Nasze produkty: </h2>
                </div>
                <button class="${this.className}__btn">Znajdz nas na FB >></button>
            </div>
            <ul class="${this.className}__list">
                ${this.createProductsItems()}
            </ul>
        </section>
      </div>
        `;
  }
}
