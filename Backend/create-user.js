const axios = require('axios');

async function createUsers() {
  try {
    const technician = await axios.post('http://localhost:5000/api/auth/register', {
      name: 'Test Technician 2',
      email: 'tech2@carems.in',
      password: 'password123',
      role: 'technician'
    });
    console.log('Technician created:', technician.data);
  } catch (err) {
    console.log('Technician creation failed:', err.response?.data || err.message);
  }

  try {
    const admin = await axios.post('http://localhost:5000/api/auth/register', {
      name: 'Test Admin 2',
      email: 'admin2@carems.in',
      password: 'password123',
      role: 'admin'
    });
    console.log('Admin created:', admin.data);
  } catch (err) {
    console.log('Admin creation failed:', err.response?.data || err.message);
  }
}

createUsers();
