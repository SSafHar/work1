import * as express from 'express';
import { join } from 'path';
import { readJson } from '../utils/fs-helpers';
import { setInternalServerError } from '../utils/request-helpers';

export const bannerRouter = express.Router();

const filePath = join(__dirname, '../data', 'banner.json');

bannerRouter.get('/list', (req, res) => {
  readJson(filePath)
    .catch((err) => setInternalServerError(res, err))
    .then((data) => res.json(data));
});
