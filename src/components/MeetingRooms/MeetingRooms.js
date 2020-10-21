import React, {PureComponent} from 'react';
import AddNewMeeting from '../AddMeeting/AddMeeting';
import './MeetingRooms.css';

export default class extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
        toAddNewMeeting: false
      }
  }
  render () {
    const {toAddNewMeeting} = this.state;
    const {selectedOption, dashboardInfo} = this.props;
    return (
        <div className="meeting-room-wrapper">
            <div className="meeting-info">
                {this.renderBuildingUI()}
                {this.renderRooms()}
                {this.renderMeetingInfo()}
                <button onClick={this.renderAddMeeting}>Add New Meeting</button>
            </div>
            {toAddNewMeeting && 
                <AddNewMeeting selectedOption={selectedOption} dashboardInfo={dashboardInfo} />}
        </div>
      )
  }
  renderBuildingUI = () => {
    const {dashboardInfo} = this.props;
    return (
      <div className="building-wrapper">
          <div>Buildings</div>
          <div>Total: {dashboardInfo.Buildings.length}</div>
      </div>
    )
  }
  renderRooms = () => {
    const {dashboardInfo, selectedOption} = this.props;
    let totalRooms = 0, freeNow=0;
    dashboardInfo.Buildings.forEach((building,index) => {
      if( building.name === selectedOption && building.meetingRooms ) {
          totalRooms =  building.meetingRooms.length;
          building.meetingRooms.forEach((room) =>  {
            room.meetings.map((meeting) => {
                const meetingDate = new Date(meeting.date.split("/").reverse());
                const currentDate = new Date();
                if(currentDate.getDate() !== meetingDate.getDate()) {
                    freeNow+= 1;
                }
            });
          });
      }
    });
    return (
      <div className ="room-wrapper">
        <div> Rooms in {selectedOption}</div>
        <div> Total {totalRooms}</div>
        <div> Free Now {freeNow}</div>
      </div>
    )

  }
  renderMeetingInfo = () => {
    const {dashboardInfo} = this.props;
    const {totalMeetingsToday, ongoingMeetings} = this.calculateTotalMeetings(dashboardInfo.Buildings);
    return (
        <div className="meetings-wrapper">
          <div>Meetings</div>
          <div>Total Meetings Today: {totalMeetingsToday}</div>
          <div>Total{ongoingMeetings} Going on now</div>
        </div>
      )

  }

   calculateTotalMeetings = (data) => {
      let totalMeetingsToday = 0, ongoingMeetings=0;
      data.forEach((item) => {
        item.meetingRooms.forEach((room) => {
            room.meetings.map((meeting) => {
              const meetingDate = new Date(meeting.date.split("/").reverse());
              const currentDate = new Date();
              if(currentDate.getDate() === meetingDate.getDate()) {
                  totalMeetingsToday+= 1;
              }
              if(currentDate.getTime() === meetingDate.getTime()) {
                ongoingMeetings+= 1
              }
           });
        });
      });
    return { totalMeetingsToday, ongoingMeetings};
  }
  renderAddMeeting = () => {
      this.setState({toAddNewMeeting: true})
  }
}



