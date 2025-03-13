import { Linking, Pressable, Text, View, StyleSheet } from "react-native";
import RepositoryItem from "../Repositories/RepositoryItem";
import { useParams } from "react-router-native";
import useSingleRepository from "../../hooks/useSingleRepository";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 10
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  loading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
    color: theme.colors.textSecondary,
  },
});

const SingleRepository = () => {
  const { repoId } = useParams();
  const { repository, error, loading } = useSingleRepository(repoId);

  if (loading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text>{error.message}</Text>;
  if (!repository) return <Text>Repository not found</Text>;

  const openGitHub = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View style={styles.container}>
      <RepositoryItem item={repository} />
      <Pressable style={styles.button} onPress={openGitHub}>
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default SingleRepository;
