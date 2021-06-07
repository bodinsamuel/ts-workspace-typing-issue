import express from 'express';

export function startHttpServer({
  port,
  uses,
  app,
}: {
  port: number | string;
  uses?: Record<string, express.Application | express.RequestHandler<any>>;
  app?: express.Application | null;
}): Promise<any> {
  return Promise.resolve(true);
};
