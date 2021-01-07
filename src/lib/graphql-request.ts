/* eslint-disable no-process-env */
import {GraphQLClient} from 'graphql-request';
import {getSdk} from '~/_generated/graphql-request';

export const GraphQLRequestClient = new GraphQLClient(
  process.env.GRAPHQL_API_ENDPOINT!,
);

export const GraphQLRequestSdk = getSdk(GraphQLRequestClient);
