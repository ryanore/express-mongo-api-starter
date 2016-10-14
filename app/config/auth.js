module.exports = {
  secret: process.env.AUTH_SECRET,
  expiry_minutes: (60 * 3),
  expire_seconds: (60 * 60 * 3)
};
