## Admin EndPoint

1.Admin data is hardcoded in database so no signup.
2.Admin can update his info as a normal user.

### 1.Login

#### Request

`POST /api/v1/admin/user/login`

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
		"id":"5ea9ab25070bb275f177ad82"
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
    "updatedUser": {
        "id": "5ea9ab25070bb275f177ad82",
        "username": "Jacob0008",
        "email": "jake@jake008.jake",
        "coupons": [],
        "address": [],
        "order": [],
        "fav": [],
        "cart": "5ea9ab26070bb275f177ad83",
        "isBlocked": true
    }
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
    "updatedUser": {
        "id": "5ea9ab25070bb275f177ad82",
        "username": "Jacob0008",
        "email": "jake@jake008.jake",
        "coupons": [],
        "address": [],
        "order": [],
        "fav": [],
        "cart": "5ea9ab26070bb275f177ad83",
        "isBlocked": false
    }
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

### 7.Update item details

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
		"id":"5eabf775079a3a41f3640672"
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
    "product": {
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
        "_id": "5eabf775079a3a41f3640672",
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
        "createdAt": "2020-05-01T10:18:29.069Z",
        "updatedAt": "2020-05-01T10:18:29.069Z",
        "__v": 0
    }
}
```

---

## User EndPoint

### 1.SignUp

#### Request

Email will be sent everytime a new user signup

`POST api/v1/users`

Body

```js
{
  "user":{
    "username": "Jacob007",
    "email": "jake@jake007.jake",
    "password": "jakejake007"
  }
}
```

#### Response

```js
{
    "user": {
        "username": "Jacob007",
        "email": "jake@jake007.jake",
        "token": "jwt token in form of x.y.z",
        "coupons": [],
        "address": [],
        "order": [],
        "fav": [],
        "cart": {
            "productId": [],
            "_id": "5ea29f1766cdb22611d06d69",
            "userId": "5ea29f1766cdb22611d06d68",
            "createdAt": "2020-04-24T08:11:03.940Z",
            "updatedAt": "2020-04-24T08:11:03.940Z",
            "__v": 0
        }
    },
    "email": {
        "msg": "success"
    }
}
```

---

### 2.SignIn

#### Request

`GET /api/v1/users/login`

Body

```js
{
  "user":{
    "email": "jake@jake007.jake",
    "password": "jakejake007"
  }
}
```

#### Response

```js
{
    "user": {
        "username": "Jacob007",
        "email": "jake@jake007.jake",
        "token": "jwt token in form of x.y.z",
        "coupons": [],
        "address": [],
        "order": [],
        "fav": [],
        "cart": {
            "productId": [],
            "_id": "5ea29f1766cdb22611d06d69",
            "userId": "5ea29f1766cdb22611d06d68",
            "createdAt": "2020-04-24T08:11:03.940Z",
            "updatedAt": "2020-04-24T08:11:03.940Z",
            "__v": 0
        }
    }
}
```

---

### 3.Update User Info

#### Request

Authentication as a user

`PUT /api/v1/user`

Body

```js
{
  "user":{
    "username": "Jacob008",
    "image":"image url"
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
    "user": {
        "username": "Jacob008",
        "email": "jake@jake007.jake",
        "image": "image url",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWE5YWIyNTA3MGJiMjc1ZjE3N2FkODIiLCJlbWFpbCI6Impha2VAamFrZTAwOC5qYWtlIiwiaWF0IjoxNTg4NzUzMTE0fQ.sUptK-0omGbbxlknwIvyou4Ee4DIMJWDO5TxhCzRwrg",
        "coupons": [],
        "address": [],
        "order": [],
        "fav": [],
        "cart": "5ea29f1766cdb22611d06d69"
    }
}
```

---

### 4.Add item to cart

#### Request

Authentication as a user

`POST /api/v1/user/cart`

Body

```js
{
  "product":{
    "id": "5ea28db466cdb22611d06d61"
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
    "cart": {
        "product": [
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
            }
        ],
        "_id": "5ea29f1766cdb22611d06d69",
        "userId": "5ea29f1766cdb22611d06d68",
        "createdAt": "2020-04-24T08:11:03.940Z",
        "updatedAt": "2020-04-24T08:32:57.108Z",
        "__v": 0
    }
}
```

---

### 5.Get All items to cart

#### Request

Authentication as a user

`GET /api/v1/user/cart`

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
    "cart": {
        "product": [
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
            }
        ],
        "_id": "5ea2a66978cd3a3191a8dd12",
        "userId": "5ea2a66978cd3a3191a8dd11",
        "createdAt": "2020-04-24T08:42:17.550Z",
        "updatedAt": "2020-04-24T08:45:38.146Z",
        "__v": 0
    }
}
```

---

### 6.Remove item to cart

#### Request

Authentication as a user

`DELETE /api/v1/user/cart`

Body

```js
{
  "product":{
    "id": "5ea28db466cdb22611d06d61"
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
    "msg": "product removed"
}
```

---

### 7.Add comment to a product

#### Request

Authentication as a user is required

`POST /api/v1/comments`

Body

```js
{
	"comment": {
		"stars":"4.5",
		"body":"this is a test comments60",
		"productId":"5ea28db466cdb22611d06d61"
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
    "comment": [
        {
            "id": "5ea2aaba755df0343f643069",
            "productId": "5ea28db466cdb22611d06d61",
            "body": "this is a test comments60",
            "stars": 4.5,
            "username": "Jacob0008"
        }
    ]
}
```

---

### 8.Get all comments of a product

#### Request

Authentication as a user is not required

`GET /api/v1/comments`

Body

```js
{
	"comment": {
		"productId":"5ea28db466cdb22611d06d61"
	}
}
```

#### Response

```js
{
    "comments": [
        {
            "id": "5ea2aa6d755df0343f643067",
            "productId": "5ea28db466cdb22611d06d61",
            "body": "this is a test comments58",
            "stars": 4.5,
            "username": "Jacob2555"
        },
        {
            "id": "5ea2aaba755df0343f643069",
            "productId": "5ea28db466cdb22611d06d61",
            "body": "this is a test comments60",
            "stars": 4.5,
            "username": "Jacob0008"
        }
    ]
}
```

---

### 9.Update comments of a product

#### Request

Authentication as a user is required

`PUT /api/v1/comments`

Body

```js
{
	"comment": {
		 "id": "5ea2aaba755df0343f643069",
      "productId": "5ea28db466cdb22611d06d61",
      "body": "this is a test for updated  comments nnnn",
      "stars": 4.5
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
    "comment": [
        {
            "id": "5ea2aaba755df0343f643069",
            "productId": "5ea28db466cdb22611d06d61",
            "body": "this is a test for updated  comments nnnn",
            "stars": 4.5,
            "username": "Jacob0008"
        }
    ]
}
```

---

### 10.Delete comments of a product

#### Request

Authentication as a user is required

`DELETE /api/v1/comments`

Body

```js
{
	"comment": {
		 "id": "5ea2aaba755df0343f643069",
         "productId": "5ea28db466cdb22611d06d61"
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
  msg: "comment deleted";
}
```

---

### 11.Add User Address

#### Request

Authentication as a user is required

`POST /api/v1/user/address`

Body

```js
{
  "address":{
   "address": {
      "name": "String23",
      "sonOf": "String23",
      "mobNumber": "552423455445",
      "address1": "String2323",
      "address2": "String2323",
      "area": "String3232",
      "district": "String2323",
      "state": "String2323",
      "pinCode": "524545232322"
    }
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
    "address": [
        {
            "_id": "5ea2af8b8e2065378de36cf4",
            "address": {
                "name": "String23",
                "sonOf": "String23",
                "mobNumber": 552423455445,
                "address1": "String2323",
                "address2": "String2323",
                "area": "String3232",
                "district": "String2323",
                "state": "String2323",
                "pinCode": 524545232322
            },
            "resident": "5ea2a66978cd3a3191a8dd11",
            "createdAt": "2020-04-24T09:21:16.014Z",
            "updatedAt": "2020-04-24T09:21:16.014Z",
            "__v": 0
        },
        {
            "_id": "5ea2af8c8e2065378de36cf5",
            "createdAt": "2020-04-24T09:21:16.014Z",
            "updatedAt": "2020-04-24T09:21:16.014Z",
            "__v": 0
        }
    ]
}
```

---

### 12.Get User's All Address

#### Request

Authentication as a user is required

`GET /api/v1/user/address`

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
    "address": [
        {
            "address": {
                "name": "String23",
                "sonOf": "String23",
                "mobNumber": 552423455445,
                "address1": "String2323",
                "address2": "String2323",
                "area": "String3232",
                "district": "String2323",
                "state": "String2323",
                "pinCode": 524545232322
            },
            "_id": "5ea2af8b8e2065378de36cf4",
            "resident": "5ea2a66978cd3a3191a8dd11",
            "createdAt": "2020-04-24T09:21:16.014Z",
            "updatedAt": "2020-04-24T09:21:16.014Z",
            "__v": 0
        },
        {
            "address": {
                "name": "String234",
                "sonOf": "String234",
                "mobNumber": 5524234554454,
                "address1": "String23234",
                "address2": "String23234",
                "area": "String32324",
                "district": "String23234",
                "state": "String23234",
                "pinCode": 5245452323224
            },
            "_id": "5ea2b0df8e2065378de36cf6",
            "resident": "5ea2a66978cd3a3191a8dd11",
            "createdAt": "2020-04-24T09:26:55.878Z",
            "updatedAt": "2020-04-24T09:26:55.878Z",
            "__v": 0
        }
    ]
}
```

---

### 13.Update User's Address

#### Request

Authentication as a user is required

`PUT /api/v1/user/address`

Body

```js
{
  "address":{
  	"id":"5ea2af8b8e2065378de36cf4",
   "address": {
      "name": "this is an updated address",
      "sonOf": "String23",
      "mobNumber": "552423455445",
      "address1": "String2323",
      "address2": "String2323",
      "area": "String3232",
      "district": "String2323",
      "state": "String2323",
      "pinCode": "524545232322"
    }
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
    "address": {
        "address": {
            "name": "this is an updated address",
            "sonOf": "String23",
            "mobNumber": 552423455445,
            "address1": "String2323",
            "address2": "String2323",
            "area": "String3232",
            "district": "String2323",
            "state": "String2323",
            "pinCode": 524545232322
        },
        "_id": "5ea2af8b8e2065378de36cf4",
        "resident": "5ea2a66978cd3a3191a8dd11",
        "createdAt": "2020-04-24T09:21:16.014Z",
        "updatedAt": "2020-04-24T09:31:13.357Z",
        "__v": 0
    }
}
```

---

### 14.Delete User's Address

#### Request

Authentication as a user is required

`DELETE /api/v1/user/address`

Body

```js
{
  "address":{
  	"id":"5ea2b0df8e2065378de36cf6"
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
    "address": {
        "address": {
            "name": "String234",
            "sonOf": "String234",
            "mobNumber": 5524234554454,
            "address1": "String23234",
            "address2": "String23234",
            "area": "String32324",
            "district": "String23234",
            "state": "String23234",
            "pinCode": 5245452323224
        },
        "_id": "5ea2b0df8e2065378de36cf6",
        "resident": "5ea2a66978cd3a3191a8dd11",
        "createdAt": "2020-04-24T09:26:55.878Z",
        "updatedAt": "2020-04-24T09:26:55.878Z",
        "__v": 0
    }
}
```

---

### 15.Get fav list of User

#### Request

Authentication as a user is required

`GET /api/v1/user/fav`

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
    "allFav": {
        "id": "5ea2a66978cd3a3191a8dd11",
        "username": "Jacob0008",
        "fav": [
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
                "updatedAt": "2020-04-24T09:15:52.128Z",
                "__v": 0
            },
        ]
    }
}
```

---

### 16.Add to fav list of User

#### Request

Authentication as a user is required

`POST /api/v1/user/fav`

Body

```js
{
	"itemId": "5ea28db466cdb22611d06d60"
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "favList": {
        "id": "5ea2a66978cd3a3191a8dd11",
        "username": "Jacob0008",
        "fav": [
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
                "updatedAt": "2020-04-24T09:15:52.128Z",
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
                "updatedAt": "2020-04-24T09:15:52.128Z",
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
            }
        ]
    }
}
```

---

### 17.Remove from fav list of User

#### Request

Authentication as a user is required

`DELETE /api/v1/user/fav`

Body

```js
{
	"itemId": "5ea28db466cdb22611d06d60"
}
```

Header

```js
Authorization = token;
```

#### Response

```js
{
    "msg": "removed from fav list"
}
```

---

### 18.Place your order

#### Request

Authentication as a user is required

`POST /api/v1/user/order`

Body

```js
{
 "orders":[
	 {
		"productId":"5ea28db466cdb22611d06d61",
		"quantity":"20"
	},
	{
		"productId":"5ea28db466cdb22611d06d63",
		"quantity":"30"
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
    "orders": "placed",
    "mail": "sent"
}
```

---

### 19.Delete your account

#### Request

Authentication as a user is required

`DELETE /api/v1/user/order`

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
    "user": {
        "coupon": [],
        "fav": [],
        "address": [],
        "reviews": [],
        "order": [],
        "_id": "5ea9ab25070bb275f177ad82",
        "username": "hello3",
        "email": "jake@jake008.jake",
        "password": "$2a$10$ECObN.1oY067UkAiO2mhpeFShth15hMHP9hXfNKknJ84W0WqKHsiK",
        "isAdmin": false,
        "isBlocked": false,
        "createdAt": "2020-04-29T16:28:21.994Z",
        "updatedAt": "2020-05-06T08:23:30.852Z",
        "__v": 0,
        "cart": "5ea9ab26070bb275f177ad83",
        "image": "image url3"
    }
}
```

---

## Remaining No Auth Routes

### 1.Get item by category

#### Request

Authentication as a user is not required

`GET /api/v1/items/furniture`

Body

```js
[empty];
```

Header

```js
[empty];
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
        }
    ]
}
```

---

### 2.Get all item

#### Request

Authentication as a user is not required

`GET /api/v1/items`

Body

```js
[empty];
```

Header

```js
[empty];
```

#### Response

```js
{
    "products": [
        {
            "varient": {
                "genere": [],
                "gender": "male"
            },
            "image": [
                "https://upload.wikimedia.org/wikipedia/commons/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg"
            ],
            "discription": [],
            "review": [],
            "_id": "5eae79ba3430630c94a4ce36",
            "category": "book",
            "subCatogery": "fiction",
            "name": "To Kill a Mockingbird",
            "price": 499,
            "brand": "kiwi",
            "stars": 4.5,
            "seller": "eCart",
            "quantity": 200,
            "createdAt": "2020-05-03T07:58:50.336Z",
            "updatedAt": "2020-05-03T07:58:50.336Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [],
                "gender": "male"
            },
            "image": [
                "https://cms.qz.com/wp-content/uploads/2017/11/lord-of-the-rings-e1510686480965.jpg?quality=75&strip=all&w=1400"
            ],
            "discription": [],
            "review": [],
            "_id": "5eae7a2c3430630c94a4ce37",
            "category": "book",
            "subCatogery": "fiction",
            "name": "The Lord of the Rings",
            "price": 399,
            "brand": "kiwi",
            "stars": 4.7,
            "seller": "eCart",
            "quantity": 200,
            "createdAt": "2020-05-03T08:00:44.703Z",
            "updatedAt": "2020-05-03T08:00:44.703Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [],
                "gender": "male"
            },
            "image": [
                "https://geaugatheater.org/images/20192020header/gatsy_header.jpg"
            ],
            "discription": [],
            "review": [],
            "_id": "5eae7ab83430630c94a4ce38",
            "category": "book",
            "subCatogery": "fiction",
            "name": "The Great Gatsby",
            "price": 799,
            "brand": "kiwi",
            "stars": 4.5,
            "seller": "eCart",
            "quantity": 200,
            "createdAt": "2020-05-03T08:03:04.471Z",
            "updatedAt": "2020-05-03T08:03:04.471Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [],
                "gender": "male"
            },
            "image": [
                "https://prodimage.images-bn.com/pimages/9781435159631_p2_v3_s550x406.jpg"
            ],
            "discription": [],
            "review": [],
            "_id": "5eae7b133430630c94a4ce39",
            "category": "book",
            "subCatogery": "fiction",
            "name": "Pride and Prejudice",
            "price": 899,
            "brand": "kiwi",
            "stars": 4.6,
            "seller": "eCart",
            "quantity": 200,
            "createdAt": "2020-05-03T08:04:35.013Z",
            "updatedAt": "2020-05-03T08:04:35.013Z",
            "__v": 0
        },
        {
            "varient": {
                "genere": [],
                "gender": "male"
            },
            "image": [
                "https://i2.wp.com/www.raptisrarebooks.com/images/44341/anne-frank-the-diary-of-a-young-girl-first-edition.jpg?fit=1000%2C800&ssl=1"
            ],
            "discription": [],
            "review": [],
            "_id": "5eae7bfe3430630c94a4ce3a",
            "category": "book",
            "subCatogery": "fiction",
            "name": "The Diary Of A Young Girl",
            "price": 199,
            "brand": "kiwi",
            "stars": 4.6,
            "seller": "eCart",
            "quantity": 200,
            "createdAt": "2020-05-03T08:08:30.023Z",
            "updatedAt": "2020-05-03T08:08:30.023Z",
            "__v": 0
        },
    ]
}
```

---

## Error Message

### Format of all the error

```js
{
  "err": {
    "body": [
      "invalid signature"
    ]
  }
}
```
