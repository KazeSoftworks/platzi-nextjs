import Image from 'next/image'
import styled from 'styled-components'
import Avocados from '@public/images/avocados.jpg'

const AboutSection = styled.section`
max-width: 700px;
margin: 1em auto 1em auto;
h1{
  text-align: center;
}
img{
  width: 100%;
  height: auto;
}
`
const AttributionText = styled.p`
text-align: center;
color: #5f5f5f;
a, a:visited, a:hover, a:active {
color: #2c95e0;
}
`
const FactLists = styled.ol`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 3.5rem 2.5rem;
  list-style: none;
  counter-reset: orderedlist;
  padding: 0;
  li::before {
          counter-increment: orderedlist;
          content: counter(orderedlist);
          // Boring stuff
          position: absolute;
          top: -15px;
          left: -10px;
          color: #cecece;
          font-size: 5rem;
          font-weight: bold;
        }
        li {
          position: relative;
        }
        h3:first-child {
          // why the first-child selector you may ask...
          // to gain specificity and thus avoid using '!important' :)
          padding-left: 40px;
          margin-bottom: 2rem;
        }
`

const avoFacts = [
  {
    title: 'Most avocados come from Mexico',
    content:
      'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.'
  },
  {
    title: 'The conquistadors were huge fans.',
    content:
      'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. '
  },
  {
    title: '“Avocado” wasn’t its original name.',
    content:
      'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”'
  },
  {
    title: 'It’s actually a fruit.',
    content:
      'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.'
  },
  {
    title: 'There’s a secret trick to ripening them up quick',
    content:
      'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.'
  }
]

const AboutPage = (): JSX.Element => {
  return (
    <AboutSection>
      <h1>13 Surprising Facts About Avocados</h1>
      <Image src={Avocados} alt='avocados on a table' priority />
      <AttributionText>
        Originally from <a href='https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/'>Taste of Home</a>
      </AttributionText>
      <FactLists>
        {avoFacts.map(({ title, content }) => (
          <li key={title}>
            <h3>{title}</h3>
            <p>{content}</p>
          </li>
        ))}
      </FactLists>
    </AboutSection>
  )
}

export default AboutPage
