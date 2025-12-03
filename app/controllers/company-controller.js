class CompanyController{
    showCompany=(req, res) => {
        const {name}=req.params
        const firmy=[
                {slug:"bukowski", webUrl:'BUKOWSKI',name:'bukowski'},
                {slug:"lavard",webUrl:'LAVARD',name:'lavard'},
                {slug:"konopka",webUrl:'KONOPKA',name:'konopka'},
                ]
        const companies=firmy.find(x=>x.slug===name)

        if(companies){
            res.render('pages/company',{
                name:companies.name,
                title:"companies.name",
                companies:firmy
            })
        }else{
            res.render('pages/404', {
                title: '404 - Nie znaleziono'
            })
        }
    }
}

module.exports=new CompanyController();