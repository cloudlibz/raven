import React from "react";
import CalendarHeatmap from "reactjs-calendar-heatmap";

let chekc = [
  {
    date: "2016-01-01",
    total: 17164,
    details: [
      {
        name: "Project 1",
        date: "2016-01-01 12:30:45",
        value: 9192,
      },
      {
        name: "Project 2",
        date: "2016-01-01 13:37:00",
        value: 6753,
      },
      {
        name: "Project N",
        date: "2016-01-01 17:52:41",
        value: 1219,
      },
    ],
  },
];

function CheckCard({ name, runs, period, type, regions, data }) {
  return (
    <div className="raven-card raven-check">
      <div className="row">
        <div className="col-1 col-md-1"></div>
        <div className="col-5 col-md-5">
          <h4>{name}</h4>
        </div>
        <div className="col-1 col-md-1"></div>
        <div className="col-5  col-md-5"></div>
      </div>
      <div className="row">
        <div className="col-1 col-md-1"></div>
        <div className="col-5 col-md-5">
          <h6>{period}</h6>
        </div>
        <div className="col-1 col-md-1"></div>
        <div className="col-5  col-md-5"></div>
      </div>
      <hr />
      <div className="row">
        <div className="col-1  col-md-1"></div>
        <div className="col-5  col-md-5">
          <CalendarHeatmap data={chekc}></CalendarHeatmap>
        </div>
        <div className="col-6  col-md-6"></div>
      </div>
    </div>
  );
}

export default CheckCard;