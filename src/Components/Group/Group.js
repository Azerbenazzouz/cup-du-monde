import React from 'react'
import Team from '../Team/Team'

function Group() {
  return (
    <React.Fragment>
        <div className="col-sm-6 mb-4">
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

                <ul className="list-group list-group-flush">
                    {/* TEAM */}
                        <Team 
                            img="https://th.bing.com/th/id/R.7c3b2f2f451f32890ecb413ce7ddc529?rik=3nrRSVyfub5q8g&pid=ImgRaw&r=0" 
                            team="TUN" 
                            w="4" 
                            l="1" 
                            d="0" 
                            pts="9"
                        />
                        <Team 
                            img="https://th.bing.com/th/id/R.7c3b2f2f451f32890ecb413ce7ddc529?rik=3nrRSVyfub5q8g&pid=ImgRaw&r=0" 
                            team="TUN" 
                            w="4" 
                            l="1" 
                            d="0" 
                            pts="9"
                        />
                        <Team 
                            img="https://th.bing.com/th/id/R.7c3b2f2f451f32890ecb413ce7ddc529?rik=3nrRSVyfub5q8g&pid=ImgRaw&r=0" 
                            team="TUN" 
                            w="4" 
                            l="1" 
                            d="0" 
                            pts="9"
                        />
                        <Team 
                            img="https://th.bing.com/th/id/R.7c3b2f2f451f32890ecb413ce7ddc529?rik=3nrRSVyfub5q8g&pid=ImgRaw&r=0" 
                            team="TUN" 
                            w="4" 
                            l="1" 
                            d="0" 
                            pts="9"
                        />
                    {/* TEAM */}
                </ul>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Group