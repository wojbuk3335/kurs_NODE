const CompanyController=require('../controllers/company-controller.js')
const PageController=require('../controllers/page-controller.js')

module.exports = (app) => {
    app.get('/', PageController.showHome)
    app.get('/firmy/:name', CompanyController.showCompany)
    app.use(PageController.showNotFound)
}