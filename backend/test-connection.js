const mongoose = require('mongoose');
require('dotenv').config();

console.log('🔍 Testing MongoDB Atlas Connection...\n');
console.log('📍 MongoDB URI:', process.env.MONGODB_URI?.replace(/:[^:@]+@/, ':****@'));

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('\n✅ SUCCESS! MongoDB Atlas Connected!');
  console.log('📊 Database:', mongoose.connection.name);
  console.log('🌐 Host:', mongoose.connection.host);
  console.log('\n🎉 Your MongoDB connection is working perfectly!\n');
  process.exit(0);
})
.catch((error) => {
  console.error('\n❌ ERROR: MongoDB Connection Failed!');
  console.error('📝 Error Message:', error.message);
  console.error('\n💡 Common fixes:');
  console.error('   1. Check your MongoDB Atlas username and password');
  console.error('   2. Ensure your IP address is whitelisted in Atlas');
  console.error('   3. Verify the cluster URL is correct');
  console.error('   4. Check if the database user has proper permissions\n');
  process.exit(1);
});

// Timeout after 10 seconds
setTimeout(() => {
  console.log('\n⏱️  Connection timeout - taking too long');
  process.exit(1);
}, 10000);
