import { Context } from 'aws-lambda';
import { IReturnBody, MessageUtil } from '../utils/message';
import { HealthCheckService } from '../service/healthcheck';

export class HealthCheckController extends HealthCheckService {
  async healthCheckStatus(_event: any, _context?: Context): Promise<IReturnBody> {
    try {
      const result = await this.getHealthCheckStatus();

      return MessageUtil.success(result);
    } catch (err) {
      console.error(err);

      return MessageUtil.error(err.code, err.message);
    }
  }
}
