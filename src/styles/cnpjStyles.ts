import styled from "styled-components"
import { defaultTheme } from "./themes/default"

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 5rem;
`

export const Button = styled.button `
padding: .5rem 2rem;
border: 1px solid ${defaultTheme.lightGrey};
border-radius: 8px;
background: ${defaultTheme.grey};
color: ${defaultTheme.white};
transition: all 100ms;

&:hover {
    background: ${defaultTheme.white};
    color: ${defaultTheme.grey};
}

`

export const Input = styled.input `
    padding: .5rem 2rem;
    border: 1px solid ${defaultTheme.lightGrey};
    border-radius: 8px;
    background: ${defaultTheme.grey};
    color: ${defaultTheme.white};
`


export const ResultContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background: ${defaultTheme.grey};
    padding: 1rem;
    margin: 1rem 20%;
    border-radius: 8px;
    border: 1px solid ${defaultTheme.white};
`

export const ResultInfoTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 2;
`

export const ResultInfo = styled.h2`
    font-size: 1rem;
    line-height: 2;
    border-bottom: 1px solid ${defaultTheme.lightGrey};
`
export const Span = styled.span`
        color: ${defaultTheme.lightGrey};
`