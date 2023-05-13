import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import "./Job.css";
import "./Jobdetail.css";

const Jobdetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `https://backend-dashboard-jvc7.onrender.com/data/${id}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      <Navbar />

      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="job-data-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <td>{data.job_ids}</td>
                <td>
                  <a
                    href={data.url}
                    target="_blank"
                    style={{ color: "#6a00a8", fontWeight: "bold" }}
                  >
                    {data.company}
                  </a>
                </td>
                <td>{data.title}</td>
                <td>{data.locations}</td>
                <td>{data.date}</td>
              </tbody>
            </table>
          </div>
          <div className="tour-data-box">
            <div className="trans-detail-tabledown">
              <p
                style={{
                  color: "#6a00a8",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                Description{" "}
              </p>
            </div>
          </div>

          <div className="tour-data-box2">
            <div className="trans-detail-tabledown2">
              <p
                style={{
                  color: "black",
                  fontSize: "20px",
                }}
              >
                {data.description}{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobdetail;
