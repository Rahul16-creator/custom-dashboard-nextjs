import Sidebar from './sidebar.js';

const App = ({children}) => {
    return (
      <div className="wrapper">
      <Sidebar />
      <br />
      <div className="mainContent">
          {children}
      </div>
  </div>
    )
}


export default App