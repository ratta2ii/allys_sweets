import { v4 } from 'uuid';
import JolleyRanchers from './../Assets/Images/IMG_1.jpg';
import Taffy from './../Assets/Images/IMG_3.jpg';
import BlowPop from './../Assets/Images/IMG_4.jpg';
import Skittles from './../Assets/Images/IMG_5.webp';

export const masterProductList = [
    {
        id: v4(),
        title: 'Freeze-Dried Skittles',
        subTitle: "Candy Subtitle",
        description: 'Indulge in the unique, fruity flavor of freeze-dried Skittles! Our premium-quality Skittles are freeze-dried to lock in their mouthwatering taste and crunchy texture. Perfect for snacking, sharing, or adding a fun twist to your favorite recipes.',
        productImage: Skittles,
        price: '$6.00',
    },
    {
        id: v4(),
        title: 'Freeze-Dried Jolly Ranchers',
        subTitle: "Candy Subtitle",
        description: 'Elevate your snacking game with the bold and fruity flavor of freeze-dried Jolly Ranchers! Our premium-quality Jolly Ranchers are freeze-dried to lock in their bold and fruity flavors, creating a satisfaction in every bite.',
        productImage: JolleyRanchers,
        price: '$6.00',
    },
    {
        id: v4(),
        title: 'Freeze-Dried Saltwater Taffy',
        subTitle: "Candy Subtitle",
        description: 'Discover the irresistible taste and texture of our freeze-dried saltwater taffy! Made with high-quality ingredients and freeze-dried to lock in their flavor and texture, our taffies are a unique and delicious snack that will satisfy your sweet tooth.',
        productImage: Taffy,
        price: '$6.00',
    },
    {
        id: v4(),
        title: 'Freeze-Dried Caramel Apple Pops',
        subTitle: "Candy Subtitle",
        description: 'Satisfy your sweet tooth with our delicious freeze-dried caramel apple suckers! Our premium-quality suckers will tantalize your taste buds. Perfect for a snack on the go or birthday party gift bags! A sweet treat everyone can enjoy!',
        productImage: BlowPop,
        price: '$6.00',
    },
];