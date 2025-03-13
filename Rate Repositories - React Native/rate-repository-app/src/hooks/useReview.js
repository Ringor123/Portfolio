import { useQuery } from "@apollo/client";

import { GET_REVIEW } from "../graphql/queries";

const useReview = (id, { first }) => {
  const variables = {
    id,
    first: first || 4,
  };
  const { data, loading, error, fetchMore } = useQuery(GET_REVIEW, {
    fetchPolicy: "cache-and-network",
    variables: variables,
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        }

        const existingIds = new Set(
          previousResult.repository.reviews.edges.map((edge) => edge.node.id)
        );

        const newEdges = fetchMoreResult.repository.reviews.edges.filter(
          (edge) => !existingIds.has(edge.node.id)
        );

        return {
          repository: {
            ...previousResult.repository,
            reviews: {
              ...fetchMoreResult.repository.reviews,
              edges: [...previousResult.repository.reviews.edges, ...newEdges],
            },
          },
        };
      },
    });
  };

  return {
    repository: data?.repository,
    loading,
    error,
    fetchMore: handleFetchMore,
  };
};

export default useReview;
