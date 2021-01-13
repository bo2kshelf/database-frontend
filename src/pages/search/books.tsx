import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {GraphQLRequestSdk} from '~/lib/graphql-request';
import {SearchBooksPage} from '~/templates/SearchBooksPage';

export type UrlQuery = {title: string; after: string};
export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext<UrlQuery>) => {
  return query && query.title && typeof query.title === 'string'
    ? GraphQLRequestSdk.SearchBooksPage({title: query.title}).then((data) => ({
        props: data,
      }))
    : Promise.reject(new Error('Invalid parameters.'));
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => <SearchBooksPage {...props} />;

export default Page;
