import brazilian from '../resources/img/goods/brazilian.png';
import vietnam from '../resources/img/goods/vietnam.png';
import indonesian from '../resources/img/goods/indonesian.png';

const products = [
    {
        id: 1,
        img: brazilian,
        price: 5.99,
        name: 'Brazilian coffee beans',
        descr: "Coffee that's always you handle your own the way you like.",
        country: 'Brazil',
        roast: 'Medium',
        weight: '250 g',
        details: 'Classic Brazilian arabica with notes of chocolate, nuts and caramel. Low acidity and a rich, smooth body make it perfect for espresso and milk drinks.',
    },
    {
        id: 2,
        img: vietnam,
        price: 5.99,
        name: 'Vietham coffee beans',
        descr: "Coffee that's always you handle your own the way you like.",
        country: 'Vietnam',
        roast: 'Dark',
        weight: '250 g',
        details: 'Bold Vietnamese robusta with a strong, full-bodied taste and hints of dark chocolate and spice. High caffeine content — a great choice for a morning boost.',
    },
    {
        id: 3,
        img: indonesian,
        price: 5.99,
        name: 'indonesian coffee beans',
        descr: "Coffee that's always you handle your own the way you like.",
        country: 'Indonesia',
        roast: 'Medium-Dark',
        weight: '250 g',
        details: 'Earthy Indonesian arabica with deep notes of herbs, cedar and dark cocoa. Dense texture and a long, warm finish — ideal for french press and filter.',
    },
];

export default products;
