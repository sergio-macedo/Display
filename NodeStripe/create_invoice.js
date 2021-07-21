(async() => {
const stripe = require('stripe')('sk_test_51JEM9IE3nULJCHUVi9fkRqGi0OrCOt4hxKEhuqUQAiOPv8fwHdXIxFsZsXajmMJeDlJjM6I301gKnrjUzOqLhkVU00AXjGOkae');

const invoice = await stripe.invoices.create({
  customer: 'cus_JtQld9rGG2DvI6',
  collection_method:'send_invoice',
  days_until_due:'5'
});

})();