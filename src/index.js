const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname,'../views');
const partials_Path = path.join(__dirname,'../views/partials');
const add = require('./model/model');
const collection1 = add.collection1;
const collection2 = add.collection2;
require('./database/config');

app.set('view engine', 'hbs');
app.set('views', staticPath);
app.use('/public', express.static(path.join(__dirname,"../public")))
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
hbs.registerPartials(partials_Path);
app.use(express.urlencoded({ extended : false }))

app.get('/', (req,res)=>{
    res.render("home")
});
app.post('/contactdata', async (req, res) => {
  try {
    const username = req.body.user;
    const email = req.body.email;
    const msg = req.body.msg;
    const contactSave = new collection1({
      name : username,
      email : email,
      message : msg
    });
    const saveData = await contactSave.save();
    if(saveData){
      res.render('contact');
    }
  } catch (error) {
    res.status(401).send(error)
  }
});

app.post('/profile', async (req,res) => {
  try{
    const username = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const conpassword = req.body.conpassword;
    if(password === conpassword){
      const signupSave = new collection2({
        name : username,
        email : email,
        phone : phone,
        password : password,
        conpassword : conpassword
      });
      const savesignData = await signupSave.save();
      if(savesignData){
        res.render('home', {name : "excellent"});
      }
    } else(res.send(`password are not matching`))
    
    
  }catch (error){
    res.status(401).send(error);
  }

})
app.get('/home', (req, res) => {
  res.render('home');
});


app.get('/about', (req, res) => {
    res.render('about');
  });

  app.get('/projects', (req, res) => {
    res.render('projects');
  });

app.get('/contact', (req, res) => {
    res.render('contact');
  });
app.listen(port, ()=>{
    console.log(`listing to the port at ${port}`);
});