import Link from 'next/link'
import styled from 'styled-components'

const FooterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 2em 0 2em 0;
padding: 2em 0 2em 0;
gap: 2em;
border-top: 0.25em solid #efefef;
flex-wrap: wrap;
`
const AttributionBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5em;
`

const AttributionLink = styled.a`
color: #5f5f5f !important;
font-size: 0.65em;
`

const FooterGrid = styled.div`
display: flex;
justify-content: space-evenly;
width: 50em;
padding: 0 4em 0 4em;
`

const FooterRow = styled.div`
display: flex;
flex-direction: column;
width: 100%;
h4 {
height: 2em;
}
p {
margin: 0
}
a, a:visited, a:hover, a:active {
color: #2c95e0;
}
`

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterRow>
          <h4>About us</h4>
          <Link href='/about'>Know more</Link>
        </FooterRow>
        <FooterRow>
          <h4>Services</h4>
          <Link href='/'>All products</Link>
        </FooterRow>
        <FooterRow>
          <h4>Made by</h4>
          <p>KazeSoftworks as a test on how NextJS works</p>
        </FooterRow>
      </FooterGrid>
      <AttributionBox>
        <AttributionLink href='https://www.flaticon.com/free-icons/avocado' title='avocado and shopping icons attribution'>Avocado and Shopping cart icon created by amonrat rungreangfangsai - Flaticon</AttributionLink>
        <AttributionLink href='https://www.californiaavocado.com/' title='avocado images attribution'>Avocado images taken from Avocado 101 at California Avocado</AttributionLink>
        <AttributionLink href='https://lottiefiles.com/CHITTA' title='excersice avocado'>Animation of Avocado doing excersie by Chitta Shanmukha in LottieFiles</AttributionLink>
      </AttributionBox>
    </FooterContainer>
  )
}
export default Footer
