import { Container, Reload } from './styles'
import { Card } from '../Card'

import { useApi } from '@/useApiCotacao'
import { useState, useEffect } from 'react'



export const CardContainer =  () =>  {



   const [value, setValue] = useState<Cards> ()
   const [first, setFirst] = useState(true)

   type Cards = {
      USDBRL: {
           code: string
           codein: string
           name: string
           bid: string
           pctChange: string
       }
   
       EURBRL: {
           code: string
           codein: string
           name: string
           bid: string
           pctChange: string
       }
   
       BTCBRL: {
           code: string
           codein: string
           name: string
           bid: string
           pctChange: string
       }
   }


   const Search = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const info = await useApi()
         setValue(info)
   }

   useEffect(() => {
      if (first) {
         Search()
         setFirst(false)
   
      }
   setTimeout(()=>{Search()}
      ,3000)
   })

    return (
        <Container>
            <Card 
            name={`${value?.USDBRL.name}`}
            code={`${value?.USDBRL.code}`}
            bid={`${value?.USDBRL.bid.slice(0, 4)}`}
            codein={`${value?.USDBRL.codein}`}
            pctChange={`${value?.USDBRL.pctChange}`}
            />

            <Card 
               name={`${value?.EURBRL.name}`}
               code={`${value?.EURBRL.code}`}
               bid={`${value?.EURBRL.bid.slice(0, 4)}`}
               codein={`${value?.EURBRL.codein}`}
               pctChange={`${value?.EURBRL.pctChange}`}
               />

            <Card 
               name={`${value?.BTCBRL.name}`}
               code={`${value?.BTCBRL.code}`}
               bid={`${value?.BTCBRL.bid}`}
               codein={`${value?.BTCBRL.codein}`}
               pctChange={`${value?.BTCBRL.pctChange}`}
               />
        </Container>
        )
    }