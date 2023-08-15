import styled from "styled-components"
import { defaultTheme } from "@/styles/themes/default"

export const Container = styled.div `
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 2rem 10%;
        font-size: 1.5rem;
        gap: 1.5rem;

        
`

export const Reload = styled.button`
        background: ${defaultTheme.grey};
        color: ${defaultTheme.white};
        border: none;
        border-radius: 8px;
        padding: .5rem 2rem;
`