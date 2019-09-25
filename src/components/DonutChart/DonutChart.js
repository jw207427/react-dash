import React from "react";
import { ResponsivePie } from "@nivo/pie";
import './DonutChart.css'

const theme = {
    background: "#ffffff"
};

const donut_legends = [
    {
        anchor: "top-right",
        direction: "column",
        justify: false,
        translateX: -35,
        translateY: 0,
        itemsSpacing: 10,
        itemWidth: 20,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        itemTextColor: "#000000",
        symbolSize: 15,
        symbolShape: "square",
        effects: [
            {
                on: "hover",
                style: {
                    itemOpacity: 1
                }
            }
        ]
    }
];
class DonutChart extends React.Component {
    render() {
        const { currency, title, data, centerText, centerLabel, legends, displayLabel} = this.props;

        return (
            <div className={'donut-chart'}>
                <div className='donut-title'>
                    <span>{title ? title : null}</span>
                </div>
                <ResponsivePie
                    margin={{top: 40, right: 30, bottom: 30, left: 30}}
                    data={data}
                    colors={['#fb8072', '#80b1d3','#fdb462','#b3de69','#fccde5',
                        '#d9d9d9','#bc80bd','#ccebc5']}
                    innerRadius={0.7}
                    enableRadialLabels={false}
                    slicesLabelsTextColor="#ffffff"
                    sliceLabel={currency? function(e){return "$"+ e.value.toLocaleString()}:function(e){return e.value.toLocaleString()}}
                    enableSlicesLabels={displayLabel}
                    theme={theme}
                    legends={legends ? donut_legends:[]}
                    tooltip={({ id, value, color }) => (
                        <span style={{ color }}>
                            {id}: {currency ? "$"+value.toLocaleString(): value.toLocaleString()}
                        </span>
                    )}
                />
                <div className={'donut-overlay'}>
                    <span className={'donut-totalLabel'}>{centerLabel}</span>
                    <span>{centerText!=null ? centerText.toLocaleString() : null}</span>
                </div>
            </div>
        );
    }
}
export default DonutChart;
