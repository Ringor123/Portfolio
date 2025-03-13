import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "./FormikTextInput";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../Text";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";
import { useNavigate } from "react-router-native";

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
  multilineInput: {
    minHeight: 50,
    height: "auto",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingLeft: 10,
  },
});

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),

  repositoryName: yup.string().required("Repository name is required"),

  rating: yup
    .number()
    .typeError("You must provide a number")
    .min(0, "Values must be between 0 and 100")
    .max(100, "Values must be between 0 and 100")
    .required("Rating is required"),

  text: yup.string().notRequired(),
});

const CreateReviewFormContainer = ({ onSubmit }) => {
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
              name="ownerName"
              placeholder="Repository owner name"
            />
            <FormikTextInput
              name="repositoryName"
              placeholder="Repository name"
            />
            <FormikTextInput
              name="rating"
              placeholder="Rating between 0 and 100"
            />
            <FormikTextInput
              multiline={true}
              name="text"
              placeholder="Review"
              style={styles.multilineInput}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text
                fontWeight="bold"
                fontSize="subheading"
                style={styles.buttonText}
              >
                Create a review
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    </Formik>
  );
};

const CreateReviewForm = () => {
  const [mutate] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, rating, repositoryName, text } = values;

    try {
      const {data} = await mutate({
        variables: {
          review: {
            ownerName,
            rating: Number(rating),
            repositoryName,
            text,
          },
        },
      });
      if (data.createReview) {
        const repoId = data.createReview.repositoryId
        console.log(repoId)
        navigate(`/repository/${repoId}`)
    }
    } catch (e) {
      console.log("Create Review error", e.message);
    }

  };

  return <CreateReviewFormContainer onSubmit={onSubmit} />;
};
export default CreateReviewForm;
