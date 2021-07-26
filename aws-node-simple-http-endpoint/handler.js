'use strict';
const stripe = require('stripe')('sk_test_51JEM9IE3nULJCHUVi9fkRqGi0OrCOt4hxKEhuqUQAiOPv8fwHdXIxFsZsXajmMJeDlJjM6I301gKnrjUzOqLhkVU00AXjGOkae');

async function getCustomerId(email) {
  const customers = await stripe.customers.list({
    email: email,
  });

  if (customers.data.length > 0) {
    const existingCustomer = customers.data[0];
    console.log(`Existing customer ${JSON.stringify(existingCustomer)}`);
    return existingCustomer.id;
  }

  const createdCustomer = await stripe.customers.create({ email: email });
  console.log(`Created customer ${JSON.stringify(createdCustomer)}`);
  return createdCustomer.id;
}

module.exports.endpoint = async (event, context, callback) => {
  const body = JSON.parse(event.body);

  // TODO add validation to all fields (email, value, desc)

  const email = body.email;
  console.log(`customer's email: ${email}`);
  const customerId = await getCustomerId(email);
  console.log(`Moving forward with customer id: ${customerId}`);

  // TODO create invoice for customer. Use value and description. I think we should
  //  add the cc email, probably Paulo's email.


  const response = {    
    statusCode: 200,
    body: JSON.stringify(event.body),
  };

  callback(null, response);
};
