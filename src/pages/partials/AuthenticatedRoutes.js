import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import BusinessList from '../BusinessList'
import Connections from '../Connections'
import DiscoverGroups from '../DiscoverGroups'
import GroupDetails from '../GroupDetails'
import { GroupFeeds } from '../GroupFeeds'
import Home from '../Home'
import Neighbours from '../Neighbours'
import Default from './Default'
import MyGroups from '../MyGroups'
import MyBusiness from '../MyBusiness'
import InsurancePolicies from '../InsurancePolicies'
import ProjectDocuments from '../ProjectDocuments'
import ClaimsFiles from '../ClaimsFiles'
import LocalNews from '../LocalNews'
import Claims from '../Claims'
import Properties from '../Properties'
import Projects from '../Projects'
import EditProfile from '../EditProfile'

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="communities">
          <Route path="" index={true} element={<Home />} />
          <Route path="connections" element={<Connections />} />
          <Route path="neighbours" element={<Neighbours />} />
          <Route path="groups">
            <Route path=":id" element={<GroupDetails />} />
            <Route path="" index={true} element={<GroupFeeds />} />
            <Route path="discover" element={<DiscoverGroups />} />
            <Route path="my" element={<MyGroups />} />
          </Route>
          <Route path="business">
            <Route path="" exact index={true} element={<BusinessList />} />
            <Route path="my" element={<MyBusiness />} />
          </Route>
        </Route>
        <Route path="/vault">
          <Route path="" index={true} element={<InsurancePolicies />} />
          <Route
            path="project-documents"
            index={true}
            element={<ProjectDocuments />}
          />
          <Route path="claims-files" index={true} element={<ClaimsFiles />} />
        </Route>
        <Route path="/local-news" element={<LocalNews />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      {/* <Route path="/auth" element={<Auth />}>
          <Route path="" index={true} element={<Login />} />
          <Route path=":two-factor" element={<TwoFactor />} />
          <Route path=":signup" exact element={<SignUp />} />
          <Route path=":forgot-password" exact element={<PasswordReset />} />
         
        </Route> */}
      <Route path="/profile/edit" element={<EditProfile />} />
    </Routes>
  )
}

export default AuthenticatedRoutes
