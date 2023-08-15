import styled from "styled-components"
import { defaultTheme } from "@/styles/themes/default"

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