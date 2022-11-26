import React from 'react'
import Group from '../Group/Group'
import axios from 'axios'
function Groups() {
    const token = "1a94206c929942c78b5e77648c0c90fd";
    let baseUrl = "https://api.football-data.org/v4"
    const url = `${baseUrl}/competitions/2000/standings`
    var config = {
        method: 'get',
        url: url,
        headers: { 
          'Access-Control-Allow-Origin': '*',
          'X-Auth-Token': token,
          'Content-Type': 'application/json',
        }
      };

    const getStandings = async() => {
        await axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });

    }
    getStandings()
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
                <Group grp="A"/>
                <Group grp="B"/>
                <Group grp="C"/>
                <Group grp="D"/>
                <Group grp="E"/>
                <Group grp="F"/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Groups