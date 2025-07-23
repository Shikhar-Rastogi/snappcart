import prod1 from '../img/shop/product/quick-view/product-1.jpg';
import prod2 from '../img/shop/product/quick-view/product-2.jpg';
import prod3 from '../img/shop/product/quick-view/product-3.jpg';
import prod4 from '../img/shop/product/quick-view/product-4.jpg';
import prod5 from '../img/shop/product/quick-view/product-5.jpg';
import prod6 from '../img/shop/product/quick-view/product-6.jpg';
import prod7 from '../img/shop/product/quick-view/product-7.jpg';
import prod8 from '../img/shop/product/quick-view/product-8.jpg';
import prod9 from '../img/shop/product/quick-view/product-9.jpg';

const products = [
  {
    id: 1,
    name: 'Bulb',
    image: prod1,
    isNew: true,
    discount: 16,
    variants: [
      { size: 'Small', color: 'White', price: 96.0, originalPrice: 114.29 },
      { size: 'Medium', color: 'Brown', price: 98.0, originalPrice: 117.6 },
      { size: 'Large', color: 'White', price: 100.0, originalPrice: 120.0 },
    ]
  },
  {
    id: 2,
    name: 'Plant pot',
    image: prod2,
    isNew: true,
    discount: 21,
    variants: [
      { size: 'Medium', color: 'White', price: 149.99, originalPrice: 189.99 },
      { size: 'Large', color: 'Gold', price: 154.99, originalPrice: 193.99 },
    ]
  },
  {
    id: 3,
    name: 'Pocket Knife',
    image: prod3,
    isNew: false,
    discount: 17,
    variants: [
      { size: 'Small', color: 'White', price: 249.0, originalPrice: 299.0 },
      { size: 'Large', color: 'Grey', price: 255.0, originalPrice: 306.0 },
    ]
  },
  {
    id: 4,
    name: 'Towel',
    image: prod4,
    isNew: true,
    discount: 25,
    variants: [
      { size: 'Small', color: 'Blue', price: 89.5, originalPrice: 119.0 },
      { size: 'Medium', color: 'Black', price: 92.0, originalPrice: 122.0 },
    ]
  },
  {
    id: 5,
    name: 'Wooden Spoon',
    image: prod5,
    isNew: false,
    discount: 20,
    variants: [
      { size: 'Large', color: 'Brown', price: 199.0, originalPrice: 249.0 },
      { size: 'Large', color: 'Beige', price: 202.0, originalPrice: 252.0 },
    ]
  },
  {
    id: 6,
    name: 'Metal Lamp',
    image: prod6,
    isNew: true,
    discount: 20,
    variants: [
      { size: 'Large', color: 'Black', price: 599.99, originalPrice: 749.99 },
      { size: 'Large', color: 'Blue', price: 605.0, originalPrice: 755.0 },
    ]
  },
  {
    id: 7,
    name: 'Wall Light',
    image: prod7,
    isNew: false,
    discount: 19,
    variants: [
      { size: 'Medium', color: 'White', price: 129.0, originalPrice: 159.0 },
      { size: 'Medium', color: 'Black', price: 132.0, originalPrice: 162.0 },
    ]
  },
  {
    id: 8,
    name: 'Jute Bag',
    image: prod8,
    isNew: true,
    discount: 25,
    variants: [
      { size: 'Small', color: 'Brown', price: 59.99, originalPrice: 79.99 },
      { size: 'Medium', color: 'White', price: 62.99, originalPrice: 82.99 },
    ]
  },
  {
    id: 9,
    name: 'Light',
    image: prod9,
    isNew: false,
    discount: 22,
    variants: [
      { size: 'Medium', color: 'Copper', price: 175.0, originalPrice: 225.0 },
      { size: 'Large', color: 'Black', price: 180.0, originalPrice: 230.0 },
    ]
  }
];

export default products;
