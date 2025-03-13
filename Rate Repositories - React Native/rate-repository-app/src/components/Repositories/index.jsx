import { FlatList, View, StyleSheet, Text } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositoriesGraphQL";
import theme from "../../theme";
import OrderRepositoriesBy from "./OrderRepositoriesBy";
import { useState, useEffect } from "react";
import SearchRepositories from "./SearchRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  loading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    color: theme.colors.textSecondary,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  ordering,
  repositories,
  repoRefetch,
  onEndReach
}) => {
  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <SearchRepositories repoRefetch={repoRefetch} />
          <OrderRepositoriesBy ordering={ordering} repoRefetch={repoRefetch} />
        </View>
      }
      data={repositoriesNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const [ordering, setOrdering] = useState("latest");
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [queryParams, setQueryParams] = useState({
    first: 8,
    orderBy: "CREATED_AT", 
    orderDirection: "DESC"
  });

  const { repositories, loading, error, fetchMore, refetch } = useRepositories(queryParams);

  useEffect(() => {
    if (repositories && isInitialLoad) {
      setIsInitialLoad(false);
    }
  }, [repositories]);

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    if (!loading) {
      fetchMore();
    }
  };

  const handleRefetch = async (value) => {
    if (!value) return;
  
    if (value.searchKeyword !== undefined) {
      const newParams = {
        ...queryParams,
        searchKeyword: value.searchKeyword
      };
      setQueryParams(newParams);
      await refetch(newParams);
      return;
    }
  
    setOrdering(value);
    let newParams = { ...queryParams };

    if (value === "highest") {
      newParams = { ...newParams, orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
    } else if (value === "lowest") {
      newParams = { ...newParams, orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
    } else {
      newParams = { ...newParams, orderBy: "CREATED_AT", orderDirection: "DESC" };
    }

    setQueryParams(newParams);
    await refetch(newParams);
  };

  if (isInitialLoad && loading) {
    return <Text style={styles.loading}>Loading repositories...</Text>;
  }

  if (error) {
    return <Text style={styles.loading}>Error: {error.message}</Text>;
  }

  return (
    <RepositoryListContainer
      ordering={ordering}
      repositories={repositories}
      repoRefetch={handleRefetch}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
