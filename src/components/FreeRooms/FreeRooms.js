import React from 'react';

export default class extends React.PureComponent { 
    constructor(props) {
        super(props);
        this.state = {
            selectedRoom: ''
        }
    }
    render () {
        return (
            <div>
                <div>Please select one of the meeting room</div>
                {this.renderMeetingRooms()}
                <button>Save</button>
            </div>
        )
    }
    renderMeetingRooms = () => {
        const {availableRooms} = this.props;
        return availableRooms.map((room) => {
          return room.meetingRooms.map((meeting) => {
              return (
                  <div onClick={this.updateRoom}>
                      <div>{meeting.name}</div>
                      <div>{room.name}</div>
                      <div>Floor {meeting.floor}</div>
                  </div>
              )
          })
        })
    }
    updateRoom = (e) => {
        this.setState({
            selectedRoom: e.target.value
        })
    }
   
}
