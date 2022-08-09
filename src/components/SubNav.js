import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SubNav = () => {
  let location = useLocation()
  let navigate = useNavigate()
  let currentPath = location.pathname.split('/')[1]

  if (!currentPath) {
    navigate('/communities', { replace: true })
  }

  // console.log(location)
  const possiblePaths = {}
  possiblePaths.communities = [
    'Connections',
    'Neighbours',
    'Groups',
    'Business',
  ]
  possiblePaths.vault = [
    'Insurance Policies',
    'Project Documents',
    'Claims Files',
  ]

  const capitalisePath = (path) => {
    let words = path.split(' ')
    let capitalised = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1),
    )
    let cap = capitalised.splice(0, 1, ' ').concat(capitalised)
    return cap
  }
  useEffect(() => {
    if (!currentPath) {
      navigate('/communities', { replace: true })
    }

    return () => {}
  }, [])

  return (
    <div className="nav__sub">
      {/* {!currentPath && <Navigate to="/communities" replace={true} />} */}

      {possiblePaths[currentPath]
        ? possiblePaths[currentPath].map((path, index) => (
            <NavLink
              to={`/${currentPath}/${
                path === 'Insurance Policies'
                  ? ''
                  : path.replace(/\s+/g, '-').toLowerCase()
              }`}
              className={({ isActive }) =>
                isActive ? 'sub-link sub-link__active' : 'sub-link'
              }
              key={index}
            >
              {capitalisePath(path)}
            </NavLink>
          ))
        : null}
    </div>
  )
}

export default SubNav
