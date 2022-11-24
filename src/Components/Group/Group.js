import React from 'react'

function Group() {
  return (
    <React.Fragment>
        <div className="col-sm-6">
            <div class="card shadow border-none">
                <div class="card-header bg-primary" style={{"textAlign":"center"}}>
                    <b>Group (A)</b>
                </div>
                <div class="row m-0 bg-secondary">
                    <div class="col-lg-4" style={{"textAlign":"center"}}>
                        team
                    </div>
                    <div class="col-lg-2">
                        W
                    </div>
                    <div class="col-lg-2">
                        L
                    </div>
                    <div class="col-lg-2">
                        D
                    </div>
                    <div class="col-lg-2">
                        Pts
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Group