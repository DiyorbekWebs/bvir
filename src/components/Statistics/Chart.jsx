import React from "react";
import { PieChart } from "react-minimal-pie-chart";
const defaultLabelStyle = {
  fontSize: "8px",
  fontFamily: "sans-serif",
};
const Chart = () => {
  const shiftSize = 7;

  return (
    <PieChart
      style={{
        width: "283px",
        height: "284px",
      }}
      label={({ dataEntry }) => dataEntry.value + "%"}
      labelStyle={{
        ...defaultLabelStyle,
      }}
      data={[
        { title: "Rad qilingan", value: 15, color: "#2C4DA4" },
        {
          title: "Korib chiqilmoqda",
          value: 60,
          color: "#4EB027",
        },
        { title: "Hal qilingan", value: 25, color: "#D16FFF" },
      ]}
    />
  );
};

export default Chart;
