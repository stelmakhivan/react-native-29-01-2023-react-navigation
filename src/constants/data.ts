export interface Apartment {
  name: string;
  image: string;
  price: number;
}

const APARTMENT_DATA: Apartment[] = [
  {
    name: 'Cozy Apartment',
    image:
      'https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 1200,
  },
  {
    name: 'Modern Loft',
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
    price: 1500,
  },
  {
    name: 'Urban Studio',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
    price: 1000,
  },
  {
    name: 'Luxury Penthouse',
    image:
      'https://images.pexels.com/photos/681331/pexels-photo-681331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 2500,
  },
  {
    name: 'Charming Condo',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    price: 900,
  },
];

export { APARTMENT_DATA };
