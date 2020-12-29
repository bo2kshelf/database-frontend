import {gql} from 'graphql-request';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {GraphQLRequestSdk} from '~/lib/graphql-request';
import {SeriesPage, SeriesPageProps} from '~/templates/SeriesPage';

export const Query = gql`
  query GetAllSeriesIds {
    allSeries {
      id
    }
  }
`;

export type PageProps = SeriesPageProps;
export const Page: NextPage<PageProps> = (props) => <SeriesPage {...props} />;

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  return params
    ? GraphQLRequestSdk.SeriesPage({id: params.id}).then((data) => ({
        props: data,
      }))
    : Promise.reject(new Error('Invalid parameters.'));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () =>
  GraphQLRequestSdk.GetAllSeriesIds()
    .then(({allSeries}) =>
      allSeries.map(
        ({id}): GetStaticPathsResult<UrlQuery>['paths'][number] => ({
          params: {id},
        }),
      ),
    )
    .then(
      (paths): GetStaticPathsResult<UrlQuery> => ({
        paths,
        fallback: true,
      }),
    );

export default Page;
