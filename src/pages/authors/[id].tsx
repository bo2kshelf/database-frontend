import {gql} from 'graphql-request';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {GraphQLRequestSdk} from '~/lib/graphql-request';
import {AuthorPage, AuthorPageProps} from '~/templates/AuthorPage';

export const Query = gql`
  query GetAllAuthorsIds {
    allAuthors {
      id
    }
  }
`;

export type PageProps = AuthorPageProps;
export const Page: NextPage<PageProps> = (props) => <AuthorPage {...props} />;

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  return params
    ? GraphQLRequestSdk.AuthorPage({id: params.id}).then((data) => ({
        props: data,
      }))
    : Promise.reject(new Error('Invalid parameters.'));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () =>
  GraphQLRequestSdk.GetAllAuthorsIds()
    .then(({allAuthors}) =>
      allAuthors.map(
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
