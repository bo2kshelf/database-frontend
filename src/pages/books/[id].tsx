import {gql} from 'graphql-request';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {GraphQLRequestSdk} from '~/lib/graphql-request';
import {BookPage} from '~/templates/BookPage';

export const Query = gql`
  query GetAllBookIds {
    allBooks {
      id
    }
  }
`;

export type UrlQuery = {id: string};
export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{id: string}>) => {
  return params
    ? GraphQLRequestSdk.BookPage({id: params.id}).then((data) => ({
        props: data,
      }))
    : Promise.reject(new Error('Invalid parameters.'));
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => <BookPage {...props} />;

export default Page;
