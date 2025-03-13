import { FlatList, View, Text, StyleSheet } from "react-native"
import SingleRepository from "./SingleRepository"
import useReview from "../../hooks/useReview"
import { useParams } from "react-router-native"
import theme from "../../theme"
import ReviewItem from "./ReviewItem"

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

const ReviewRepository = () => {

    const {repoId} = useParams()
    console.log(repoId)

    const {repository, loading, error, fetchMore} = useReview(repoId, {
        first: 4
    })

    const reviewsNodes = repository ?
    repository.reviews.edges.map((edge) => edge.node) :
    []

    const onEndReach = () => {
        console.log("You have reached the end of the list")
        fetchMore()
    }

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>{error.message}</Text>;
    // if (!reviewRepository) return <Text>Repository not found</Text>;

    console.log(reviewsNodes)

    const ItemSeparator = () => <View style={styles.separator} />;

    return (
        <View style={{flex: 1}}>
            <FlatList 
                ListHeaderComponent={<SingleRepository />}
                data={reviewsNodes}
                ItemSeparatorComponent={ItemSeparator}
                onEndReached={onEndReach}
                onEndReachedThreshold={0.5}
                renderItem={({item}) => <ReviewItem item={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ReviewRepository