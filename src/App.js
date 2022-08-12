import './styles/main.scss'
import { useEffect } from 'react'
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

import { useNavigate, Navigate } from 'react-router-dom'
import { useToken } from './utils/useToken'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faUsers,
  faCompass,
  faPlus,
  faFileLines,
  faHome,
  faBriefcase,
  faPencil,
  faCloud,
  faComments,
  faChevronCircleRight,
  faEnvelope,
  faCirclePlay,
  faMicrophone,
  faVideo,
  faMessage,
  faPaperPlane,
  faCirclePause,
  faPhotoVideo,
  faCloudUpload,
  faClipboardList,
  faUmbrella,
  faHouseChimney,
  faLocationDot,
  faCloudArrowDown,
  faUserPlus,
  faCircleQuestion,
  faArrowRightToBracket,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons'
import DiscoverGroups from './pages/DiscoverGroups'
import MyGroups from './pages/MyGroups'
import BusinessList from './pages/BusinessList'
import MyBusiness from './pages/MyBusiness'
import LocalNews from './pages/LocalNews'
import Claims from './pages/Claims'
import Properties from './pages/Properties'
import Projects from './pages/Projects'
import Vault from './pages/Vault'
import InsurancePolicies from './pages/InsurancePolicies'
import ProjectDocuments from './pages/ProjectDocuments'
import ClaimsFiles from './pages/ClaimsFiles'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import EditProfile from './pages/EditProfile'
import { closeModal } from './store/actions/modalActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import PasswordReset from './pages/PasswordReset'
import VaultUploadModal from './components/VaultUploadModal'
import ConfirmEmail from './pages/ConfirmEmail'

library.add(
  faEnvelope,
  faCirclePlay,
  faMicrophone,
  faVideo,
  faMessage,
  faUsers,
  faCompass,
  faPlus,
  faFileLines,
  faHome,
  faBriefcase,
  faPencil,
  faCloud,
  faComments,
  faChevronCircleRight,
  faPaperPlane,
  faCirclePause,
  faPhotoVideo,
  faCloudUpload,
  faClipboardList,
  faFileLines,
  faUmbrella,
  faHouseChimney,
  faLocationDot,
  faCloudArrowDown,
  faUserPlus,
  faCircleQuestion,
  faArrowRightToBracket,
  faCircleXmark,
)

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { message, loading, type } = useSelector((state) => state.notifications)

  const { overlay, profileModal, vaultModal } = useSelector(
    (state) => state.modals,
  )

  useEffect(() => {
    if (loading) {
      toast.loading('Please hold on...', { toastId: 'pending' })
    }
    if (message) {
      toast.dismiss('pending')
      toast[`${type}`](message, { toastId: 'msg' })
    }
    toast.dismiss('pending')
    return () => {}
  }, [loading, message, navigate, dispatch, overlay, type])

  return (
    <div className="app">
      <ToastContainer position="top-right" autoClose={5000} limit={3} />
      {overlay && (
        <div className="overlay">
          <div className="modal">
            <div className="modal__head">
              <FontAwesomeIcon
                icon="fa-circle-xmark"
                onClick={() => dispatch(closeModal())}
                className="close"
              />
            </div>
            {profileModal && <EditProfile />}
            {vaultModal && <VaultUploadModal />}
          </div>
        </div>
      )}
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
        <Route path="/auth" element={<Auth />}>
          <Route path="" index={true} element={<Login />} />
          <Route path="two-factor" element={<TwoFactor />} />
          <Route path="signup" exact element={<SignUp />} />
          <Route path="forgot-password" exact element={<PasswordReset />} />
          <Route path="confirm" exact element={<ConfirmEmail />} />
          {/* <Route path="password-reset" exact element={<ResetPassword />} /> */}
        </Route>
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
      {/* <Routes>
        
      </Routes> */}
    </div>
  )
}

export default App
