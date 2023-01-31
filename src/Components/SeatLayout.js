import React, { useEffect, useState } from "react";

const SeatLayout = () => {
  
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [seat, setSeat] = useState('');
  const [match, setMatch] = useState([]);
  sessionStorage.setItem("seat", JSON.stringify(seat));

  console.log(seat, match);

  const saveData = (e) => {
    setSeat([...seat,e]);
  };

  // useEffect(() => {
  //   let list =[];
  //   let seatVal = JSON.parse(sessionStorage.getItem("seat"));
  //   list.push(seatVal);
  //   const intersections = array1.filter((e) => list.indexOf(e) !== -1);
    
  //   setMatch(intersections);
  // }, [seat]);

  return (
    <div className="container text-center" style={{ width: "300px" }}>
      <div className="row">
        {array1.map((item, i) => {
          // const seataMatch = seat == match;
          // console.log(seataMatch, item);
          return (
            <div key={item} className="col-md-3">
              <div className="numDiv">
                <div
                  // className={seataMatch ? "bg-danger" : ""}
                  onClick={() => saveData(item)}
                  value={item}
                  >
                  {item}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
    
     
  );
};

export default SeatLayout;
