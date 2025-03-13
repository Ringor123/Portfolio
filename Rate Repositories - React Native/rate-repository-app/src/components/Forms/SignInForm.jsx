import { Formik, useField } from "formik";
import Text from "../Text";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import * as yup from 'yup'
import useSignIn from "../../hooks/useSignIn";
import FormikTextInput from "./FormikTextInput";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white'
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
})

const validationSchema = yup.object().shape({
  username: yup
  .string()
  .min(4, "Usename must have at least 4 characters")
  .required("Username is required"),
  password: yup
  .string()
  .min(6, "Password must have at least 6 characters")
  .required("Password is required")
})

const SignInContainer = ({onSubmit}) => {
  
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
            <FormikTextInput name="username" placeholder="Username" testID="usernameField"/>
            <FormikTextInput name="password" placeholder="Password" secureTextEntry testID="passwordField"/>
            <TouchableOpacity 
            activeOpacity={0.8} 
            style={styles.button}
            onPress={handleSubmit}
            testID="submitButton"
            >
              <Text fontWeight="bold" fontSize="subheading" style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  )

}

const SignInForm = () => {

  const [signIn] = useSignIn();
  // const authStorage = useContext(AuthStorageContext);
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const  data  = await signIn({ username, password });
    //   console.log('Sign in response:', data);
      
      if (data?.authenticate) {
    //     const { accessToken, expiresAt, user } = data.authenticate;
    //     console.log('Authentication successful');
    //     console.log('Access token:', accessToken);
    //     console.log('Expires at:', expiresAt);
    //     console.log('User:', user);

        // const storedToken = await authStorage.getAccessToken();
        // console.log('Stored token:', storedToken);
        navigate('/');
      } else {
        console.log('Authentication failed: No data received');
      }
    } catch (e) {
      console.log('Authentication error:', e.message);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignInForm;
