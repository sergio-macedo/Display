'use strict';
const stripe = require('stripe')('sk_test_51JEM9IE3nULJCHUVi9fkRqGi0OrCOt4hxKEhuqUQAiOPv8fwHdXIxFsZsXajmMJeDlJjM6I301gKnrjUzOqLhkVU00AXjGOkae');

module.exports.endpoint = (event, context, callback) => {
  
  const email = event.body.email;
  console.log(`customer's email: {$email}`);
  
  const customer = await stripe.customers.create(
    {
      email: email
    }
  );






  const response = {    
    statusCode: 200,
    body: JSON.stringify(event.body),
  };

  callback(null, response);
};
