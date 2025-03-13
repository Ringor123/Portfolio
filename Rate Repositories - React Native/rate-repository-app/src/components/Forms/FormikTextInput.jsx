import { useField } from "formik";
import { TextInput, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
    inputs: {
      marginTop: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      height: 50,
      paddingLeft: 10,
    },
    errorInput: {
      borderColor: '#d73a4a',
      borderWidth: 1,
      borderRadius: 5,
      height: 50,
      marginTop: 10,
      paddingLeft: 10,
    },
    errorText: {
      marginTop: 5,
      fontSize: 11,
      color: '#d73a4a',
    }
  })

const FormikTextInput = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
      <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error ={showError}
        style={showError ? styles.errorInput : styles.inputs}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
      </>
    )
  }

  export default FormikTextInput