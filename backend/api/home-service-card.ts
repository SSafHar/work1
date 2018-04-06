import * as express from 'express';
import { join } from 'path';
import { readJson } from '../utils/fs-helpers';
import { setInternalServerError, setNotFound } from '../utils/request-helpers';

export const homeServiceRouter = express.Router();

const filePath = join(__dirname, '../data', 'home-service-card.json');

homeServiceRouter.get('/service-cards', (req, res) => {
  readJson(filePath)
    .catch((err) => setInternalServerError(res, err))
    .then((data) => res.json(data));
});

homeServiceRouter.get('/:serviceId', (req, res) => {
  readJson(filePath)
    .then((data) => {
      const service = data.find(j => j.id === req.params.serviceId);
      service ? res.json(service) : setNotFound(res);
    })
    .catch((err) => setInternalServerError(res, err));
});
