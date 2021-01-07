import {gql} from 'graphql-request';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {GraphQLRequestSdk} from '~/lib/graphql-request';
import {AuthorPage} from '~/templates/AuthorPage';

export const Query = gql`
  query GetAllAuthorsIds {
    allAuthors {
      id
    }
  }
`;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{id: string}>) => {
  return params
    ? GraphQLRequestSdk.AuthorPage({id: params.id}).then((data) => ({
        props: data,
      }))
    : Promise.reject(new Error('Invalid parameters.'));
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => <AuthorPage {...props} />;

export default Page;
