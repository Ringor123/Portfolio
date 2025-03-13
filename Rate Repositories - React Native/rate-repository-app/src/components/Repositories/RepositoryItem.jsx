import { StyleSheet, TouchableOpacity } from "react-native";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryStats from "./RepositoryStats";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: 'white',
  },
});



const RepositoryItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <TouchableOpacity style={styles.card} testID="repositoryItem" onPress={() => navigate(`/repository/${item.id}`)}>
      <RepositoryHeader item={item} />
      <RepositoryStats item={item} />
    </TouchableOpacity>
  );
};

export default RepositoryItem;
