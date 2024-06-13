const router        = require('express').Router();
const controller    = require('./pessoas.controller');

router.get('/pessoas', async (req, res, next) => { await controller.getAll(req, res, next) });

router.post('/pessoas', async (req, res, next) => { await controller.save(req, res, next) });

router.put('/pessoas/:id', async (req, res, next) => { await controller.update(req, res, next) });

router.delete('/pessoas/:id', async (req, res, next) => { await controller.removeById(req, res, next) });

module.exports = router;