import styled from 'styled-components'
import Navbar from '@components/Navbar/Navbar'

const HeaderContainer = styled.header`
display: flex;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
justify-content: center;
`
const Header = (): JSX.Element => {
  return (
    <HeaderContainer><Navbar /></HeaderContainer>
  )
}

export default Header
