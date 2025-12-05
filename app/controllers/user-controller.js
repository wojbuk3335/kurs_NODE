const User=require('../models/User.js')

class UserControllers{
  showRegister=(req,res)=>{
    res.render('pages/register')
  }

  showLogin=(req,res)=>{
    res.render('pages/login', {
      title: 'Logowanie'
    })
  }

  register=async (req,res)=>{
    const user=new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        phone:req.body.phone,
        company:req.body.company,
        position:req.body.position,
        interests:req.body.interests,
        terms:req.body.terms,
        newsletter:req.body.newsletter,
    })

    try{
        await user.save()
        res.redirect('/zaloguj')
    }catch(e){
        console.error("Błąd podczas rejestracji:", e)
        console.error("Szczegóły błędów:", e.errors)
        res.render('pages/register',{
            errors:e.errors,
            form:req.body
        })
    }
  }

login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (!user)
            throw new Error("Użytkownik nie znaleziony")

        const isValidPassword = true //await user.comparePassword(req.body.password)
        if (!isValidPassword)
            throw new Error("Nieprawidłowe hasło")

        // Logowanie
        req.session.user = req.body.email
        res.redirect('/')

    } catch(e) {
        res.render('pages/login', {
            error: e.message,  // ← ZMIANA: message zamiast errors
            form: req.body
        })
    }
}

  logout = (req, res) => {
    
  }
}

module.exports=new UserControllers();

