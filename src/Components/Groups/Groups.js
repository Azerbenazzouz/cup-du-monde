import React from 'react'
import Group from '../Group/Group'

function Groups() {
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
                <Group/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Groups