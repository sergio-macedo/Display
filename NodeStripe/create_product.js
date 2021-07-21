(async() => {
const stripe = require('stripe')('sk_test_51JEM9IE3nULJCHUVi9fkRqGi0OrCOt4hxKEhuqUQAiOPv8fwHdXIxFsZsXajmMJeDlJjM6I301gKnrjUzOqLhkVU00AXjGOkae');

const product = await stripe.products.create({
  name: 'Node.js',description:'Ferramenta que sera utilizada' 
});

})();