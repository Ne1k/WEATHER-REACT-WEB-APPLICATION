import React from "react";
import "./details.css";

class Details extends React.Component {
  unixToNormal(unix_timestamp) {
    var date = new Date(unix_timestamp * 1000);

    var hours = date.getHours();

    var minutes = "0" + date.getMinutes();

    return hours + ":" + minutes.substr(-2);
  }

  render() {
    return (
      <div>
        <div className="ttex">Подробности</div>
        <div className="border"></div>
        <div className="about">
          <div className="feels">По ощущениям</div>
          <div className="like">
            {this.props.data ? (
              <>{this.props.data.feels_like.day.toFixed()}</>
            ) : null}
            °
          </div>
        </div>
        <div className="pressure">
          <div className="pres">Давление</div>
          <div className="press">
            {this.props.data ? (
              <>{(this.props.data.pressure / 1.3332).toFixed()}</>
            ) : null}
            ,00 мм
          </div>
        </div>
        <div className="second">
          <div className="humidity">Влажность</div>
          <div className="humi">
            {this.props.data ? <>{this.props.data.humidity}</> : null}%
          </div>
        </div>
        <div className="four">
          <div className="fourtext">Ветер</div>
          <div className="wind">
            <div className="windd">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1438 2.24373L1.49375 5.52498C1.39458 5.5521 1.30618 5.60912 1.24058 5.68829C1.17499 5.76746 1.1354 5.86492 1.1272 5.96741C1.119 6.06989 1.1426 6.17241 1.19477 6.261C1.24694 6.34959 1.32515 6.41995 1.41875 6.46248L6.76875 8.99373C6.87355 9.04227 6.95772 9.12643 7.00625 9.23123L9.5375 14.5812C9.58004 14.6748 9.65039 14.753 9.73898 14.8052C9.82757 14.8574 9.93009 14.881 10.0326 14.8728C10.1351 14.8646 10.2325 14.825 10.3117 14.7594C10.3909 14.6938 10.4479 14.6054 10.475 14.5062L13.7563 2.85623C13.7811 2.77122 13.7827 2.68108 13.7607 2.59527C13.7388 2.50945 13.6941 2.43113 13.6315 2.36849C13.5689 2.30586 13.4905 2.26123 13.4047 2.23928C13.3189 2.21733 13.2288 2.21887 13.1438 2.24373V2.24373Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {this.props.data ? (
                <>{this.props.data.wind_speed.toFixed()}</>
              ) : null}{" "}
              м/c
            </div>
          </div>
        </div>
        <div className="fifth">
          <div className="visibility">Вероятность осадков</div>
          <div className="visibility-properties">{this.props.data ? <>{this.props.data.pop*100}</> : null}%</div>
        </div>
        <div className="border-2"></div>
        <div className="sunrise">
          <div className="sunrise-time">
            {this.props.data ? (
              <>{this.unixToNormal(this.props.data.sunrise + 10800)}</>
            ) : null}
          </div>
          <div className="sunrise-text">Восход</div>
          <div className="sunrise-ico">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.2822 17.0882L30.9322 22.7622C30.1661 24.6102 27.3942 23.4622 28.1602 21.6142L30.5102 15.9402C31.2762 14.0922 34.0482 15.2402 33.2822 17.0882ZM43.8142 29.2442L38.1402 31.5942C36.2922 32.3602 35.1442 29.5882 36.9922 28.8222L42.6662 26.4722C44.5142 25.7062 45.6622 28.4782 43.8142 29.2442ZM9.61219 31.5962L3.93818 29.2462C2.09015 28.4802 3.23816 25.7082 5.08619 26.4742L10.7602 28.8242C12.6082 29.5902 11.4601 32.3622 9.61219 31.5962ZM17.2382 15.9382L19.5882 21.6122C20.3542 23.4602 17.5822 24.6082 16.8162 22.7602L14.4662 17.0862C13.7002 15.2382 16.4722 14.0902 17.2382 15.9382ZM14.0842 33.8822H33.6841C32.7576 29.3177 28.7221 25.8822 23.8842 25.8822C19.0463 25.8822 15.0107 29.3177 14.0842 33.8822Z"
                fill="#FFB300"
              />
              <path
                d="M24 32V29"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M26 30L24 28L22 30"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="sunset">
          <div className="sunset-text">Закат</div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.2822 17.0882L30.9322 22.7622C30.1661 24.6102 27.3942 23.4622 28.1602 21.6142L30.5102 15.9402C31.2762 14.0922 34.0482 15.2402 33.2822 17.0882ZM43.8142 29.2442L38.1402 31.5942C36.2922 32.3602 35.1442 29.5882 36.9922 28.8222L42.6662 26.4722C44.5142 25.7062 45.6622 28.4782 43.8142 29.2442ZM9.61219 31.5962L3.93818 29.2462C2.09015 28.4802 3.23816 25.7082 5.08619 26.4742L10.7602 28.8242C12.6082 29.5902 11.4601 32.3622 9.61219 31.5962ZM17.2382 15.9382L19.5882 21.6122C20.3542 23.4602 17.5822 24.6082 16.8162 22.7602L14.4662 17.0862C13.7002 15.2382 16.4722 14.0902 17.2382 15.9382ZM14.0842 33.8822H33.6841C32.7576 29.3177 28.7221 25.8822 23.8842 25.8822C19.0463 25.8822 15.0107 29.3177 14.0842 33.8822Z"
              fill="#FFB300"
            />
            <path
              d="M24 28L24 31"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 30L24 32L26 30"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="sunset-time">
            {this.props.data ? (
              <>{this.unixToNormal(this.props.data.sunset + 10800)}</>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
