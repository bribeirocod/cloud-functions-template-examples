export interface IHealthCheckStatusReturn {
  status: string;
}

export class HealthCheckService {
  protected async getHealthCheckStatus(): Promise<IHealthCheckStatusReturn> {
    return {
      status: 'ok',
    };
  }
}
