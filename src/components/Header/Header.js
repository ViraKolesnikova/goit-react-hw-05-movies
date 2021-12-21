import Container from '../Container';

import s from './Header.module.css'

export default function Header({children}) {
  return (
    <header>
      <Container>
        {children}
      </Container>
    </header>
  )
}