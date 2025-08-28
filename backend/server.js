const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());  // Enable CORS for frontend requests
app.use(express.json()); // For parsing application/json
// Serve static frontend files
app.use(express.static('../frontend'));
// Sample API endpoint
app.get('/api/status', (req, res) => {
  res.json({ message: 'Abacus backend running!' });
});
// Additional API routes here
// Example: app.use('/api/abacus', require('./routes/api'));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
