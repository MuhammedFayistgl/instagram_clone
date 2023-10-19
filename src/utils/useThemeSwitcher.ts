import { useState } from 'react'

const useThemeSwitcher = () => {

  const [theme, setTheme] = useState<string>('dark')

  const toggleTheme = ():void =>  {
    const nextTheme :string = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    localStorage.setItem('theme',theme)
  }



  return [  theme , toggleTheme] as const
}


export default useThemeSwitcher