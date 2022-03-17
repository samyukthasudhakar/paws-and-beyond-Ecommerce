import { dogBandana, dogCollar, dogFoodApple, dogFoodPumpkin, dogToy} from '../assets/images/product'

export const productsData = [
    {
        id: 1,
        name: "Riley's Treat Dispenser",
        image: dogToy,
        price: {
            actual: 2000 ,
            current: 1000,
            discount: 50
        },
        badge: {
            active: true,
            type: 'New'
        },
        inStock: true,
        category : []
    },
    {
        id: 2,
        name: "Riley's Orange Bandana",
        image: dogBandana,
        price: {
            actual: 2000,
            current: 1000,
            discount: 50
        },
        badge: {
            active: false,
            type: null
        },
        inStock: true ,
        category : []
    },
    {
        id: 3,
        name: "Riley's Organic Munchies",
        image: dogFoodApple,
        price: {
            actual: 2000,
            current: 1000,
            discount: 50
        },
        badge: {
            active: true,
            type: 'SALE'
        },
        inStock: true,
        category : []
    }
]