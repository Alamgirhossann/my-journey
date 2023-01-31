import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// Component
import LoginContainer from "../../Components/Containers/loginContainer";
import GlobalInput from "../../Components/Component/InputComponent";
// Styles
import { GlobalBackgroundTextColors } from "../../Styles/global";
import ProfileIcon from "../../assets/Images/Icons/propfile";
import PasswordIcon from "../../assets/Images/Icons/password";

function LoginReset({ navigation, route }) {
  /*====== Passed Data ================================================= */
  var { persons } = route.params;
  /*====== Passed Data ================================================= */

  /*====== UseStateData ================================================= */
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  /*========================================UseStateData ================ */

  /*===== Important Function ====================================== */
  function checkPhoneNo() {
    var index = -1;
    index = persons.findIndex((person) => person.email == email);
    console.log(index, persons);
    if (index != -1) {
      navigation.navigate("LoginResetNew", {
        email: email,
        persons,
        personIndex: index,
      });
    } else {
      setError("Number is not register");
    }
  }
  /*===== Important Function ====================================== */

  return (
    <LoginContainer
      title="Reset Password"
      leftBottomText={"Dont have account?"}
      rightBottomText={"Register Here"}
      rightBottomLink={() => navigation.navigate("LoginRegister")}
      mainButtonText="Verify"
      mainButtonLink={() => checkPhoneNo()}
    >
      <View>
        <Text style={{ color: "red", minHeight: 20 }}>{error}</Text>
        <GlobalInput
          secure={false}
          onchange={setEmail}
          value={email}
          placeHolder="Enter Email"
        >
          <ProfileIcon width={15} height={15} />
        </GlobalInput>
        <View style={{ marginTop: 20 }}></View>
      </View>
    </LoginContainer>
  );
}
export default LoginReset;
