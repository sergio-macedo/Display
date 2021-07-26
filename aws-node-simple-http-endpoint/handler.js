'use strict';

const stripeSK = process.env.STRIPE_SK
console.log(`stripe key: ${stripeSK}`)
const stripe = require('stripe')(stripeSK);

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

  console.log(`customer's email: ${body.email}`);
  const customerId = await getCustomerId(body.email);
  console.log(`Moving forward with customer id: ${customerId}`);

  // TODO create invoice for customer. Use value and description. I think we should
  //  add the cc email, probably Paulo's email.
  const invoiceItem = await stripe.invoiceItems.create({ //TODO remove invoiceItem variable, we don't need it.
    customer: customerId,
    currency: 'BRL',
    amount: body.amount,
    description: body.desc
  });
  console.log(`invoiceItem created: ${JSON.stringify(invoiceItem)}`)

  const invoice = await stripe.invoices.create({
    customer: customerId,
    collection_method: 'send_invoice',
    days_until_due: 5
  });
  console.log(`invoice created: ${JSON.stringify(invoice)}`)  

  await stripe.invoices.sendInvoice(invoice.id);
  console.log(`Invoice ${invoice.id} sent`)




  //TODO send proper response. 
 const response = {    
    statusCode: 200,
    body: JSON.stringify(event.body),
  };

  callback(null, response);
};
