import App from "./App"
import MainChart from '../components/MainChart'
import RevenueChart from '../components/revenueChart';
import YearsChart from '../components/YearsChart';



const Base = () => {

  return (
    <App>
      <div className="App">
        <MainChart />
      </div>
      <br />
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