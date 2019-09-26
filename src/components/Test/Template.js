import React from "react";


import BarChart from "../BarChart/BarChart";
import DonutChart from "../DonutChart/DonutChart";
import ScatterChart from "../ScatterChart/ScatterChart";
import ChoroplethChart from "../ChoroplethChart/ChoroplethChart";
import TreeChart from "../TreeChart/TreeChart";
import Checkbox from "../CheckBox/Checkbox"

import './Template.css'

const data = {
    kpi01:[{
            id:"On Premise",
            label:"On Premise",
            value: 302,
        },
        {
            id:"Off Premise",
            label:"Off Premise",
            value: 2484,
        }],
    kpi02:[{
            id:"On Premise",
            label:"On Premise",
            value: 24974,
        },
        {
            id:"Off Premise",
            label:"Off Premise",
            value: 164891,
        }],
    kpi03:[{
            id:"On Premise",
            label:"On Premise",
            value: 176531,
        },
        {
            id:"Off Premise",
            label:"Off Premise",
            value: 967630,
        }],

    kpi04:[{
            id:"Event",
            label:"Event",
            value: 818364,
        },
        {
            id:"POS",
            label:"POS Cost",
            value: 164191,
        },
        {
            id:"Warehouse",
            label:"Warehouse Cost",
            value: 69669,
        },
        {
            id:"Training",
            label:"Training Cost",
            value: 27868,
        },
        {
            id:"Uniform",
            label:"Uniform Cost",
            value: 4180,
        },
    ],
    region:[
        {
            id:"West",
            'On Premise':72,
            'Off Premise':457,
            'On Premise Cost':10000,
            'Off Premise Cost':20000,
            'On Premise Reach':5000,
            'Off Premise Reach':10000,
        },
        {
            id:"East",
            'On Premise':89,
            'Off Premise':1038,
            'On Premise Cost':10000,
            'Off Premise Cost':20000,
            'On Premise Reach':5000,
            'Off Premise Reach':10000,
        },
        {
            id:"Control",
            'On Premise':12,
            'Off Premise':235,
            'On Premise Cost':10000,
            'Off Premise Cost':20000,
            'On Premise Reach':5000,
            'Off Premise Reach':10000,
        },
        {
            id:"Central",
            'On Premise':127,
            'Off Premise':753,
            'On Premise Cost':10000,
            'Off Premise Cost':20000,
            'On Premise Reach':5000,
            'Off Premise Reach':10000,
        },
    ],
    monthScatter:[
        {
            id:'On Premise',
            data:[
                {
                    x:'Jul',
                    y:0,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Aug',
                    y:0,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Sep',
                    y:3,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Oct',
                    y:37,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Nov',
                    y:50,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Dec',
                    y:52,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Jan',
                    y:14,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Feb',
                    y:41,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Mar',
                    y:42,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Apr',
                    y:24,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'May',
                    y:23,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Jun',
                    y:13,
                    cost:1000,
                    reach:1000
                }
            ]
        },
        {
            id:'Off Premise',
            data:[
                {
                    x:'Jul',
                    y:71,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Aug',
                    y:72,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Sep',
                    y:235,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Oct',
                    y:335,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Nov',
                    y:483,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Dec',
                    y:552,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Jan',
                    y:27,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Feb',
                    y:223,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Mar',
                    y:238,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Apr',
                    y:116,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'May',
                    y:111,
                    cost:1000,
                    reach:1000
                },
                {
                    x:'Jun',
                    y:14,
                    cost:1000,
                    reach:1000
                }
            ]
        }
    ],
    map:[
        {
            "id": "01",
            "value": 494819
        },
        {
            "id": "02",
            "value": 242236
        },
        {
            "id": "03",
            "value": 675939
        },
        {
            "id": "04",
            "value": 367624
        },
        {
            "id": "05",
            "value": 352541
        }
    ],
    program:{
        "name": "Baileys",
        "color": "#ffffff",
        "children": [
            {
                "name": "Off Premise",
                "color": "#fb8072",
                "children": [
                    {
                        "name": "F20 Baileys Program 1 Off Premise",
                        "color": "#fb8072",
                        "loc": 1000,
                        "cost": 20000,
                        "reach":10000
                    },
                    {
                        "name": "F20 Baileys Program 2 Off Premise",
                        "color": "#fb8072",
                        "loc": 3000,
                        "cost": 60000,
                        "reach":40000
                    },
                    {
                        "name": "F20 Baileys Program 3 Off Premise",
                        "color": "#fb8072",
                        "loc": 3000,
                        "cost": 60000,
                        "reach":40000
                    },
                ]
            },
            {
                "name": "On Premise",
                "color": "#80b1d3",
                "children": [
                    {
                        "name": "F20 Baileys Program 1 On Premise",
                        "color": "#80b1d3",
                        "loc": 5000,
                        "cost": 100000,
                        "reach":40000
                    }
                ]
            }
        ]
    }
};

class Template extends React.Component {

    state = { checked: false }

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    }

    render() {
        // create legend
        const keys = ["Off Premise", "On Premise"];

        return (
            <div>
                <div className={'controls'}>
                    <label className={'checkbox'}>
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChange}
                            color={'#fb8072'}
                        />
                        <span style={{ marginLeft: 8 }}>On Premise</span>
                    </label>
                    <label>
                        <Checkbox
                            checked={this.state.checked}
                            onChange={this.handleCheckboxChange}
                            color={'#80b1d3'}
                        />
                        <span style={{ marginLeft: 8 }}>Off Premise</span>
                    </label>
                </div>
                <div className='kpi-section'>
                    <div className={'kpi'}>
                        <DonutChart
                            currency={false}
                            data={data.kpi01}
                            centerText={2787}
                            centerLabel={'Projected Events (#)'}
                            displayLabel={true}
                        />
                    </div>
                    <div className={'kpi'}>
                        <DonutChart
                            currency={false}
                            data={data.kpi02}
                            centerText={5}
                            centerLabel={'Projected Reach (#)'}
                            displayLabel={true}
                        />
                    </div>

                    <div className={'kpi'}>
                        <DonutChart
                            currency={true}
                            data={data.kpi03}
                            centerText={5}
                            centerLabel={'Projected Costs ($)'}
                            displayLabel={true}
                        />
                    </div>
                </div>
                <div className={'cost-section'}>
                    <div className={'cost'}>
                        <DonutChart
                            // title={'Cost Breakdown'}
                            currency={true}
                            data={data.kpi04}
                            legends={true}
                            centerLabel={'Cost Breakdown'}
                            displayLabel={false}
                        />
                    </div>
                    <div className={'month'}>
                        <TreeChart
                            title={'Breakdown by Program'}
                            data={data.program}
                        />
                    </div>
                </div>
                <div className={'cost-section'}>
                    <div className='month'>
                        <ScatterChart
                            title={'Break Down By Month'}
                            data={data.monthScatter}
                            yLabel={'Events'}
                        />
                    </div>
                </div>
                <div className='market-section'>
                    <div className='state'>
                        <ChoroplethChart
                            title={'Breakdown by States'}
                            keys={['NY', 'AL']}
                            labels={['Events: 100<br>Reach: 10,000<br>Cost: $20,000', 'Events: 1,000<br>Reach: 10,000<br>Cost: $20,000']}
                            values={[3000, 1000]}
                            barTitle={'Events'}
                        />
                    </div>
                    <div className='region'>
                        <BarChart
                            title={'Break Down By Region'}
                            data={data.region}
                            keys={keys}
                            index={"id"}
                            groupMode={"stacked"}
                            orientation={'vertical'}
                            yLabel={'Events'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Template;
