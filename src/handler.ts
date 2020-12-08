import { Handler, Context } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';

import { HealthCheckController } from './controller/healthcheck';

import { logger } from '../config/logger';

const healthcheckController = new HealthCheckController();

export const healthCheckGET: Handler = (event: any, context: Context) => {
  logger.info('Logger Example', {
    class: context.functionName,
    traceId: uuidv4(),
  });

  return healthcheckController.healthCheckStatus(event, context);
};
