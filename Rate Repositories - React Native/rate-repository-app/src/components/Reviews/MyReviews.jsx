import { ME } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { FlatList, View, Text, StyleSheet, Pressable } from "react-native";
import ReviewItem from "./ReviewItem";
import theme from "../../theme";

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

const MyReviews = () => {
  const { data, loading, error } = useQuery(ME, {
    variables: { includeReviews: true },
  });

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const myReviewsNode = data
    ? data.me.reviews.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
      <View style={{flex: 1}}>
        <FlatList
          data={myReviewsNode}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <ReviewItem item={item} isMyReview={true} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
  );
};

export default MyReviews;
