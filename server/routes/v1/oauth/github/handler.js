const router = require('express').Router();
const GitHubModel = require('#models/v1/oauth/github.js');

router.get('/', GitHubModel.handler);

module.exports = router;