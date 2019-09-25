import React from "react";
import { ResponsiveLine } from '@nivo/line'
import './ScatterChart.css'
const theme = {
    background: "#ffffff",
};
class ScatterChart extends React.Component {
    render() {
        const { title, data, yLabel} = this.props;
        return(
            <div className='scatter-chart'>
                <div className='scatter-title'>
                    <span>{title ? title : null}</span>
                </div>
                <ResponsiveLine
                    data={data}
                    margin={{
                        top: 60,
                        right: 30,
                        bottom: 30,
                        left: 60
                    }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                    axisTop={null}
                    axisRight={null}
                    enableGridX={false}
                    enableGridY={false}
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
                    colors={['#fb8072', '#80b1d3','#fdb462','#b3de69','#fccde5',
                        '#d9d9d9','#bc80bd','#ccebc5']}
                    theme={theme}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    useMesh={true}
                    enableSlices="x"
                    sliceTooltip={({ slice }) => {
                        return (
                            <div
                                style={{
                                    background: 'white',
                                    padding: '9px 12px',
                                    border: '1px solid #ccc',
                                    textAlign: 'left',
                                    fontSize:'12px',
                                }}
                            >
                                {slice.points.map(point => (
                                    <div
                                        key={point.id}
                                        style={{
                                            color: point.serieColor,
                                            padding: '3px 0',
                                        }}
                                    >
                                        <strong>{point.id.split('.')[0]}</strong><br/>
                                        Events: {point.data.yFormatted.toLocaleString()}<br/>
                                        Reach: {point.data.reach.toLocaleString()}<br/>
                                        Cost: ${point.data.reach.toLocaleString()}<br/>
                                    </div>
                                ))}
                            </div>)}
                    }
                />
            </div>
        )

    }
}
export default ScatterChart;
