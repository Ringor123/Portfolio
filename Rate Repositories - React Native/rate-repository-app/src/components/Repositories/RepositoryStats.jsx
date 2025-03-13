import { View, StyleSheet } from "react-native";
import Text from "../Text";

const parseThousands = value => {
  return value >= 1000 ?
  `${Math.round(value/100) /10}k` :
  value
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row", 
    justifyContent: "space-around"
  },
  stats: {
    alignItems: "center"
  }
})

const RepositoryStats = ({item}) => {
  return (
    <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text fontWeight="bold">{parseThousands(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{parseThousands(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{parseThousands(item.reviewCount)}</Text>
          <Text>Review</Text>
        </View>
        <View style={styles.stats}>
          <Text fontWeight="bold">{parseThousands(item.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>
  )
}

export default RepositoryStats;