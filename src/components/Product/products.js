export const baseProducts = [
    {
        id: 1,
        weight: '450 мл',
        title: 'AOS средство для мытья посуды Crystal',
        barcode: '4604049097548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '50,76 ₸',
        image: require('@/assets/images/AOS.jpg'),
    },
    {
        id: 2,
        weight: '15X28.8 г',
        title: 'ARIEL Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
        barcode: '4604049097548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '70,76 ₸',
        image: require('@/assets/images/Ariel.jpg'),
    },
    {
        id: 3,
        weight: '1500 г',
        title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
        barcode: '4604049097548',
        manufacturer: 'Нэфис',
        brand: 'AOS',
        price: '48,76 ₸',
        image: require('@/assets/images/BiMAX.jpg'),
    }
];

export const products = Array.from({ length: 30 }, (_, i) => {
    const base = baseProducts[i % 3];
    return {
        ...base,
        id: i + 1,
        title: `${base.title} ${Math.floor(i/3) + 1}`,
    };
});
