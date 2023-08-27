import React, { useEffect } from "react";

const Mapping = () => {
  const demoArray = [
    {
      email: "amit@gmail.com",
      password: "A@123",
      name: "AJ",
    },
    {
      email: "user2@example.com",
      password: "B@456",
      name: "User 2",
    },
    {
      email: "anotheruser@example.com",
      password: "C@789",
      name: "Another User",
    },
  ];
  const filterData = demoArray.filter((item) => item.name);
  console.log(filterData);
  useEffect(() => {
    console.log("hello");
  });

  return (
    <div>
      {demoArray.map((item) => {
        return (
          <>
            {item.name}
            <br></br>
            {item.email}&nbsp;
            <br></br>
            {item.password}
            <br></br>
          </>
        );
      })}
      {filterData.map((item) => {
        return <>{item.name}</>;
      })}
      <br></br>
      <input type="text"></input>
      <button>hello</button>
    </div>
  );
};

export default Mapping;
