import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ion from "react-native-vector-icons/Ionicons";
// Component
import LoginContainer from "../../Components/Containers/loginContainer";
import GlobalInput from "../../Components/Component/InputComponent";
// Contex
import LoginContext from "../../Context/LoginContext";
// Data
import { LoginDetail } from "../../Data/Data";
// Styles
import { GlobalBackgroundTextColors } from "../../Styles/global";
// Importing icon
import ProfileIcon from "../../assets/Images/Icons/propfile";
import PasswordIcon from "../../assets/Images/Icons/password";
import Wait from "../wait";
import firebase from "firebase";
import "firebase/auth";

function Login({ route, navigation }, props) {
  /*====== Passed Data ============================================== */
  const { LoginStateHandler, rootReference } = useContext(LoginContext);
  /*====== Passed Data ============================================== */

  /*====== UseStateData ====================================== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // var [persons, setPersons] = useState([]);
  // console.log(persons)
  /*========================================UseStateData ===== */

  // var tempPerson = [];
  // useEffect(() => {
  //   const LoginNode = rootReference.child("PersonDetail");
  //   LoginNode.once("value")
  //     .then((datasnap) => {
  //       tempPerson = datasnap.val();
  //     })
  //     .then((readCountTxn) => {
  //       setPersons(tempPerson);
  //       setPromise(true);
  //     });
  // }, []);

  /*===== Important Function ====================================== */
  // When the login button is pressed then this button is clicked
  function checkLogin(e) {
    // e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          console.log(userCredential);
        }
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError(errorCode, errorMessage);
        console.log(errorCode, errorMessage);
      });

    // var ismatch = false;
    // var loggedPerson = null;
    // persons.map((person) => {
    //   if (person.PhoneNumber == loginId && person.Password == password) {
    //     loggedPerson = person;
    //     ismatch = true;
    //     return;
    //   }
    // });

    // if (ismatch === true) {
    //   LoginStateHandler(loggedPerson, rootReference);
    // } else {
    //   setError("Invalid User Name or Password");
    // }
  }
  /*===== Important Function ====================================== */

  return (
    <View style={{ flex: 1 }}>
      <LoginContainer
        title="Login"
        leftBottomText="Dont have account?"
        rightBottomText="Register Here"
        rightBottomLink={() => navigation.navigate("LoginRegister")}
        mainButtonText="Login"
        mainButtonLink={() => checkLogin()}
      >
        <View style={{ padding: 10 }}>
          <Text style={[{ color: "red", minHeight: 20 }]}>{error}</Text>
          <GlobalInput
            secure={false}
            onchange={setEmail}
            value={email}
            placeHolder="Enter Email"
          >
            <ProfileIcon width={15} height={15} />
          </GlobalInput>
          <View style={{ marginTop: 20 }}></View>
          <GlobalInput
            secure={true}
            onchange={setPassword}
            value={password}
            placeHolder="Enter Password"
          >
            <PasswordIcon width={15} height={15} />
          </GlobalInput>

          <TouchableOpacity
            style={{ marginTop: 10, marginBottom: 30 }}
            activeOpacity={0.9}
            onPress={() => navigation.navigate("LoginReset", { persons })}
          >
            <Text
              style={{
                textAlign: "right",
                color: GlobalBackgroundTextColors.ternaryColor,
                fontSize: 10,
              }}
            >
              Forget Password
            </Text>
          </TouchableOpacity>
        </View>
      </LoginContainer>
    </View>
  );
}
export default Login;
