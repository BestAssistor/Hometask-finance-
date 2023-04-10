export function planValidation(arr) {
    let errors = [];

    // Check if all arguments are present
    if (!arr.fileName || !arr.legalForm || !arr.toVat) {
        errors.push('All fields are required.');
    }

    // Check if filename is at least 4 characters long
    if (arr.fileName && arr.fileName.length < 4) {
        errors.push('Filename must be at least 4 characters long.');
    }

    // Check if legalForm is valid
    if (arr.legalForm && !['Company', 'Freelance', 'ASBL'].includes(arr.legalForm)) {
        errors.push('Legal form must be one of "Company", "Freelance", or "ASBL".');
    }

    // Check if VAT is valid
    if (arr.toVat && !['Yes', 'No'].includes(arr.toVat)) {
        errors.push('VAT must be either "Yes" or "No".');
    }

    return errors;
};