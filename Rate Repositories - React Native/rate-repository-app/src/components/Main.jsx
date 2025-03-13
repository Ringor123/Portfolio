import React from "react";
import AppBar from "./AppBar"
import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from 'react-router-native'
import RepositoryList from "./Repositories/index";
import SignInForm from "./Forms/SignInForm";
import ReviewRepository from "./Reviews";
import CreateReviewForm from "./Forms/CreateReviewForm"
import CreateUserForm from "./Forms/CreateUserForm";
import MyReviews from "./Reviews/MyReviews";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e4e8",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />}/>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/repository/:repoId" element={<ReviewRepository />} />
        <Route path="/createReview" element={<CreateReviewForm />} />
        <Route path="/signup" element={<CreateUserForm />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
