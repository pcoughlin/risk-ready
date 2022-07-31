import React from 'react'
import { NavLink } from 'react-router-dom'

const SubNav = ({ parentPath }) => {
  const possiblePaths = {}
  possiblePaths.home = ['connections', 'neighbours', 'groups', 'business']

  const capitalisePath = (path) => path.charAt(0).toUpperCase() + path.slice(1)

  return (
    <div className="nav__sub">
      {possiblePaths[parentPath]
        ? possiblePaths[parentPath].map((path, index) => (
            <NavLink
              to={`/${path}`}
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
