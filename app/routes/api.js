const express = require('express');
const Company = require('../models/Company');
const UserController = require('../controllers/user-controller');

module.exports = (app) => {
    // GET - pobierz wszystkie firmy
    app.get('/api/companies', async (req, res) => {
        try {
            const companies = await Company.find();
            res.json(companies);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // GET - pobierz firmę po slug
    app.get('/api/companies/:slug', async (req, res) => {
        try {
            const company = await Company.findOne({ slug: req.params.slug });
            if (!company) {
                return res.status(404).json({ error: 'Firma nie została znaleziona' });
            }
            res.json(company);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // POST - dodaj nową firmę
    app.post('/api/companies', async (req, res) => {
        try {
            const company = new Company(req.body);
            await company.save();
            res.status(201).json(company);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // PUT - zaktualizuj firmę
    app.put('/api/companies/:slug', async (req, res) => {
        try {
            const company = await Company.findOneAndUpdate(
                { slug: req.params.slug },
                req.body,
                { new: true, runValidators: true }
            );
            if (!company) {
                return res.status(404).json({ error: 'Firma nie została znaleziona' });
            }
            res.json(company);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    // DELETE - usuń firmę
    app.delete('/api/companies/:slug', async (req, res) => {
        try {
            const company = await Company.findOneAndDelete({ slug: req.params.slug });
            if (!company) {
                return res.status(404).json({ error: 'Firma nie została znaleziona' });
            }
            res.json({ message: 'Firma została usunięta' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });

    // POST - rejestracja użytkownika
    app.post('/api/register', UserController.register);
    
    // POST - logowanie użytkownika
    app.post('/api/login', UserController.login);
};