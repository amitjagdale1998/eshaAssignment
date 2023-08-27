import React, { useState } from "react";
const universities = [
  {
    id: 1,
    name: "Indian Institute of Management Ahmedabad",
    image: "https://www.linkpicture.com/q/IIMA.jpg",
  },
  {
    id: 2,
    name: "Brown University",
    image: "https://www.linkpicture.com/q/brown-university-ranking.jpg",
  },
  {
    id: 3,
    name: "University of Toronto",
    image: "https://www.linkpicture.com/q/images_191.jpg",
  },
  {
    id: 4,
    name: "Massachusetts Institute of Technology (MIT)",
    image:
      "https://www.linkpicture.com/q/top-10-universities-in-the-world-2-320.webp",
  },
  {
    id: 5,
    name: "California Institute of Technology (Caltech)",
    image:
      "https://www.linkpicture.com/q/top-10-universities-in-the-world1.png",
  },
  {
    id: 6,
    name: "University of Oxford",
    image: "https://www.linkpicture.com/q/104790550-Radcliffe_Camera.jpg",
  },
  {
    id: 7,
    name: "Harvard University",
    image: "https://www.linkpicture.com/q/MIT-main.jpg.webp",
  },
  {
    id: 8,
    name: "Stanford University",
    image: "https://www.linkpicture.com/q/download_97.jpg",
  },
  {
    id: 9,
    name: "Princeton University",
    image:
      "https://www.linkpicture.com/q/250947121_4949731755066526_7975784736823854628_n-1600x900.webp",
  },
  {
    id: 10,
    name: "Columbia University",
    image:
      "https://www.linkpicture.com/q/top-10-universities-in-the-world1.png",
  },
];

const TeamPage = () => {
  const [showAll, setShowAll] = useState(true);
  const showAlluniversities = () => {
    setShowAll(!showAll);
  };
  return (
    <div style={{ textAlign: "center", backgroundColor: "#E9EEFB" }}>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
        }}
        className="mb-3"
      >
        <h1>Teampage</h1>
        <h4>
          Learn from scientist ,research scholar from the top institute in the
          world...
        </h4>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {universities.map((item, index) => {
          const lengthU = universities.length;
          console.log(lengthU);
          return (
            <div>
              {showAll ? (
                <div>
                  {item.id >= 8 ? (
                    lengthU === item.id ? (
                      <div
                        onClick={() => showAlluniversities()}
                        style={{ color: "red" }}
                      >
                        More...
                      </div>
                    ) : (
                      ""
                    )
                  ) : (
                    <div key={item.id}>
                      <img
                        src={item.image}
                        height={190}
                        width={230}
                        style={{ borderRadius: "30px" }}
                      ></img>
                      <div style={{ width: "300px" }}>{item.name}</div>
                    </div>
                  )}
                </div>
              ) : (
                <div key={item.id}>
                  <img
                    src={item.image}
                    height={190}
                    width={230}
                    style={{ borderRadius: "30px" }}
                  ></img>
                  <div style={{ width: "300px" }}>{item.name}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showAll ? (
        ""
      ) : (
        <span onClick={() => showAlluniversities()} style={{ color: "red" }}>
          hide...
        </span>
      )}
    </div>
  );
};

export default TeamPage;
