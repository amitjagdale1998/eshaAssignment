import React from "react";
const mentors = [
  {
    id: 1,
    name: "Dr. Omkar",
    image: "https://www.linkpicture.com/q/images-1_55.jpg",
    Designation: "Principle Project Specialist ",
    university: "IIT Madras",
  },
  {
    id: 2,
    name: "AKhil Tripathi",
    image: "https://www.linkpicture.com/q/download-4.jpg",
  },
  {
    id: 3,
    name: "Vivek Dwivedi",
    image: "https://www.linkpicture.com/q/download-3_61.jpg",
  },
];

const Adviser = () => {
  return (
    <div style={{ backgroundColor: "#dae4e6", padding: "50px" }}>
      <h3 align="center">Mentor & Advisers...</h3>
      <div
        className="mentors"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {mentors.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img
                  src={item.image}
                  height={190}
                  width={230}
                  style={{ padding: "10px", borderRadius: "100px" }}
                ></img>
              </div>
              <div style={{ width: "300px" }}>{item.name} </div>
              <div>{item.Designation ? item.Designation : ""}</div>
              <div style={{ width: "300px" }}>
                {item.university ? item.university : ""}
              </div>
              <div>
                {item.id > 1 ? (
                  <div className="mt-5">
                    <input type="text" placeholder="message me"></input>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Adviser;
