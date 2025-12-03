require('dotenv').config();
const mongoose = require('mongoose');

// Import modelu Company
const Company = require('./app/models/Company');

// Połączenie z bazą danych
mongoose.connect(process.env.DATABASE || 'mongodb+srv://wbukowski1985_db_user:13r2KteToN4bUcpw@3cluster0.lorpoxv.mongodb.net/kurs-node?retryWrites=true&w=majority')
.then(() => {
    console.log('Połączono z bazą danych MongoDB');
    return addCompanies();
})
.then(() => {
    console.log('Firmy zostały dodane do bazy danych');
    process.exit(0);
})
.catch((error) => {
    console.error('Błąd:', error);
    process.exit(1);
});

async function addCompanies() {
    const companies = [
        {
            name: "Microsoft Corporation",
            slug: "microsoft",
            webUrl: "https://microsoft.com",
            description: "Amerykańska korporacja technologiczna specjalizująca się w oprogramowaniu komputerowym",
            employees: 221000,
            founded: new Date('1975-04-04')
        },
        {
            name: "Google LLC",
            slug: "google",
            webUrl: "https://google.com",
            description: "Amerykańska korporacja internetowa specjalizująca się w usługach internetowych i technologii",
            employees: 174014,
            founded: new Date('1998-09-04')
        },
        {
            name: "Apple Inc.",
            slug: "apple",
            webUrl: "https://apple.com",
            description: "Amerykańska korporacja technologiczna projektująca i produkująca elektronikę użytkową",
            employees: 164000,
            founded: new Date('1976-04-01')
        },
        {
            name: "Amazon.com Inc.",
            slug: "amazon",
            webUrl: "https://amazon.com",
            description: "Amerykańska korporacja e-commerce i usług chmurowych",
            employees: 1541000,
            founded: new Date('1994-07-05')
        },
        {
            name: "Meta Platforms Inc.",
            slug: "meta",
            webUrl: "https://meta.com",
            description: "Amerykańska korporacja technologiczna właściciel platform społecznościowych",
            employees: 77114,
            founded: new Date('2004-02-04')
        },
        {
            name: "Tesla Inc.",
            slug: "tesla",
            webUrl: "https://tesla.com",
            description: "Amerykańska korporacja produkująca samochody elektryczne i systemy przechowywania energii",
            employees: 140473,
            founded: new Date('2003-07-01')
        },
        {
            name: "Netflix Inc.",
            slug: "netflix",
            webUrl: "https://netflix.com",
            description: "Amerykańska platforma streamingowa i producent treści rozrywkowych",
            employees: 12800,
            founded: new Date('1997-08-29')
        }
    ];

    try {
        // Usuń istniejące firmy (opcjonalnie)
        await Company.deleteMany({});
        console.log('Usunięto istniejące firmy');

        // Dodaj nowe firmy
        const result = await Company.insertMany(companies);
        console.log(`Dodano ${result.length} firm do bazy danych`);

        // Wyświetl dodane firmy
        result.forEach(company => {
            console.log(`✓ ${company.name} (${company.slug})`);
        });

        return result;
    } catch (error) {
        console.error('Błąd podczas dodawania firm:', error);
        throw error;
    }
}
