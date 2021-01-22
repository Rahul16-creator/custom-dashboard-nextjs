import Sidebar from './sidebar.js';


//this component will used to render the base component
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