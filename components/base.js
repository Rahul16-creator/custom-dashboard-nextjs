import App from "./App"
import MainChart from './MainChart'
import RevenueChart from './revenueChart';
import YearsChart from './YearsChart';



const Base = () => {

  return (
    <App>
      <div className="App">
        <MainChart />
      </div>
      <br />
      <div className="mid">
        <div className="card">
          <RevenueChart />
        </div>
        <div>
          <YearsChart />
        </div>
      </div>
    </App>
  )
}

export default Base;