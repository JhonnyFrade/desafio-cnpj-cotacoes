import { defaultTheme } from "@/styles/themes/default"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"

import { Header } from "../components/index"


export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
          <Header/>

      <GlobalStyle/>
    </ThemeProvider>
  )
}
