class PageController{
    showHome=(req, res) => {
    res.render('pages/home',
        {
            title:'Strona główna',
            user: req.session.user
        }
    )
    }

    showNotFound=(req, res) => {
        res.render('pages/404',{
            layout:'layouts/minimalistic',
            title:'Nie ma takiej strony'
        })
    }
}

module.exports=new PageController();

