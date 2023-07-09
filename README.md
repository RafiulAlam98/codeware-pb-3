
Post an Order 
http://localhost:5000/api/v1/order/add-order [POST]

### Data Model
```
{
    "orderItems":[
        {
            "product":"Milk",
            "quantity":3
        },
        {
            "product":"Mango",
            "quantity":4
        }
        

    ],
    "phone":"024567891"
}

```

Get All Order
http://localhost:5000/api/v1/order [Get]

Get all Items
http://localhost:5000/api/v1/items [GET]
