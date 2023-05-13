import React, { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import "./Job.css";

const Job = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState([]);
  const [datanotfound, setdatanotfound] = useState(true);

  const getUsers = async () => {
    const response = await fetch(
      "https://backend-dashboard-jvc7.onrender.com/data",
      {
        method: "GET",
      }
    );

    const data = await response.json();
    setLoading(false);
    setData(data);
    console.log("data");
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container-out">
        <div
          className="search box-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <input
            className="admin"
            type="text"
            placeholder="Search by company name"
            onChange={(e) => {
              const search = e.target.value.trimStart().trimEnd();
              setdatanotfound(true);
              const new_data = data.filter((item) => {
                return item.company
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              if (new_data.length === 0) {
                setdatanotfound(false);
              }
              setState(new_data);
            }}
          />
        </div>

        <div
          className="search box-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <input
            className="admin2"
            type="text"
            placeholder="Search by title"
            onChange={(e) => {
              const search = e.target.value.trimStart().trimEnd();
              setdatanotfound(true);
              const new_data = data.filter((item) => {
                return item.title.toLowerCase().includes(search.toLowerCase());
              });
              if (new_data.length === 0) {
                setdatanotfound(false);
              }
              setState(new_data);
            }}
          />
        </div>

        <div
          className="search box-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <input
            className="admin3"
            type="text"
            placeholder="Search by Location"
            onChange={(e) => {
              const search = e.target.value.trimStart().trimEnd();
              setdatanotfound(true);
              const new_data = data.filter((item) => {
                return item.locations
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              if (new_data.length === 0) {
                setdatanotfound(false);
              }
              setState(new_data);
            }}
          />
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className="table-responsive">
          <div className="job-data-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>

              {datanotfound ? (
                state.length === 0 ? (
                  data.map((item) => (
                    <tr key={item._id}>
                      <td>{item.job_ids}</td>

                      <td>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#6a00a8", fontWeight: "bold" }}
                        >
                          {item.company}
                        </a>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.locations}</td>
                      <td>{item.date}</td>
                      <td>
                        <a
                          href={`/jobdetail/${item.job_ids}`}
                          style={{ color: "#6a00a8", fontWeight: "bold" }}
                        >
                          See more
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  state.map((item) => (
                    <tr key={item._id}>
                      <td>{item.job_ids}</td>
                      <td>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: "#6a00a8", fontWeight: "bold" }}
                        >
                          {item.company}
                        </a>
                      </td>
                      <td>{item.title}</td>
                      <td>{item.locations}</td>
                      <td>{item.date}</td>
                      <td>
                        <a
                          href={`/jobdetail/${item.job_ids}`}
                          style={{ color: "#6a00a8", fontWeight: "bold" }}
                        >
                          See more
                        </a>
                      </td>
                    </tr>
                  ))
                )
              ) : (
                <h2> Data Not Found </h2>
              )}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
