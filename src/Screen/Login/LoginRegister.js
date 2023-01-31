import React, { useState, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity, Pressable } from "react-native";
// Component
import LoginContainer from "../../Components/Containers/loginContainer";
import GlobalInput from "../../Components/Component/InputComponent";
// Data
import { LoginDetail } from "../../Data/Data";
import ProfileIcon from "../../assets/Images/Icons/propfile";
import PasswordIcon from "../../assets/Images/Icons/password";
// Contex
import LoginContext from "../../Context/LoginContext";
import Wait from "../wait";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

function Register({ navigation, route }) {
  /*====== Passed data ====================================== */
  // var { persons } = route.params;
  const { LoginStateHandler, rootReference } = useContext(LoginContext);
  console.log(rootReference);
  /*====== Passed data ====================================== */

  /*====== UseStateData ====================================== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [error, setError] = useState("");
  /*========================================UseStateData ===== */
  console.log(email, password, fName, lName);
  // /*===== Important Function ====================================== */
  const signUp=()=>{
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('credential',userCredential);
        if (userCredential) {
          firebase.database().ref("PersonDetail").push().update({
            sold: true,
            firstName: fName,
            lastName: lName,
            email: email,
            uid: userCredential.user.uid,
          });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
    console.log("register success");
  }
  function checkRegister() {
    console.log("register success");
    // e.preventDefault();
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //     // if (userCredential) {
    //     //   rootReference.child("PersonDetail").push().key.update({
    //     //     sold: true,
    //     //     firstName: fName,
    //     //     lastName: lName,
    //     //     email: email,
    //     //     uid: userCredential.user.uid,
    //     //   });
    //     // }
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage);
    //     // ..
    //   });
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <LoginContainer
          title="Register"
          leftBottomText={"Already have account?"}
          rightBottomText={"Login Here"}
          rightBottomLink={() => navigation.navigate("Login")}
          mainButtonText="Sign Up"
          mainButtonLink={() => checkRegister()}
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
            <View style={{ marginTop: 15 }}></View>
            <GlobalInput
              secure={false}
              onchange={setfName}
              value={fName}
              placeHolder=" First Name"
            >
              <ProfileIcon width={15} height={15} />
            </GlobalInput>
            <GlobalInput
              secure={false}
              onchange={setlName}
              value={lName}
              placeHolder=" Last Name"
            >
              <ProfileIcon width={15} height={15} />
            </GlobalInput>
            <View style={{ marginTop: 15 }}></View>
            <GlobalInput
              secure={true}
              onchange={setPassword}
              value={password}
              placeHolder="Enter Password"
            >
              <PasswordIcon width={15} height={15} />
            </GlobalInput>
            <View style={{ marginBottom: 15 }}></View>
            <View><Pressable onPress={()=>signUp()}>
            <Text>Sign Up</Text>
          </Pressable></View>
              
            
          </View>
        </LoginContainer>
      </ScrollView>
    </View>
  );
}
export default Register;
