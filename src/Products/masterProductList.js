import { v4 } from 'uuid';
import JolleyRanchers from './../Assets/Images/IMG_1.jpg';
import Taffy from './../Assets/Images/IMG_3.jpg';
import BlowPop from './../Assets/Images/IMG_4.jpg';
import Skittles from './../Assets/Images/IMG_5.webp';

export const masterProductList = [
    {
        id: v4(),
        title: 'Jolly Ranchers',
        subTitle: "Candy Subtitle",
        description: 'Some candy description',
        productImage: JolleyRanchers,
        price: '7.00',
    },
    {
        id: v4(),
        title: 'Saltwater Taffy',
        subTitle: "Candy Subtitle",
        description: 'Some candy description',
        productImage: Taffy,
        price: '7.00',
    },
    {
        id: v4(),
        title: 'Caramel Apple Pops',
        subTitle: "Candy Subtitle",
        description: 'Some candy description',
        productImage: BlowPop,
        price: '7.00',
    },
    {
        id: v4(),
        title: 'Skittles',
        subTitle: "Candy Subtitle",
        description: 'Some candy description',
        productImage: Skittles,
        price: '7.00',
    },
];