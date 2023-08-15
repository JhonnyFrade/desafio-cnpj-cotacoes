import styled from "styled-components"
import { defaultTheme } from "@/styles/themes/default"

export const Container = styled.header `
        display: flex;
        padding: 1.5rem;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
        font-size: 1.5rem;

        border-bottom: 1px solid ${defaultTheme.grey};

        a {
                text-decoration: none;
        color: ${defaultTheme.lightGrey};

        &:hover {
                color: ${defaultTheme.white};
        }
}
`