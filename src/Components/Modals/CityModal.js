import React from "react";

function CityModal(props) {
  return (
    <div className="modal" transparent={true} visible={props.modalVisible}>
      <div
        style={{ width: "100%", flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div
          style={[
            {
              shadowColor: "black",
              backgroundColor: "white",
              flex: 1,
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 80,
              marginBottom: 80,
              borderRadius: 10,
              padding: 10,
            },
          ]}
        >
          <button
            onPress={() => props.modalVisibleChange(false)}
            style={{ marginTop: 4, marginLeft: 4, marginBottom: 20 }}
          >
           
          </button>
          <div>
            <input
              fullWidth={true}
              secure={false}
              onchange={props.searchValueChange}
              value={props.searchValue}
              placeHolder="Search"
            />
          </div>
          <div style={{ marginTop: 10, flex: 1 }}>
            <div>
              {props.data.map((item) => {
                if (props.searchValue == "") {
                  return (
                    <button
                      onPress={() => props.finalHandler(item)}
                    >
                      <p>{item}</p>
                    </button>
                  );
                } else {
                  if (item.includes(props.searchValue)) {
                    return (
                      <button
                        onPress={() => props.finalHandler(item)}
                      >
                        <p>{item}</p>
                      </button>
                    );
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default CityModal;
