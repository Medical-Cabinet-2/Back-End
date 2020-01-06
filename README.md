# **API User Guide**

**Table of Contents:**|
---------
[Authentication Routes](#Authentication-Routes)

### **Authentication Routes**

###  **User Registration**:

#### POST */api/auth/register*

Creates a new user account.
Returns an object with user info and a JSON web token.

Input:
```javascript
{
  email: "example@email.com", // string (required) [ must be in proper email format ]
  password: "abc123!", // string (required) [ min. 6 total characters | min. 1 special character | min. 1 digit ]
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
  user: {
      id: 1,
      email: "example@email.com",
      first_name: "firstname",
      last_name: "lastname"
  },
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwicm9sZV9pZCI6MSwiaWF0IjoxNTc3MTY1MDY3LCJleHAiOjE1NzcxNjg2Njd9.pg1rqfKM5BxyLssMVyL8xrCW9BjKZhmqIrODlZp16Kk"
}
```