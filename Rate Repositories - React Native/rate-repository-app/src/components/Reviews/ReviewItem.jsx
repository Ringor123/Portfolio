import { View, StyleSheet, Dimensions, Alert } from "react-native";
import theme from "../../theme";
import { format } from "date-fns";
import Text from "../Text";
import { Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_REVIEW } from "../../graphql/mutations";
import { ME } from "../../graphql/queries";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: "white",
  },
  ratingCircle: {
    borderColor: "#0366d6",
    borderWidth: 3,
    marginRight: 15,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ratingValue: {
    color: "#0366d6",
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
  blueButton: {
    backgroundColor: "#0366d6",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  redButton: {
    backgroundColor: "#d73a4a",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 20,
  },
});

const ReviewItem = ({ item, isMyReview }) => {
  const navigate = useNavigate();
  const { refetch } = useQuery(ME, {
    variables: { includeReviews: true },
  });
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    onCompleted: () => {
      refetch();
    },
  });

  const handleDelete = () => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: async () => {
            try {
              deleteReview({ variables: { id: item.id } });
            } catch (e) {
              console.log("Error deleting review:", e);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingValue}>{item.rating}</Text>
        </View>
        <View
          style={{
            width: screenWidth - 100,
            justifyContent: "center",
          }}
        >
          {isMyReview ? (
            <Text fontWeight="bold">{item.repository.fullName}</Text>
          ) : (
            <Text fontWeight="bold">{item.user.username}</Text>
          )}
          <Text style={{ paddingVertical: 2 }}>
            {format(new Date(item.createdAt), "dd.MM.yyyy")}
          </Text>
          <Text style={{ fontStyle: "italic" }}>{item.text}</Text>
        </View>
      </View>
      {isMyReview && (
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Pressable
              style={styles.blueButton}
              onPress={() => navigate(`/repository/${item.repositoryId}`)}
            >
              <Text style={styles.buttonText}>View repository</Text>
            </Pressable>
            <Pressable style={styles.redButton} onPress={handleDelete}>
              <Text style={styles.buttonText}>Delete review</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
