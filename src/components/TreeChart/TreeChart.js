import { ResponsiveTreeMap } from '@nivo/treemap'
import React from "react";
import './TreeChart.css'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
class TreeChart extends React.Component {

    render() {
        const { title, data} = this.props;
        return (
            <div className={'tree-chart'}>
                <div className='tree-title'>
                    <span>{title ? title : null}</span>
                </div>
                <ResponsiveTreeMap
                    root={data}
                    identity="name"
                    value="loc"
                    leavesOnly={true}
                    innerPadding={3}
                    outerPadding={3}
                    margin={{top: 60, right: 10, bottom: 10, left: 10}}
                    label={'loc'}
                    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.2 ] ] }}
                    orientLabel={false}
                    labelSkipSize={12}
                    colors={function(e){return e.color}}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={11}
                    tooltip={({color, data }) => (
                        <div
                            style={{
                                color: color,
                                padding: '3px 0',
                                textAlign: 'left',
                                fontSize:'12px',
                            }}
                        >
                            <strong>{data.name}</strong><br/>
                            Events: {data.loc.toLocaleString()}<br/>
                            Reach: {data.reach.toLocaleString()}<br/>
                            Cost: ${data.cost.toLocaleString()}<br/>
                        </div>
                    )}
                />
            </div>
        )
    }
}
export default TreeChart;

