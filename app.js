const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoutes = require('./Routes/UserRouter');
const BasicsRoutes = require('./Routes/BasicsRoute');
const UserProgressRoutes = require('./Routes/UserProgressRoutes');
const UserQuiz = require('./Routes/QuizRoute');
const BearishRouter = require('./Routes/BearishRouter');
const TechnicalRouter = require('./Routes/TechnicalndicatorsRoute');
const FundamentalRouter = require('./Routes/FundamentalAnalysisRoute');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config();

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error('MongoDB connection string is missing in .env file');
  process.exit(1);
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express();

app.get("/", (req, res) => {
  res.send("working");
});


// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/', UserRoutes);
app.use('/api',UserProgressRoutes);
app.use('/api',UserQuiz);
app.use('/api',BearishRouter);
app.use('/api',BasicsRoutes);
app.use('/api',TechnicalRouter);
app.use('/api',FundamentalRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

export default app;
