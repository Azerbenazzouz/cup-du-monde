import React from 'react'

function Team({img,team,win,lose,draw,points}) {
    return (
        <React.Fragment>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center" style={{"textAlign":"center"}}>
                        <span className="flag">
                            <img className="rounded-circle" style={{"width":"40px","height":"40px"}} src={img} alt="flag" />
                        </span>
                        <h5 style={{"margin":"auto 4px"}}>
                            {team}
                        </h5>
                    </div>
                    <div className="col-lg-2" style={{"margin":"auto auto"}}>
                        {win}
                    </div>
                    <div className="col-lg-2" style={{"margin":"auto auto"}}>
                        {lose}
                    </div>
                    <div className="col-lg-2" style={{"margin":"auto auto"}}>
                        {draw}
                    </div>
                    <div className="col-lg-2" style={{"margin":"auto auto"}}>
                        <b>{points}</b>
                    </div>
                </div>
            </li>
        </React.Fragment>
    )
}

export default Team
