module.exports = {
    // Middleware do ustawiania podstawowych zmiennych lokalnych
    setUserLocals: (req, res, next) => {
        res.locals.email = "WOJCIECH BUKOWSKI";
        next();
    },

    // Middleware do obsługi zalogowanych użytkowników
    authMiddleware: (req, res, next) => {
        // Sprawdź czy użytkownik jest zalogowany (z sesji)
        if (req.session && req.session.user) {
            // Użytkownik jest zalogowany - przekaż dane do widoków
            res.locals.isLoggedIn = true;
            res.locals.userEmail = req.session.user.email;
            res.locals.userId = req.session.user.id;
        } else {
            // Użytkownik nie jest zalogowany
            res.locals.isLoggedIn = false;
            res.locals.userEmail = null;
            res.locals.userId = null;
        }
        next();
    }
}