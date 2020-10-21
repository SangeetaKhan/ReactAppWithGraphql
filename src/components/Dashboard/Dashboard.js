import React from 'react';
import Buildings from '../Buildings/BuildingList';
import MeetingRooms from '../MeetingRooms/MeetingRooms';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import  "./Dashboard.css"
const dashboardData = gql`
  { 
    Buildings {
    name
    meetingRooms {
      name
      floor
      building {
        name
      }
      meetings {
        date
        startTime
        endTime
      }
    }
  }
}
`;

class Dashboard extends React.PureComponent {
	constructor (props) {
		super(props);
		this.state = {
			selectedOption: ''
		}
	}
	render () {
        const {selectedOption}=this.state;
        return (
        <React.Fragment>
            <Query query={dashboardData}>
                    {
                    ({data}) => {
                        return (
                            <React.Fragment>
                                {  data && <div className="dashboard-wrapper">
                                    <Buildings dashboardInfo={data} 
                                                onSelect={this.onSelect} 
                                                value={selectedOption}/>
                                    <MeetingRooms dashboardInfo={data} 
                                                 selectedOption={selectedOption}/>
                                </div>
                                }
                                </React.Fragment>
                        );}
                }
            </Query>
        </React.Fragment>
        );
	}
	onSelect = (value) => {
		console.log(value)
		this.setState({selectedOption: value})
	}
}

export default Dashboard;

