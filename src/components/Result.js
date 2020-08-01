import React, { useEffect, useState } from "react";
// import data from "../data.json";

const Result = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://demo0935788.mockable.io/students")
      .then((dat) => dat.json())
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  });
  const sortedData = [...data];
  const sum = [];
  const status = [];

  sortedData.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  sortedData.map((item) => {
    sum.push(
      Number(item.marks.Maths) +
        Number(item.marks.English) +
        Number(item.marks.Science)
    );
    return sum;
  });

  sortedData.map((item) => {
    if (
      item.marks.English < 20 ||
      item.marks.Maths < 20 ||
      item.marks.Science < 20
    )
      status.push(false);
    else status.push(true);
    return status;
  });
  let a = 0,
    b;
  sum.map((item, i) => {
    if (item > a) {
      b = i;
      a = item;
    }
  });

  return (
    <div className="tab">
      <table className="content-table">
        <thead>
          <tr>
            <th colSpan="4">Students Result Board</th>
          </tr>
          <tr className="sub-heading">
            <th>Name</th>
            <th>Roll Number</th>
            <th>Total Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((student, i) => (
            <tr key={student.rollNumber}>
              <td
                className={
                  status[i] && b === i ? "green" : status[i] ? "black" : "red"
                }
              >
                {student.name.charAt(0).toUpperCase() + student.name.slice(1)}
              </td>
              <td
                className={
                  status[i] && b === i ? "green" : status[i] ? "black" : "red"
                }
              >
                {student.rollNumber}
              </td>
              <td
                className={
                  status[i] && b === i ? "green" : status[i] ? "black" : "red"
                }
                className="right"
              >
                {sum[i]}
              </td>
              <td
                className={
                  status[i] && b === i ? "green" : status[i] ? "black" : "red"
                }
              >
                {status[i] && b === i ? "Topper" : status[i] ? "Pass" : "Fail"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
