import React from "react";
const mentors = [
  {
    id: 1,
    name: "Michael Johnson",
    image: "https://www.linkpicture.com/q/images-1_55.jpg",
    university: "Harvard University",
  },
  {
    id: 2,
    name: "Sophia Williams",
    image: "https://www.linkpicture.com/q/download-4.jpg",
    university: "Stanford University",
  },
  {
    id: 3,
    name: "Robert Davis",
    image: "https://www.linkpicture.com/q/download-3_61.jpg",
    university: "Massachusetts Institute of Technology",
  },
  {
    id: 4,
    name: "Emma Anderson",
    image: "https://www.linkpicture.com/q/download-2_42.jpg",
    university: "University of Oxford",
  },
  {
    id: 5,
    name: "William Martinez",
    image: "https://www.linkpicture.com/q/download-1_42.jpg",
    university: "University of Cambridge",
  },
  {
    id: 6,
    name: "Olivia Turner",
    image: "https://www.linkpicture.com/q/licensed-image.jpg",
    university: "California Institute of Technology",
  },
  {
    id: 7,
    name: "Daniel Wilson",
    image: "https://www.linkpicture.com/q/Picture2l-3-3.jpg",
    university: "Princeton University",
  },
  {
    id: 8,
    name: "Ava Miller",
    image: "https://www.linkpicture.com/q/Untitled-25-13.webp",
    university: "Yale University",
  },
];

const Mentor = () => {
  return (
    <div>
      <h3 align="center">Meet Your Mentor....</h3>
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
              <div style={{ width: "300px" }}>{item.university}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mentor;
