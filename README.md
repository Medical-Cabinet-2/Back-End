# **API User Guide**

**Table of Contents:**
---------
[Authentication Routes](#Authentication-Routes) | [General Routes](#General-Routes)

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

Validates user's credentials.
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

## **General Routes**
[back to top](#api-user-guide)

### Strains
#### GET */api/strains*

Returns an array of all available strains

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