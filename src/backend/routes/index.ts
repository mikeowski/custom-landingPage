import * as trpc from '@trpc/server';
import superjson from 'superjson';
import { infoRouter } from './info';
export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge('link.', infoRouter);
