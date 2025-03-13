import Text from "../Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import * as yup from "yup";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import useSignIn from "../../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  button: {
    height: 50,
    backgroundColor: "#0366d6",
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, "Username must have at least 1 character")
    .max(30, "Username is too long")
    .required("Username is required"),

  password: yup
    .string()
    .min(5, "Password must have at least 5 characters")
    .max(50, "Password is too long")
    .required("Password is required"),

  passwordConfirm: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords don't match"),
});

const CreateUserContainer = ({ onSubmit }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.container}>
            <FormikTextInput
              name="username"
              placeholder="Username"
              testID="usernameField"
            />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
              testID="passwordField"
            />
            <FormikTextInput
              name="passwordConfirm"
              placeholder="Password confirmation"
              secureTextEntry
              testID="passwordConfirmField"
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={handleSubmit}
              testID="submitButton"
            >
              <Text
                fontWeight="bold"
                fontSize="subheading"
                style={styles.buttonText}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
};

const CreateUserForm = () => {
  const [signIn] = useSignIn();
  const [createUser] = useMutation(CREATE_USER);
  const naviagte = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await createUser({
        variables: {
          user: {
            username,
            password,
          },
        },
      });
      if (data.createUser) {
        try {
          const data = await signIn({ username, password });
          if (data.authenticate) {
            naviagte("/");
          }
        } catch (e) {
          console.log("Authentication error:", e.message);
        }
      }
    } catch (e) {
      console.log("Create user error:", e.message);
    }
  };

  return <CreateUserContainer onSubmit={onSubmit} />;
};

export default CreateUserForm;
