const fs = require('fs');
const path = require('path');

const envContent = `PORT=5000
MONGODB_URI=mongodb+srv://db_User_admin:naman283030@cluster0.knexdqm.mongodb.net/mern-todo?retryWrites=true&w=majority
JWT_SECRET=mern_todo_secret_key_2024_change_in_production_${Date.now()}
NODE_ENV=development
`;

const envPath = path.join(__dirname, '.env');

fs.writeFileSync(envPath, envContent);
console.log('✅ .env file created successfully!');
console.log('📍 Location:', envPath);
console.log('\n📝 Configuration:');
console.log('   - MongoDB Atlas connected');
console.log('   - Port: 5000');
console.log('   - JWT Secret: Generated');
console.log('\n🚀 You can now run: npm run dev');
