import dropDownComponent from "./DropdownComponent"
import GetHours from "./HoursComponent"
import GetMinutes from "./MinutesComponents"
import GetSeconds from "./SecondsComponets"
import GetCity from "./CityComponent"


export default function ClockComponent(){

    return (
    <div id="clockContainer">   
        <div id="containerHours">{GetHours()}</div>
        <div id="containerMinutes">{GetMinutes()}</div>
        <div id="containerSeconds">{GetSeconds()}</div>
        <div id="city">City</div>
        <div id="dropDown">{dropDownComponent()}</div>
    </div> 
    )
}