(async() => {
const stripe = require('stripe')('sk_test_51JEM9IE3nULJCHUVi9fkRqGi0OrCOt4hxKEhuqUQAiOPv8fwHdXIxFsZsXajmMJeDlJjM6I301gKnrjUzOqLhkVU00AXjGOkae');
const customer = await stripe.customers.create({
    description: 'My First Test Customer in Node.js (created for API docs)', name: 'Andre FIlipe Paschoal', email: 'seuparada.br@gmail.com'
  
});
})();