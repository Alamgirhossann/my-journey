import React, { useState, useContext, useEffect } from "react";

// Components Import
import SimpleContainer from "../../Components/Containers/SimpleContainer";
import CityModal from "../../Components/Modals/CityModal";
// Importing Styles

// Importing Data
import Carousele from "../../Components/Component/BookingScreen/pendingBookingCoursele";
import ArrivalIcon from "../../assets/Images/Icons/Arrival";
import Date from "../../assets/Images/Icons/Date";
import DropDown from "../../assets/Images/Icons/DropDown";
// Importing context
import LoginContext from "../../Context/LoginContext";
import Wait from "../wait";
// Importing Funcions
import { GetDate, FilterBusSchedule, GetPending } from "../../Functions";

/*============================== Inline Function City Modal ========================================== */
function Destination(props) {
  return (
    <div>
      <div style={{ display: props.modalVisible ? "flex" : "none" }}>
        <CityModal
          modalVisible={props.modalVisible}
          modalVisibleChange={props.modalVisibleChange}
          data={props.cities}
          searchValue={props.searchValue}
          searchValueChange={props.searchValueChange}
          finalHandler={props.finalHandler}
          Selected={props.Selected}
        ></CityModal>
      </div>
      <div
        style={{
          flexDirection: "row",
          marginBottom: 10,
          marginLeft: 5,
          alignItems: "center",
        }}
      >
        <ArrivalIcon width={20} height={20} />
        <p style={{ marginLeft: 10, fontSize: 15 }}>{props.title}</p>
      </div>
      <button
        style={{
          // borderColor: GlobalBackgroundTextColors.textBoxColor,
          borderWidth: 1,
          borderRadius: 50,
          height: 40,
          paddingLeft: 20,
          paddingTop: 2,
          zIndex: 1,
        }}
        onPress={() => props.modalVisibleChange(true)}
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <p
            style={{
              fontSize: 20,
              // color: GlobalBackgroundTextColors.textBoxColor,
              width: "100%",
            }}
          >
            {props.Selected}
          </p>
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <DropDown width={13} height={13} />
          </div>
        </div>
      </button>
    </div>
  );
}
/*============================== Inline Function City Model ========================================== */

/*============================== Inline Function DatePicker ========================================== */
function DatePicker(props) {
  return (
    <div
      style={[
        // globalShadowBox,
        {
          elevation: 1,
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 20,
          // backgroundColor: GlobalBackgroundColors.ternaryColor,
          borderBottomEndRadius: 30,
          borderBottomLeftRadius: 30,
        },
      ]}
    >
      <div
        style={{
          flexDirection: "row",
          marginBottom: 10,
          marginLeft: 5,
          alignItems: "center",
        }}
      >
        <Date width={20} height={20} />
        <p style={{ marginLeft: 10, fontSize: 15 }}>Date</p>
      </div>
      <div>
        {
        //   <Picker
        //   selectedValue={props.DateData}
        //   style={{
        //     width: "100%",
        //     height: 40,
        //     // borderEndColor: GlobalBackgroundTextColors.textBoxColor,
        //     borderRadius: 50,
        //     paddingLeft: 10,
        //     paddingRight: 60,
        //   }}
        //   onValueChange={(itemValue, itemIndex) => {
        //     props.onPress(itemValue);
        //   }}
        // >
        //   {props.DateSchedule.map((item) => (
        //     <Picker.Item label={item} value={item} />
        //   ))}
        // </Picker>
      }
      </div>
    </div>
  );
}
/*============================== Inline Function DatePicker =========================================== */

function BookingDestination({ navigation, route }) {
  /* ===== Passed Data =========================================================================================*/
  var { person = false } = route.params;
  const { rootReference } = useContext(LoginContext);
  /* ===========================================================================================Passed Data=====*/

  /*===== Data Created Goes Here ============================================================================== */
  var [promised, setpromised] = useState(false);

  var [DateSchedule1, setDateSchedule] = useState([]);
  var [cities1, setCities] = useState([]);
  var [pendingBooking1, setPendingBooking] = useState([]);

  let [ArrivalTerminal, changeArrivalTerminal] = useState(""); // For searching bar
  let [ArrivalTerminalModal, ArrivalTerminalModalHandler] = useState(false); // For changing Model
  var [ArrivalSelected, changeArrivalSelected] = useState(cities1[0]); // Final Last value of search bar
  const arrivalFinal = (city) => {
    // Handler when the City is selected
    changeArrivalTerminal("");
    changeArrivalSelected(city);
    ArrivalTerminalModalHandler(false);
  };

  let [DestinationTerminal, changeDestinationTerminal] = useState("");
  let [DestinationTerminalModal, DestinationTerminalModalHandler] =
    useState(false);
  var [DestinationSelected, changeDestinationSelected] = useState(cities1[0]);
  function destinationFinal(city) {
    changeDestinationTerminal("");
    changeDestinationSelected(city);
    DestinationTerminalModalHandler(false);
  }

  let [DateData, changeDateData] = useState(DateSchedule1[0]);
  // In case if date is not found then disabling the find bus button
  var disable = false;
  var disableColor = 'gray';
  if (DateSchedule1.length <= 0) {
    disable = true;
    disableColor = "black";
  }

  var citiesTemp = [];
  var busScheduleTemp = [];
  useEffect(() => {
    const CitiesNode = rootReference.child("Cities"); // Getting the city reference
    CitiesNode.once("value")
      .then((datasnap) => {
        citiesTemp = datasnap.val();
      })
      .then((readCountTxn) => {
        // When the propmise to get the city is made
        const BusScheduleNode = rootReference.child("BusSchedule");
        BusScheduleNode.once("value")
          .then((datasnap) => {
            busScheduleTemp = datasnap.val();
            
          })
          .then((readCountTxn) => {
            // When promise to get the BusSchedule is made
            var dateTemp = GetDate(busScheduleTemp);
            var pendingTemp = FilterBusSchedule(
              busScheduleTemp,
              person.email
            );
            pendingTemp = GetPending(pendingTemp);
            setpromised(!promised);
            setDateSchedule(dateTemp);
            setCities(citiesTemp);
            setPendingBooking(pendingTemp);

            arrivalFinal(citiesTemp[0]);
            destinationFinal(citiesTemp[0]);
            changeDateData(dateTemp[0]);
          });
      });
  }, []);
  /*==========================================================================================Data Ends Here===== */

  if (promised == true) {
    navigation.setOptions({ headerShown: true });
  } else {
    navigation.setOptions({ headerShown: false });
  }

  return (
    <div style={{ flex: 1 }}>
      {promised ? (
        <SimpleContainer headerFlexSize={3} isBottomVisible={false}>
          <div>
            <div style={{ flex: 1, marginTop: -1 }}>
              <div
                // style={{ backgroundColor: GlobalBackgroundColors.primaryColor }}
              >
                <div
                  style={[
                    // globalShadowBox,
                    {
                      width: "70%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: 20,
                      // backgroundColor: GlobalBackgroundColors.ternaryColor,
                      borderTopEndRadius: 30,
                      borderTopLeftRadius: 30,
                    },
                  ]}
                >
                  <Destination
                    cities={cities1}
                    modalVisible={ArrivalTerminalModal}
                    modalVisibleChange={ArrivalTerminalModalHandler}
                    searchValue={ArrivalTerminal}
                    searchValueChange={changeArrivalTerminal}
                    finalHandler={arrivalFinal}
                    Selected={ArrivalSelected}
                    title="Arrival Terminal"
                  ></Destination>
                </div>
              </div>
              <div
                style={{
                  // backgroundColor: GlobalBackgroundColors.ternaryColor,
                  marginTop: -1,
                }}
              >
                <div
                  style={[
                    // globalShadowBox,
                    {
                      elevation: 1,
                      width: "70%",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: 20,
                      // backgroundColor: GlobalBackgroundColors.ternaryColor,
                    },
                  ]}
                >
                  <Destination
                    cities={cities1}
                    modalVisible={DestinationTerminalModal}
                    modalVisibleChange={DestinationTerminalModalHandler}
                    searchValue={DestinationTerminal}
                    searchValueChange={changeDestinationTerminal}
                    finalHandler={destinationFinal}
                    Selected={DestinationSelected}
                    title="Destination Terminal"
                  ></Destination>
                </div>
              </div>
              <div style={{ marginTop: 10 }}></div>
              <div>
                <DatePicker
                  DateSchedule={DateSchedule1}
                  selected={DateData}
                  onPress={changeDateData}
                />
              </div>
              <button
                onPress={() =>
                  navigation.navigate("BookingBusesScreen", {
                    ArrivalSelected,
                    DestinationSelected,
                    DateData,
                    person,
                    DateSchedule1,
                  })
                }
                disabled={disable}
                style={[
                  // primaryButton,
                  {
                    marginTop: 10,
                    marginBottom: 10,
                    // backgroundColor: disableColor,
                  },
                ]}
              >
                <p
                  style={{
                    // color: GlobalBackgroundTextColors.secondaryColor,
                    textAlign: "center",
                  }}
                >
                  Find Bus
                </p>
              </button>
            </div>
            {/* Slider */}
           {
            //  <div style={{ height: 180, paddingBottom: 30 }}>
            //   <Carousele
            //     person={person}
            //     pendingBooking1={pendingBooking1}
            //     email={person.email}
            //     navigation={navigation}
            //     onPress={navigation}
            //   ></Carousele>
            // </div>
          }
          </div>
        </SimpleContainer>
      ) : (
        <Wait />
      )}
    </div>
  );
}
export default BookingDestination;
