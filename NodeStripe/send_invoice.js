(async() => {
const stripe = require('stripe')('sk_test_51JEM9IE3nULJCHUVi9fkRqGi0OrCOt4hxKEhuqUQAiOPv8fwHdXIxFsZsXajmMJeDlJjM6I301gKnrjUzOqLhkVU00AXjGOkae');

const invoice = await stripe.invoices.sendInvoice(
  'in_1JFgB3E3nULJCHUVjYO4U4d8'
);
})();