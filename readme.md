## Admin EndPoint

1.Admin data is hardcoded in database so no signup.
2.Admin can update his info as a normal user.

### 1.Login

#### Request

`GET /api/v1/admin/user/login`

Body

```js
{
  "user":
  {
    "email": "",
    "password": ""
  }
}
```

#### Response

```js
{
"user": {
    "username": "",
    "email": "",
    "token": "",
    "coupons": [],
    "address": [],
    "order": [],
    "fav": [],
    "cart": {
      "productId": [],
      "\_id": "5e9fe5447311721ca37d3c51",
      "userId": "5e9fe5447311721ca37d3c50",
      "createdAt": "2020-04-22T06:33:40.997Z",
      "updatedAt": "2020-04-22T06:33:40.997Z",
      "\_\_v": 0
    }
  }
}
```

---

### 2.Get all user info

#### Request

Authentication required as an admin

`GET api/v1/admin/allUsers`

Body

```js
[empty];
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "allUsers": [
        {
            "id": "5e9f172fe2c4126db70cb258",
            "username": "Jacob2555",
            "email": "jake@jake.jake",
            "coupons": [],
            "address": [
                null
            ],
            "order": [],
            "fav": [],
            "cart": "5e9f172fe2c4126db70cb259",
            "isBlocked": false
        },
        {
            "id": "5ea281deacb05817d30e8e8d",
            "username": "Jacob255",
            "email": "jake@jake.jake",
            "coupons": [],
            "address": [],
            "order": [],
            "fav": [],
            "cart": "5ea281dfacb05817d30e8e8e",
            "isBlocked": false
        },
        {
            "id": "5ea281fcacb05817d30e8e8f",
            "username": "Jacob256",
            "email": "jake@jake.jake",
            "coupons": [],
            "address": [],
            "order": [],
            "fav": [],
            "cart": "5ea281fcacb05817d30e8e90",
            "isBlocked": false
        },
        {
            "id": "5ea28208acb05817d30e8e91",
            "username": "Jacob2558",
            "email": "jake@jake.jake",
            "coupons": [],
            "address": [],
            "order": [],
            "fav": [],
            "cart": "5ea28208acb05817d30e8e92",
            "isBlocked": false
        },
        {
            "id": "5ea28227acb05817d30e8e93",
            "username": "Jacob255568",
            "email": "jake@jake.jake",
            "coupons": [],
            "address": [],
            "order": [],
            "fav": [],
            "cart": "5ea28227acb05817d30e8e94",
            "isBlocked": false
        }
    ]
}
```

---

### 3.Block a user

#### Request

Authentication required as an admin

`POST /api/v1/admin/allUsers/block`

Body

```js
{
	"user": {
		"id":"5e9f172fe2c4126db70cb258"
	}
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "msg": "Jacob2555 is now blocked"
}
```

---

### 4.UnBlock a user

#### Request

Authentication required as an admin

`POST /api/v1/admin/allUsers/unBlock`

Body

```js
{
	"user": {
		"id":"5e9f172fe2c4126db70cb258"
	}
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "msg": "Jacob2555 is now unblocked"
}
```

---

### 5.Add items to database

#### Request

Authentication required as an admin

`POST /api/v1/admin/add`

Body

```js
{
	"items": [
		{
		    "category": "furniture",
		    "subCatogery": "chair",
		    "name": "super comfy",
		    "image": ["String"],
		    "price": "5000",
		    "brand": "no soo comfy",
		    "stars": "4.5",
		    "seller": "unknown",
		    "soldCount": "200",
		    "discount": "20",
		    "size": "big",
		    "discription": ["hey this is super confy"],
		    "review": [],
		    "quantity": "900",
		    "varient": {
		      "gender": "all",
		      "ageGroup": "all",
		      "genere": "none",
		      "weight": "5",
		      "color": "black"
		     }
        },
		{
			"category": "furniture2",
		    "subCatogery": "chair2",
		    "name": "super comfy2",
		    "image": ["String"],
		    "price": "5005",
		    "brand": "no soo000 comfy",
		    "stars": "4.5",
		    "seller": "unknown",
		    "soldCount": "2005",
		    "discount": "20",
		    "size": "big",
		    "discription": ["hey this is super confy"],
		    "review": [],
		    "quantity": "900",
		    "varient": {
		      "gender": "all",
		      "ageGroup": "all",
		      "genere": "none",
		      "weight": "5",
		      "color": "black green"
		    }
		},
		{
			"category": "furniture3",
		    "subCatogery": "chair6",
		    "name": "super comfy89",
		    "image": ["String"],
		    "price": "5000",
		    "brand": "no soo comfy",
		    "stars": "4.5",
		    "seller": "unknown",
		    "soldCount": "200",
		    "discount": "20",
		    "size": "big",
		    "discription": ["hey this is super confy"],
		    "review": [],
		    "quantity": "900",
		    "varient": {
		      "gender": "all",
		      "ageGroup": "all",
		      "genere": "none",
		      "weight": "5",
		      "color": "black"
		    }
		},
		{
			"category": "furniture4",
		    "subCatogery": "chair6",
		    "name": "super comfy89",
		    "image": ["String"],
		    "price": "5000",
		    "brand": "no soo comfy",
		    "stars": "4.5",
		    "seller": "unknown",
		    "soldCount": "200",
		    "discount": "20",
		    "size": "big",
		    "discription": ["hey this is super confy"],
		    "review": [],
		    "quantity": "900",
		    "varient": {
		      "gender": "all",
		      "ageGroup": "all",
		      "genere": "none",
		      "weight": "5",
		      "color": "black"
		    }
		}
	]
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "items": [
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d60",
            "category": "furniture",
            "subCatogery": "chair",
            "name": "super comfy",
            "price": 5000,
            "brand": "no soo comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 200,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.400Z",
            "updatedAt": "2020-04-24T06:56:52.400Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black green"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d61",
            "category": "furniture2",
            "subCatogery": "chair2",
            "name": "super comfy2",
            "price": 5005,
            "brand": "no soo000 comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 2005,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.439Z",
            "updatedAt": "2020-04-24T06:56:52.439Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d62",
            "category": "furniture3",
            "subCatogery": "chair6",
            "name": "super comfy89",
            "price": 5000,
            "brand": "no soo comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 200,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.459Z",
            "updatedAt": "2020-04-24T06:56:52.459Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d63",
            "category": "furniture4",
            "subCatogery": "chair6",
            "name": "super comfy89",
            "price": 5000,
            "brand": "no soo comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 200,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.470Z",
            "updatedAt": "2020-04-24T06:56:52.470Z",
            "__v": 0
        }
    ]
}
```

---

### 6.Get all the items from database

#### Request

No Authentication required as an admin

`GET /api/v1/admin/all`

Body

```js
[empty];
```

Header

```js
Authorization = [not needed];
```

#### Response

```js
{
    "products": [
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d60",
            "category": "furniture",
            "subCatogery": "chair",
            "name": "super comfy",
            "price": 5000,
            "brand": "no soo comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 200,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.400Z",
            "updatedAt": "2020-04-24T06:56:52.400Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black green"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d61",
            "category": "furniture2",
            "subCatogery": "chair2",
            "name": "super comfy2",
            "price": 5005,
            "brand": "no soo000 comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 2005,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.439Z",
            "updatedAt": "2020-04-24T06:56:52.439Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d62",
            "category": "furniture3",
            "subCatogery": "chair6",
            "name": "super comfy89",
            "price": 5000,
            "brand": "no soo comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 200,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.459Z",
            "updatedAt": "2020-04-24T06:56:52.459Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [
                    "none"
                ],
                "gender": "all",
                "ageGroup": "all",
                "weight": 5,
                "color": "black"
            },
            "image": [
                "String"
            ],
            "discription": [
                "hey this is super confy"
            ],
            "review": [],
            "_id": "5ea28db466cdb22611d06d63",
            "category": "furniture4",
            "subCatogery": "chair6",
            "name": "super comfy89",
            "price": 5000,
            "brand": "no soo comfy",
            "stars": 4.5,
            "seller": "unknown",
            "soldCount": 200,
            "discount": 20,
            "size": "big",
            "quantity": 900,
            "createdAt": "2020-04-24T06:56:52.470Z",
            "updatedAt": "2020-04-24T06:56:52.470Z",
            "__v": 0
        }
    ]
}
```

---

### 7.UnBlock a user

#### Request

Authentication required as an admin

`PUT /api/v1/admin/update`

Body

```js
{
	"item" : {
		"id":"5ea28db466cdb22611d06d62",
		"price": "699858"
	}
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "item": {
        "varient": {
            "genere": [
                "none"
            ],
            "gender": "all",
            "ageGroup": "all",
            "weight": 5,
            "color": "black"
        },
        "image": [
            "String"
        ],
        "discription": [
            "hey this is super confy"
        ],
        "review": [],
        "_id": "5ea28db466cdb22611d06d62",
        "category": "furniture3",
        "subCatogery": "chair6",
        "name": "super comfy89",
        "price": 699858,
        "brand": "no soo comfy",
        "stars": 4.5,
        "seller": "unknown",
        "soldCount": 200,
        "discount": 20,
        "size": "big",
        "quantity": 900,
        "createdAt": "2020-04-24T06:56:52.459Z",
        "updatedAt": "2020-04-24T07:05:43.945Z",
        "__v": 0
    }
}
```

---

### 8.Delete an item

#### Request

Authentication required as an admin

`DELETE /api/v1/admin/delete`

Body

```js
{
	"item" : {
		"id":"5ea28db466cdb22611d06d62"
	}
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "msg": "success"
}
```

---
