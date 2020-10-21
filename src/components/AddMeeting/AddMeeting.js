import React, {PureComponent} from 'react';
import FreeRooms from "../FreeRooms/FreeRooms";
export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            meetingRooms:null,
            selectedDate:'',
            selectedEndTime:'',
            selectedStartTime:''
        }
    }
    render () {
        const {meetingRooms} = this.state;
        return (
            <div>
                <div>
                    <span>Date</span>
                    <input type="text" id="date" name="date" onKeyPress={this.addDateToState} placeholder="dd/mm/yyyy" required/>
                </div>
                <div>
                    <span>Start Time</span>
                    <input type="time" id="start" onChange={this.addStartTimeToState} placeholde="hh:mm" required/>
                </div>
                <div>
                    <span>End Time</span>
                    <input type="time" id="end" onChange={this.addEndTimeToState}  placeholde="hh:mm"  required/>
                </div>
                <button onClick = {this.displayRooms}>Next</button>
                { meetingRooms && <FreeRooms availableRooms={meetingRooms}/>}
            </div>
        )
    }

    addDateToState = (e) => {
        this.setState({
            selectedDate: e.target.value
        })
    }
    addStartTimeToState = (e) => {
        this.setState({
            selectedStartTime: e.target.value
        })
    }
    addEndTimeToState = (e) => {
        this.setState({
            selectedEndTime: e.target.value 
        })
    }
    displayRooms = () => {
        const {selectedOption, dashboardInfo} = this.props;
        const { selectedDate, selectedEndTime, selectedStartTime} = this.state;
        if(selectedDate && selectedStartTime && selectedEndTime) {
            const meetingRooms = dashboardInfo.Buildings.filter((building) => {
                if(building.name === selectedOption) {
                return building.meetingRooms.filter((rooms) => {
                        if(rooms.meetings) {
                        return rooms.meetings.filter((meeting) => {
                                if(meeting.date !== selectedDate ) {
                                        return rooms
                                }
                            })
                        } else {
                        return rooms
                        }
                    })
                }
            });
            this.setState({
                meetingRooms
            })
      } else {
          alert ('Please add the details required');
      }
    }
}
