// seedAdmin.js — Run once to create the admin account
// Usage: node seedAdmin.js
const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const exists = await User.findOne({ email: 'admin@credit.com' });
  if (exists) { console.log('Admin already exists'); process.exit(); }
  await User.create({ name: 'Admin', email: 'admin@credit.com', password: 'admin123', role: 'admin' });
  console.log('✅ Admin created: admin@credit.com / admin123');
  process.exit();
})();
