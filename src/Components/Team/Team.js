import React from 'react'

function Team({img,team,w,l,d,pts}) {
    return (
        <React.Fragment>
            <li className="list-group-item">
                <div className="row">
                    <div class="col-lg-4 d-flex justify-content-center align-items-center" style={{"textAlign":"center"}}>
                        <span className="flag">
                            <img className="rounded-circle" style={{"width":"40px","height":"40px"}} src={img} alt="flag" />
                        </span>
                        <h5 style={{"margin":"auto 4px"}}>
                            {team}
                        </h5>
                    </div>
                    <div class="col-lg-2" style={{"margin":"auto auto"}}>
                        {w}
                    </div>
                    <div class="col-lg-2" style={{"margin":"auto auto"}}>
                        {l}
                    </div>
                    <div class="col-lg-2" style={{"margin":"auto auto"}}>
                        {d}
                    </div>
                    <div class="col-lg-2" style={{"margin":"auto auto"}}>
                        <b>{pts}</b>
                    </div>
                </div>
            </li>
        </React.Fragment>
    )
}

export default Team
