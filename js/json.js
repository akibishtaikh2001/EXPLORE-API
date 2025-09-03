const user = { id: 1, name: 'gorib Aamir', job: 'actor' };
// JavaScript Object Notation (JSON)
const stringifield = JSON.stringify(user);
// console.log(user);
// console.log(stringifield);
/**
 { id: 1, name: 'gorib Aamir', job: 'actor' }
 {"id":1,"name":"gorib Aamir","job":"actor"} 
 */

const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochkhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mac', 'monitor', 'keyword'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
