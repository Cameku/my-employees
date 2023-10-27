import { Route, Switch } from "react-router-dom"
import Home from "../pages/Home"
import CreateEmployee from "../components/CreateEmployee"



const Navigation = () => {
  return (
    <div>
        <Home />
        <CreateEmployee />
    </div>
   /*  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/CreateEmployee' exact component={CreateEmployee} />
  </Switch> */
  )
}

export default Navigation
