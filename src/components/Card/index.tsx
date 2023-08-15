import { Code, Container, Percent, Price, PriceText, TitleName, Values } from './styles'

interface ICardProps {
    name: string;
    code: string;
    codein: string;
    pctChange: string;
    bid: string;
}

export const Card = ( { name, code, codein, pctChange, bid }:ICardProps ) =>  {

    return (
        <Container>
            <TitleName>{name}</TitleName>
            <Code>{code}</Code>

            <Values>
                <PriceText>cotação atual: <Price>{bid}</Price> {codein}</PriceText>
                <Percent>{pctChange}%</Percent>
            </Values>
        </Container>
        )
    }