import houseTemplate from '../Images/houseTemplate.jpg'
import shopTemplate from '../Images/shopTemplate.png'

import lahore from '../Images/Prop1/lahore.webp'
import abhimanyu from '../Images/Prop1/abhimanyu.JPEG'

export const listingData = [
    {
        id: 1,
        leaseType: 'Sale',
        price: '90,00,000',
        type: 'Residential',
        address: '101 Lahore Apartments Vasundhara Enclave Delhi-96',
        numBeds: 2,
        numBaths: 2,
        numBal: 1,
        area: 900,
        furnished: true,
        facing: 'North-East',
        lift: false,
        negotiable: true,
        img: houseTemplate,
        available: true,
        collection: [lahore,abhimanyu]
    },
    {
        id: 2,
        leaseType: 'Rent',
        price: '35,000',
        type: 'Residential',
        address: '451 Abhimanyu Apartments Vasundhara Enclave Delhi-96',
        numBeds: 3,
        numBaths: 3,
        numBal: 3,
        area: 1500,
        furnished: true,
        facing: 'North-South',
        lift: true,
        negotiable: true,
        img: houseTemplate,
        available: true,
        collection: [lahore,abhimanyu]
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
        img: shopTemplate,
        available: true,
        collection: [lahore,abhimanyu]
    },
    {
        id: 4,
        leaseType: 'Rent',
        price: '18,000',
        type: 'Residential',
        address: '206 Lahore Apartments Vasundhara Enclave Delhi-96',
        numBeds: 2,
        numBaths: 2,
        numBal: 1,
        area: 900,
        furnished: true,
        facing: 'North-East',
        lift: false,
        negotiable: true,
        img: houseTemplate,
        available: true,
        collection: [lahore,abhimanyu]
    },
    {
        id: 5,
        leaseType: 'Sale',
        price: '74,50,000',
        type: 'Residential',
        address: '208 Lahore Apartments Vasundhara Enclave Delhi-96',
        numBeds: 2,
        numBaths: 2,
        numBal: 1,
        area: 900,
        furnished: false,
        facing: 'North-West',
        lift: false,
        negotiable: true,
        img: houseTemplate,
        available: false,
        collection: []
    },
]