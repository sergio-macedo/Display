(async() => {
const stripe = require('stripe')('sk_test_51JEM9IE3nULJCHUVi9fkRqGi0OrCOt4hxKEhuqUQAiOPv8fwHdXIxFsZsXajmMJeDlJjM6I301gKnrjUzOqLhkVU00AXjGOkae');

const invoiceItem = await stripe.invoiceItems.create({
  customer: 'cus_JtQld9rGG2DvI6',
  currency:'BRL',
  amount:'250',
  description:'mensalidade'


});
})();