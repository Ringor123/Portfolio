import { StyleSheet } from "react-native";
import Text from "../Text";
import { Link, useLocation } from "react-router-native";

const style = StyleSheet.create({
  tab: {
    flexDirection: "row",
  },
  activeTab: {
    color: "#FFFFFF",
    paddingHorizontal: 10
  },
  inactiveTab: {
    color: "#999999",
    paddingHorizontal: 10
  }
});

const AppBarTab = ({ text, to, ...props }) => {
  const location = useLocation();
  

  return (
        <Link to={to} underlayColor="transparent">
          <Text fontSize="tab" fontWeight="bold" style={location.pathname === `${to}` ? style.activeTab : style.inactiveTab} {...props}>
            {text}
          </Text>
        </Link>
  );
};

export default AppBarTab;
