import React from 'react'
import Navs from './Navs';
import Titles from './Titles';
const MainPageLayout = ({children}) => {
  return (
    <div>
        <Titles/>
        <Navs/>
        {children}
        </div>
  )
}
export default MainPageLayout;