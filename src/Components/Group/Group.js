import React from 'react'
import Team from '../Team/Team'

function Group({grp,data}) {
    console.log(data[0].won)
  return (
    <React.Fragment>
        <div className="col-sm-6 mb-4">
            <div className="card shadow border-none">
                <div className="card-header bg-primary" style={{"textAlign":"center"}}>
                    <b>Group_{grp}</b>
                </div>
                <div className="row m-0 bg-secondary">
                    <div className="col-lg-4" style={{"textAlign":"center"}}>
                        team
                    </div>
                    <div className="col-lg-2">
                        W
                    </div>
                    <div className="col-lg-2">
                        L
                    </div>
                    <div className="col-lg-2">
                        D
                    </div>
                    <div className="col-lg-2">
                        Pts
                    </div>
                </div>

                <ul className="list-group list-group-flush">
                    {data?.map((team,id) => {return <Team key={id}
                                                     team={team.team.tla} 
                                                     win={team.won} 
                                                     lose={team.lost} 
                                                     draw={team.draw} 
                                                     points={team.points} 
                                                     img={team.team.crest}/>})}
                </ul>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Group