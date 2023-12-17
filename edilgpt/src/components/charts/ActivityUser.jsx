import { Chart } from "react-google-charts";
import React from "react";

const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
];

const options = {
    title: "Активность пользователя",
};

function ActivityUser() {
    return (
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"100%"}
        />
    )
}

export default ActivityUser