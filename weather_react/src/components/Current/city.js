import React from "react";
import "./city.css";

class City extends React.Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    let ico = this.props.data.weather ? this.props.data.weather[0].icon : null;
    return (
      <form>
        <div>
          <div className="Today">Саранск</div>
          <div className="Frame2">
            <div className="ico">
              <img
                width={120}
                height={120}
                src={`https://openweathermap.org/img/wn/${ico}@2x.png`}
                alt=""
              />
            </div>
            <div className="temperature">
              {this.props.data.temp ? (
                <>{this.props.data.temp.toFixed()}°</>
              ) : null}
            </div>
          </div>
          <div className="Sunny">
            {this.props.data.weather ? (
              <>
                {this.capitalizeFirstLetter(
                  this.props.data.weather[0].description
                )}
              </>
            ) : null}
          </div>
        </div>
      </form>
    );
  }
}

export default City;
