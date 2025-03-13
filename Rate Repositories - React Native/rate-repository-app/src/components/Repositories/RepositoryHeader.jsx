import { View, Image, StyleSheet, Dimensions } from "react-native";
import Text from "../Text";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  repositoryInfo: {
    flexDirection: "row", 
    gap: 15, 
    paddingLeft: 10, 
    paddingBottom: 15
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  details: {
    flexShrink: 1,
    gap: 5
  },
  language: {
    backgroundColor: "#0366d6",
    color: "white",
    padding: 5,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  // description: {
  //   flexWrap: "wrap",
  //   width: screenWidth - 100
  // },
})

const RepositoryHeader = ({item}) => {

  return(
    <View style={styles.repositoryInfo}>
        <Image source={{ uri: item.ownerAvatarUrl }} style={styles.image} />
        <View style={styles.details}>
          <Text fontWeight="bold">{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
  )
}

export default RepositoryHeader;