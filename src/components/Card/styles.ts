import styled from "styled-components"
import { defaultTheme } from "@/styles/themes/default"

export const Percent = styled.small`
        font-size: .8rem;
        color: ${defaultTheme.lightGrey};
`

export const Container = styled.div `
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        font-size: 1.5rem;  
        border: 1px solid ${defaultTheme.white};
        border-radius: 8px;
        background: ${defaultTheme.grey};
        
`

export const TitleName = styled.h2 `
        font-size: 1rem;
        `

export const Code = styled.p `
        color: ${defaultTheme.lightGrey};
        font-size: .8rem;
`

export const Values = styled.div `
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
`

export const PriceText = styled.h1`
        font-size: 1.2rem;
`

export const Price = styled.span`
        font-size: 1.4rem;
        color: ${defaultTheme.green};
`