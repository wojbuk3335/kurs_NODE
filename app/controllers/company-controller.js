const Company=require('../models/Company')

class CompanyController{

    showCompanies = async (req, res) => {
        try {
            const companies = await Company.find({});
            console.log('Pobrane firmy:', companies);
            res.render('pages/companies', {
                companies: companies,
                title: 'Wszystkie firmy'
            });
        } catch (error) {
            console.error('Błąd podczas pobierania firm:', error);
            res.status(500).render('pages/404', {
                title: 'Błąd serwera',
                layout: 'layouts/minimalistic'
            });
        }
    }

    showCompany=async(req, res) => {
        const {name}=req.params
        const firmy = await Company.find({});
        const companies=firmy.find(x=>x.slug===name)

        if(companies){
            res.render('pages/company',{
                company: companies,
                name: companies.name,
                title: companies.name,
                companies: firmy
            })
        }else{
            res.render('pages/404', {
                title: '404 - Nie znaleziono'
            })
        }
    }
}

module.exports=new CompanyController();