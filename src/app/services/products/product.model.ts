interface Rating {
  readonly rate: number;
  readonly count: number;
}

export class Product {
  readonly category: string ='';
  readonly description: string = '';
  readonly id: number = 0;
  readonly image: string = '';
  readonly price: number = 0;
  readonly rating: Rating = {rate: 0, count: 0};
  readonly title: string = '';
  public quantity: number = 0;
  public quantityPrice: number = 0;

  constructor(product: Product) {
    this.category = product.category;
    this.description = product.description;
    this.id = product.id;
    this.image = product.image;
    this.price = product.price;
    this.rating = product.rating;
    this.title = product.title;
    this.quantity = 0;
    this.quantityPrice = 0;
  }
}
