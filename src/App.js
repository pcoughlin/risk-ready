import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from './pages/partials/Auth'
import { TwoFactor } from './pages/TwoFactor'
import { SignUp } from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import Default from './pages/partials/Default'
import Connections from './pages/Connections'
import Neighbours from './pages/Neighbours'
import { GroupFeeds } from './pages/GroupFeeds'
import GroupDetails from './pages/GroupDetails'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faUsers,
  faCompass,
  faPlus,
  faFileLines,
  faHome,
  faBriefcase,
  faPencil,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUsers,
  faCompass,
  faPlus,
  faFileLines,
  faHome,
  faBriefcase,
  faPencil,
)

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="" index={true} element={<Home />} />
          <Route path="connections" element={<Connections />} />
          <Route path="neighbours" element={<Neighbours />} />
          <Route path="groups">
            <Route path=":id" element={<GroupDetails />} />
            <Route path="feeds" element={<GroupFeeds />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="" index={true} element={<Login />} />
          <Route path=":two-factor" element={<TwoFactor />} />
          <Route path=":signup" exact element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
