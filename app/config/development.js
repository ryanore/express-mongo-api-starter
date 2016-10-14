var nodemailer = require('nodemailer');

function getTransport() {
	return nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
	});

}

module.exports = {
  server : {port: process.env.SERVER_PORT ||  9999, host: process.env.SERVER_HOST},
  env: process.env.NODE_ENV,
  email: {
  	from: process.env.MAIL_FROM,
  	transport: getTransport()
  },
  db : process.env.MONGO_URI ,
  whitelist: '*',
  transport: getTransport(),
  auth: {
    secret: process.env.AUTH_SECRET,
    expiry_minutes: (60 * 3),
    expire_seconds: (60 * 60 * 3)
  }
};
