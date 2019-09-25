import React from "react";
import Plotly from 'plotly.js-geo-dist'
import './ChoroplethChart.css'
import createPlotlyComponent from "react-plotly.js/factory";

class ChoroplethChart extends React.Component {
        render() {
                const Plot = createPlotlyComponent(Plotly);
                const { title, keys, values, labels, barTitle} = this.props;
                let data = [
                        {
                                type: 'choropleth', locationmode: 'USA-states',
                                locations: keys,
                                z: values,
                                text:labels,
                                hoverinfo:'text',
                                colorscale:[
                                        [0,'rgb(255, 225, 220)'],
                                        [.25,'rgb(255, 177, 167)'],
                                        [.5,'rgb(255, 158, 145)'],
                                        [.75,'rgb(255, 141, 128)'],
                                        [1,'rgb(251, 128, 114)']],
                                marker:{'line': {'color': 'rgb(180,180,180)', 'width': 0.5}},
                                colorbar:{"thickness": 10, "len": 0.4, "x": 0.9, "y": 0.7,
                                        'title': {"text": barTitle, "side": "bottom"}}
                        }
                ];

                let layout = {
                        // title:'Test',
                        autosize:true,
                        geo:{
                                scope: 'usa',
                                countrycolor: 'rgb(255, 255, 255)',
                                showland: true,
                                landcolor: 'rgb(217, 217, 217)',
                                showlakes: true,
                                lakecolor: 'rgb(255, 255, 255)',
                                subunitcolor: 'rgb(255, 255, 255)',
                                lonaxis: {},
                                lataxis: {},
                                showframe: false,
                                showcoastlines: false
                        },
                        dragmode:false,
                        margin:{t: 0, l:0, b: 0, r:0}
                };

                return(

                    <div className='choro-chart'>
                            <div className='choro-title'>
                                    <span>{title ? title : null}</span>
                            </div>
                            <Plot
                                data={data}
                                layout={layout}
                            />
                    </div>
                )
        }
}
export default ChoroplethChart;
