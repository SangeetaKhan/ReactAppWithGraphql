import React, {PureComponent} from 'react';
import './BuildingList.css'

class BuildingList extends PureComponent {
  componentDidMount () {
    this.props.onSelect(this.props.dashboardInfo.Buildings[0].name)
  }
  render () {
    return (
      <div className="list-wrapper">
        <label for="building">Select the Building</label>
          {this.renderBuildingDropDown()}
      </div>
    );
  }
  renderBuildingDropDown = () => {
    const {dashboardInfo, selectedOption} = this.props
     return (
        <select onChange={this.renderBuildingInfo} value={selectedOption} className="list-select">
          <option value='' disabled>Select a category</option>
          {dashboardInfo.Buildings.map(item => (
            <option key={item.name} value={item.name}>{item.name}</option>
          ))}
        </select>
    );
  }
  renderBuildingInfo = (e) => {
    let options = e.target.options, value=[];
    for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value=options[i].value;
        }
      }
    this.props.onSelect(value);
  }
}

export default BuildingList;
