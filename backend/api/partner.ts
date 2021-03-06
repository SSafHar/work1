import * as express from 'express';
import { join } from 'path';
import { readJson } from '../utils/fs-helpers';
import { setInternalServerError } from '../utils/request-helpers';

export const partnerRouter = express.Router();

const filePath = join(__dirname, '../data', 'partners.json');

partnerRouter.get('/partners-list', (req, res) => {
  readJson(filePath)
    .then((data) => res.json(data))
    .catch((err) => setInternalServerError(res, err));
});
