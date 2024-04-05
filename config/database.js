const mongoose = require('mongoose');

// MongoDB connection configuration
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/shopify_payments', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // Exit the process if MongoDB connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
