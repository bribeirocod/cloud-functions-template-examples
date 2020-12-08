enum StatusCodeEnum {
  success = 200,
  error = 500,
}

export interface IReturnBody {
  statusCode: number;
  body: string;
}

class Result {
  private statusCode: number;

  private code: number;

  private message: string;

  private data?: any;

  constructor(statusCode: number, code: number, message: string, data?: any) {
    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  bodyToString(): IReturnBody {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        code: this.code,
        message: this.message,
        ...this.data,
      }),
    };
  }
}

export class MessageUtil {
  static success(data: object): IReturnBody {
    const result = new Result(StatusCodeEnum.success, 0, 'success', data);

    return result.bodyToString();
  }

  static error(code = 1000, message: string): IReturnBody {
    const result = new Result(StatusCodeEnum.error, code, message);

    console.log(result.bodyToString());
    return result.bodyToString();
  }
}
