# Node.js (express) API starter with mongodb

This is a personal api starter that I've developed and found useful. It's not perfect, and I make no claims of security so use at your own risk and enjoy.

## **Usage**

### Configure your .env vars
- Create a file named   `.env`  and save it on the root
- DO NOT commit this file, the .gitignore is already set up to prevent that.
- It should look something like this:  
```
NODE_ENV="development"
SERVER_PORT="9999"
SERVER_HOST="127.0.0.1"
MONGO_URI="mongodb://localhost:27017/db_dev"
MAIL_USER="myemail@host.com"
MAIL_PASS="password"
MAIL_FROM="Barak Obama"
AUTH_SECRET="some-long-ugly-hash"
```

### Fire it up
- `npm start` assumes development mode so does not use forever.js
- `npm run prod` starts production but admittedly this has never been used.
- `npm run stop` stops forever.js
- `npm test` coming soon
