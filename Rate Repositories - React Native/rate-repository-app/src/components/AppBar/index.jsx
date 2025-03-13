import React, { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "../AppBar/AppBarTab";
import AuthStorageContext from "../../AuthStorageContext";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight + 15,
    backgroundColor: theme.colors.tab,
    alignItems: "center",
    paddingLeft: 15,
    paddingBottom: 15,
  },
  tab: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  const authStorage = useContext(AuthStorageContext);
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const { loading, error, data } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
  });

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate("/");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.tab}
        showsHorizontalScrollIndicator={false}
      >
        <AppBarTab text="Repositories" to="/" />
        {!loading && !error && data.me ? (
          <>
            <AppBarTab text="Create a Review" to="/createReview" />
            <AppBarTab text="My Reviews" to="/myreviews" />
            <AppBarTab text="Sign Out" to="/signout" onPress={signOut} />
          </>
        ) : (
          <>
            <AppBarTab text="Sign In" to="/signin" />
            <AppBarTab text="Sign Up" to="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
