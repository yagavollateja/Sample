import React from 'react'
import {useTheme} from './ThemeContext.js'
export default function Sample() {
    const {theme} = useTheme()
  return (
    <div>
      <h2>{theme}</h2>
    </div>
  )
}
