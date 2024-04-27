import lahore from './image/lahore.webp'
import abhimanyu from './image/abhimanyu.JPEG'

export const listingData = [
    {
        id: 1,
        leaseType: 'Sale',
        price: '90,00,000',
        type: 'Residential',
        address: '101 Lahore apartments Vasundhara Enclave Delhi-96',
        numBeds: 2,
        numBaths: 2,
        numBal: 1,
        area: 900,
        furnished: true,
        facing: 'NE',
        lift: false,
        negotiable: true,
        img: lahore
    },
    {
        id: 2,
        leaseType: 'Rent',
        price: '35,000',
        type: 'Residential',
        address: '451 Abhimanyu apartments Vasundhara Enclave Delhi-96',
        numBeds: 3,
        numBaths: 3,
        numBal: 3,
        area: 1500,
        furnished: true,
        facing: 'NS',
        lift: true,
        negotiable: true,
        img: abhimanyu
    },
    {
        id: 3,
        leaseType: 'Sale',
        price: '1,00,00,000',
        type: 'Commercial',
        address: '112 Plaza Market Vasundhara Enclave Delhi-96',
        area: 400,
        furnished: false,
        negotiable: true,
        img: abhimanyu
    }
]