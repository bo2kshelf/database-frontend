import {gql} from 'graphql-request';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import {GraphQLRequestSdk} from '~/lib/graphql-request';
import {SeriesPage} from '~/templates/SeriesPage';

export const Query = gql`
  query GetAllSeriesIds {
    allSeries {
      id
    }
  }
`;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{id: string}>) => {
  return params
    ? GraphQLRequestSdk.SeriesPage({id: params.id}).then((data) => ({
        props: data,
      }))
    : Promise.reject(new Error('Invalid parameters.'));
};

export const Page: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => <SeriesPage {...props} />;

export default Page;
