import React, { useState } from "react";
import "./forecast.css";

class Forecast extends React.Component {
  onTrigger = (event) => {
    this.props.parentCallback(this.props.day);
    event.preventDefault();

    document.querySelectorAll("div.day-box").forEach((element) => {
      element.classList.remove("bg");
      element.classList.remove("change");
    });
    event.currentTarget.classList.add("bg");
  };

  unixToDayName(unix_timestamp) {
    var date = new Date(unix_timestamp * 1000);
    var day = date.getDay();
    let dayName;
    switch (day) {
      case 0:
        dayName = "Вс";
        break;
      case 1:
        dayName = "Пн";
        break;
      case 2:
        dayName = "Вт";
        break;
      case 3:
        dayName = "Ср";
        break;
      case 4:
        dayName = "Чт";
        break;
      case 5:
        dayName = "Пт";
        break;
      case 6:
        dayName = "Сб";
        break;
      default:
        dayName = "nan";
        break;
    }
    dayName += " " + date.getDate();

    return dayName;
  }

  getDayName(day, unix) {
    let dayName;
    switch (day) {
      case 0:
        dayName = "Сегодня";
        break;
      case 1:
        dayName = "Завтра";
        break;
      default:
        dayName = this.unixToDayName(unix);
        break;
    }
    return dayName;
  }

  render() {
    let ico = this.props.data ? this.props.data.weather[0].icon : null;
    return (
      <form>
        <div className="day-box change" onClick={this.onTrigger}>
          <div className="day-name">
            {this.props.data ? (
              <>{this.getDayName(this.props.day, this.props.data.dt + 10800)}</>
            ) : null}
          </div>
          <div className="icon">
            <img
              width={100}
              height={100}
              src={`https://openweathermap.org/img/wn/${ico}@2x.png`}
              alt=""
            />
          </div>
          <div className="temp-frame">
            <div className="d-n-frame">
              <div className="day-temp">
                {this.props.data ? (
                  <>{this.props.data.temp.day.toFixed()}°</>
                ) : null}
              </div>
              <div className="night-temp">
                {this.props.data ? (
                  <>{this.props.data.temp.night.toFixed()}°</>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Forecast;
