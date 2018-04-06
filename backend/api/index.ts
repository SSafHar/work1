import * as express from 'express';
import { bannerRouter } from './banner';
import { businessRouter } from './business';
import { emailRouter } from './email';
import { homeServiceRouter } from './home-service-card';
import { jobRouter } from './job';
import { locationRouter } from './location';
import { partnerRouter } from './partner';
import { projectRouter } from './project';
import { serviceRouter } from './service';
import { teamRouter } from './team-member';

export const apiRouter = express.Router();

apiRouter.use('/email', emailRouter);
apiRouter.use('/home', homeServiceRouter);
apiRouter.use('/partner', partnerRouter);
apiRouter.use('/business', businessRouter);
apiRouter.use('/banner', bannerRouter);
apiRouter.use('/job', jobRouter);
apiRouter.use('/location', locationRouter);
apiRouter.use('/project', projectRouter);
apiRouter.use('/service', serviceRouter);
apiRouter.use('/team', teamRouter);

apiRouter.use((req, res) => {
  res.status(404).end();
});
