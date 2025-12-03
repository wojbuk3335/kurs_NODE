const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    webUrl: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    founded: {
        type: Date
    },
    employees: {
        type: Number
    }
}, {
    timestamps: true
});

const Company = mongoose.model('Company', companySchema, 'companies');

module.exports = Company;