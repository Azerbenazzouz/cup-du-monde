import React,{useState} from 'react'
import Group from '../Group/Group'
import {Data} from './Data'

function Groups() {
    const [standing, setStandings] = useState(Data.standings)
    //data
    // console.log(standing)
  return (
    <React.Fragment>
        <div className="container" style={{"marginTop": "50px"}}>
            
            <div className="p-5 mt-1">
                <div className="row" style={{"direction": "rtl"}}>
                    <h1>
                        <b>المجموعات</b>
                    </h1>
                    <hr />
                </div>
            </div>

            <div className="row" id="standings">
                {standing?.map((group,id) => {return <Group key={id} grp={group.group} data={group.table}/>})}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Groups