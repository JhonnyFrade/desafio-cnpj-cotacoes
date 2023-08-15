import { defaultTheme } from "@/styles/themes/default"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { Header } from "@/components"
import { Button, Form, Input, ResultContent, ResultInfo, ResultInfoTitle, Span } from "@/styles/cnpjStyles"

import { useApi } from "@/useApiCnpj"
import { useState } from "react"



export default function CnpjPage() {
  const [searchCnpj, setSearchCnpj] = useState('')
  const [value, setValue] = useState({ company: '', city: '', state: '', street: '', number: '', mainActivity: '' })

  const Search = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = await useApi(searchCnpj)
    setValue({ company: data.company.name, city: data.address.city, state: data.address.state, number: data.address.number, mainActivity: data.mainActivity.text, street: data.address.street })

  }

  console.log(value)

  return (
    <ThemeProvider theme={defaultTheme}>

        <Header />
        
        <Form>
          <Input type="number" placeholder="Pesquisar por CNPJ" onChange={(event) => { setSearchCnpj(event.target.value); }} required/>
          <Button  type='button' onClick={() => { Search() }}> Pesquisar </Button>
        </Form>

        <ResultContent>
          <ResultInfoTitle>{value.company}</ResultInfoTitle>
          
          <ResultInfo><Span>Cidade:</Span> {value.city}</ResultInfo>
          <ResultInfo><Span>Estado:</Span> {value.state}</ResultInfo>
          <ResultInfo><Span>Rua:</Span> {value.street}</ResultInfo>
          <ResultInfo><Span>Endereço:</Span> {value.number}</ResultInfo>
          <ResultInfo><Span>Atividade:</Span> {value.mainActivity}</ResultInfo>
        </ResultContent>
      <GlobalStyle />
    </ThemeProvider>
  )
}