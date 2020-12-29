import {gql} from 'graphql-request';
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  NextPage,
} from 'next';
import React from 'react';
import {GraphQLRequestSdk} from '~/lib/graphql-request';
import {BookPage, BookPageProps} from '~/templates/BookPage';

export const Query = gql`
  query GetAllBookIds {
    allBooks {
      id
    }
  }
`;

export type PageProps = BookPageProps;
export const Page: NextPage<PageProps> = (props) => <BookPage {...props} />;

export type UrlQuery = {id: string};
export const getStaticProps: GetStaticProps<PageProps, UrlQuery> = async ({
  params,
}) => {
  return params
    ? GraphQLRequestSdk.BookPage({id: params.id}).then((data) => ({
        props: data,
      }))
    : Promise.reject(new Error('Invalid parameters.'));
};

export const getStaticPaths: GetStaticPaths<UrlQuery> = async () =>
  GraphQLRequestSdk.GetAllBookIds()
    .then(({allBooks}) =>
      allBooks.map(({id}): GetStaticPathsResult<UrlQuery>['paths'][number] => ({
        params: {id},
      })),
    )
    .then(
      (paths): GetStaticPathsResult<UrlQuery> => ({
        paths,
        fallback: true,
      }),
    );

export default Page;
