const CompanyController=require('../controllers/company-controller.js')
const PageController=require('../controllers/page-controller.js')

module.exports = (app) => {
    app.get('/', PageController.showHome)
    app.get('/firmy/:name', CompanyController.showCompany)
    app.get('/firmy',CompanyController.showCompanies)
    
    // 404 handler - must be last
    app.use((req, res, next) => {
        PageController.showNotFound(req, res)
    })
}