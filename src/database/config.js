const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const username = encodeURIComponent('codingMPVHS');
const password = encodeURIComponent('prathu@M123098');

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ynjylbb.mongodb.net/personalportfolio?retryWrites=true&w=majority`)
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((error) => {
    console.log(error);
  });
