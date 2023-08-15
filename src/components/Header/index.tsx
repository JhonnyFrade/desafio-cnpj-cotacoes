import Link from 'next/link'
import { Container } from './styles'

export const Header = () =>  {
    return (

        <Container>
            <Link href='../../'>DesafioNext</Link>
            <Link href="../../cnpj">Consulta de CNPJ</Link>          
            <Link href="../../cotacoes">Consulta de cotaçoes</Link>
        </Container>
        )
    }