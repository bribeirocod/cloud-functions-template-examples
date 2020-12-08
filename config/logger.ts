import { existsSync, mkdirSync } from 'fs';

import { createLogger, format, transports } from 'winston';

const logsDir = `${__dirname}/../../../logs`;
// Check if logs folder exists
if (!existsSync(logsDir)) {
  mkdirSync(logsDir);
}

const customFormat = format.printf(
  ({ level, message, date, ...args }) => `${date} [${args.class}] ${level}: ${message}`,
);

// Configure file logs
const logger = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.timestamp({
      alias: 'date',
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    customFormat,
    format.splat(),
    format.json(),
  ),
  transports: [
    new transports.Console({
      format: process.env.FORMAT_LOG_LOCAL === 'true' ? format.combine(format.colorize(), customFormat) : undefined,
    }),
  ],
  exitOnError: false,
});

export { logger };
