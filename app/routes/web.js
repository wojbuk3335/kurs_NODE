const CompanyController=require('../controllers/company-controller.js')
const PageController=require('../controllers/page-controller.js')
const UserControllers=require('../controllers/user-controller.js')

module.exports = (app) => {
    app.get('/', PageController.showHome)
    app.get('/firmy/:name', CompanyController.showCompany)
    app.get('/firmy',CompanyController.showCompanies)
    app.get('/register',UserControllers.showRegister)
    app.get('/zaloguj',UserControllers.showLogin)
    
    // 404 handler - must be last
    app.use((req, res, next) => {
        PageController.showNotFound(req, res)
    })
}