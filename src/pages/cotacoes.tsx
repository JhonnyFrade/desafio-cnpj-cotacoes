import { defaultTheme } from "@/styles/themes/default"

import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { Header, CardContainer } from "../components/index"


export default function CotacoesPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
          <Header/>

          <CardContainer />

      <GlobalStyle/>
    </ThemeProvider>
  )
}
