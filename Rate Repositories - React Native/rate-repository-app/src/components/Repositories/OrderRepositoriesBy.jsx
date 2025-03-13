import RNPickerSelect from "react-native-picker-select";

const OrderRepositoriesBy = ({ ordering, repoRefetch }) => {

  return (
    <RNPickerSelect
      onValueChange={repoRefetch}
      useNativeAndroidPickerStyle={true}
      value={ordering}
      items={[
        { label: "Latest repositories", value: "latest" },
        { label: "Highest rated repositories", value: "highest" },
        { label: "Lowest rated repositories", value: "lowest" },
      ]}
      placeholder={{}}
    />
  );
};

export default OrderRepositoriesBy;
