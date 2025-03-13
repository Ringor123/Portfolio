import { Searchbar } from "react-native-paper";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  container: {
    margin: 10,
    position: "relative",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    //   borderWidth: 1,
    borderColor: "#e1e4e8",
    borderRadius: 6,
    backgroundColor: "#f6f8fa",
    paddingHorizontal: 12,

    //iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    //Android shadow
    elevation: 4,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: "#24292e",
    padding: 0,
  },
  clearButton: {
    padding: 4,
  },
});

const SearchRepositories = ({ repoRefetch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebounce(searchQuery, 500);

useEffect(() => {
    if (debouncedValue !== undefined) {
      repoRefetch("CREATED_AT", "DESC", debouncedValue);
    }
  }, [debouncedValue]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      repoRefetch({ searchKeyword: "" });
    }
  };
  console.log(searchQuery);

  // return (
  //     <Searchbar
  //     style={{margin:20, height:70, borderWidth: 1, borderColor:'gray', borderRadius:4, backgroundColor:'white', justifyContent: 'center'}}
  //     mode="view"
  //     placeholder="Search repository"
  //     value={searchQuery}
  //     clearIcon="close"
  //     onChangeText={onChangeSearch}
  //     onClearIconPress={() => setSearchQuery("")}

  //      />
  // )

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={16}
          color="#6a737d"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search repository"
          placeholderTextColor="#6a737d"
          value={searchQuery}
          onChangeText={onChangeSearch}
        />
        {searchQuery ? (
          <Ionicons
            name="close-circle"
            size={16}
            color="#6a737d"
            style={styles.clearButton}
            onPress={() => setSearchQuery("")}
          />
        ) : null}
      </View>
    </View>
  );
};

export default SearchRepositories;
