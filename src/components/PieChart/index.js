import React from "react"
import"chart.js/auto"
import { Doughnut } from "react-chartjs-2"
import "./PieChart.css"

const PieChart = ({item, goals_id}) =>{
    const labels = ["goals remaining","current goals"]
    const data = {
        labels,
        datasets:[{
            label: "goals",
            data:[item.amount-item.currentamount, item.currentamount],
            backgroundColor:[
                "rgb(0, 174, 255)",
                "rgb(4, 0, 255)"
            ],
            hoverOffset:4
        }]
        
    }
    console.log("data", data)


    return(
        <div className="ChartContainer">
        <div style={{fontSize:"25px"}}>{item.text}</div>
        <Doughnut key={goals_id} className="Chart"data={data}/>

        </div>
    )
}

export default PieChart