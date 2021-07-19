## Create Customer
```
curl -X POST https://api.stripe.com/v1/customers \
  -u $STRIPE_SK \
  -d description="Sergio Gabriel Rodrigues Macedo" \
  -d name="Sergio Gabriel Rodrigues Macedo 2" \
  -d email="sergio.bobby88@gmail.com"
```

## Create Product

```
curl -X POST https://api.stripe.com/v1/products \
  -u $STRIPE_SK \
  -d name="Orangen Saft"
```

## Create Price

```
curl -X POST https://api.stripe.com/v1/prices \
  -u $STRIPE_SK \
  -d unit_amount=525 \
  -d currency=BRL \
  -d product=PRODUCT_ID_HERE
```

## Create Invoice Items

```
curl -X POST https://api.stripe.com/v1/invoiceitems \
  -u $STRIPE_SK \
  -d customer=cus_JsjyTE6RPcRh4c \
  -d price=PRICE_ID_HERE
```

## Create Invoice

```
curl -X POST https://api.stripe.com/v1/invoices \
  -u $STRIPE_SK \
  -d customer=CUSTOMER_ID_HERE \
  -d collection_method=send_invoice \
  -d days_until_due=5
```

## Send Invoice

```
curl -X POST https://api.stripe.com/v1/invoices/INVOICE_ID_HERE/send \
-u $STRIPE_SK
```
