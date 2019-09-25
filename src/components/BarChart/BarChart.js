import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import './BarChart.css'

// Nivo theming
const theme = {
    background: "#ffffff",
    legends: {
        text: {
            fontFamily: "Helvetica"
        }
    }
};

class BarChart extends React.Component {
    render() {
        const { title, data, keys, index, groupMode, yLabel, orientation, customTooltip} = this.props;

        return (
            <div className='bar-chart'>
                <div className='bar-title'>
                    <span>{title ? title : null}</span>
                </div>
                <ResponsiveBar
                    theme={theme}
                    data={data}
                    keys={keys}
                    indexBy={index}
                    groupMode={groupMode}
                    margin={{
                        top: 80,
                        right: 0,
                        bottom: 60,
                        left: 60
                    }}
                    padding={.5}
                    colors={['#fb8072', '#80b1d3','#fdb462','#b3de69','#fccde5',
                        '#d9d9d9','#bc80bd','#ccebc5']}
                    borderColor="#919eab"
                    enableGridX={false}
                    enableGridY={false}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="#fff"
                    enableLabel={true}
                    animate={true}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 0,
                        tickPadding: 10,
                        tickRotation: 0,
                        legendOffset: 40,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 0,
                        tickPadding: 10,
                        tickRotation: 0,
                        legend: yLabel,
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    motionStiffness={90}
                    motionDamping={15}
                    tooltip={customTooltip ? customTooltip : null}
                    layout={orientation ? orientation:'vertical'}
                />
            </div>
        );
    }
}
export default BarChart;
