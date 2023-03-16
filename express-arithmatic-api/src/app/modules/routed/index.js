const router = require('express').Router();
const fn = require('path').basename(__filename);
const { logger } = require('../service/logger/logger');

// Avaiable Routes for this directory
router.use('/api', require('./api'));

// Handle all unmatched routes with a 404 error
router.use(function (req, res, next) {
    logger.error(`[${fn}]: Unmatched Route. Please check the error log for more information.`, error.details);
    res.status(404).json({
        error: 'Route not found. Available routes: api/addition/:num1/:num2, api/subtraction/:num1/:num2, api/multiplication/:num1/:num2, api/division/:num1/:num2, api/modulation/:num1/:num2'
    });

    next();
});

module.exports = router;