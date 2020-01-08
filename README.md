# **API User Guide**
**BASE URL** https://node-server-med-cabinet.herokuapp.com

**Table of Contents:**
---------
[Authentication Routes](#Authentication-Routes) | [Recommendation Routes](#Recommendation-Routes) | [Strain Routes](#Strain-Routes) | [Helper Routes](#Helper-Routes)

## **Authentication Routes**

###  **User Registration**:

#### POST */api/auth/register*

Creates a new user account.
Returns an object with user info and a JSON web token.

Input:
```javascript
{
  email: "example@email.com", // string (required)
  password: "abc123!", // string (required)
  first_name: "firstname", // string (required)
  last_name: "lastname" // string (required)
}
```
Output:

```javascript
{
  user: {
      id: 1,
      email: "example@email.com",
      first_name: "firstname",
      last_name: "lastname"
  },
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwicm9sZV9pZCI6MSwiaWF0IjoxNTc3MTY1MDY3LCJleHAiOjE1NzcxNjg2Njd9.pg1rqfKM5BxyLssMVyL8xrCW9BjKZhmqIrODlZp16Kk"
}
```

### **User Login**
[back to top](#api-user-guide)

#### POST */api/auth/login*

Validates user credentials.
Returns an object with user info and a JSON web token.

Input:
```javascript
{
  email: "example@email.com", // string (required)
  password: "abc123!", // string (required)
}
```

Output:
```javascript
{
  message: "Welcome ${user.first_name}!",
  credentials: {
    user: {
      id: 1,
      email: "example@email.com",
      first_name: "firstname",
      last_name: "lastname"
    },
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc4NDE4NzY1LCJleHAiOjE1Nzg1MDUxNjV9.VIoyWSOLYiNKJR4araMaZxzAX-10fJzTsAu1NL-R0UE"
  }
}
```

## **Recommendation Routes**

### **User Recommendation**
[back to top](#api-user-guide)

#### GET */api/user/:id/recommendation*

Returns an array of user recommended strains and the user id.

Request:
```
/api/user/1/recommendation
```

Output:
```javascript
[
  {
    "user_id": 1,
    "strain_id": 7
  },
  {
    "user_id": 1,
    "strain_id": 8
  },
  {
    "user_id": 1,
    "strain_id": 9
  },
  ...
]
```

#### POST */api/user/:id/recommendation*

Adds a strain to the user's recommendations.
Returns an id (in relation to the amount of strain's already recommended to user).

Input:
```javascript
{
  strain_id: 7 // integer (required)
}
```

Output:
```javascript
[
  {
    4
  }
]
```

#### DELETE */api/user/:id/recommendation/:id*

Removes recommended strain by strain id.

Request:
```
/api/user/1/recommendation/2
```

Output:
```javascript
{
  message: "Recommendation removed"
}
```


## **Strain Routes**
[back to top](#api-user-guide)

### **Strains**

URL: https://node-server-med-cabinet.herokuapp.com/api/strains

#### GET */api/strains*

Returns an array of all strains in the database.

Request:
```javascript
// No input needed
```
Response:
```javascript
[
  {
      id: 1,
      strain: "Ak-47"
  },
  {
      id: 2,
      name: "Afghani"
  },
  {
      id: 3,
      name: "Alohaberry"
  },
  ...
]
```

#### POST */api/strains*

Creates a new strain in the database.

Request:
```javascript
{
  strain: "Purple Kush" // string (required)
}
```

Response:
```javascript
[
  {
      id: 1,
      strain: "Purple Kush"
  }
]
```

## **Helper Routes**
[back to top](#api-user-guide)

#### PUT */api/user/:id*

Updates user account information

Request:
```
/api/user/1
```
Input:
```javascript
{
  email: "example@email.com" // string (required)
}

// or

{
  password: "abc123!"
}

// or

{
  first_name: "firstname"
}
...
```

Response:
```javascript
{
  "message": "User has been updated",
  "user": [
    {
      "id": 1,
      "email": "example@email.com",
      "password": "abc123!",
      "first_name": "firstname",
      "last_name": "lastname"
    }
  ]
```