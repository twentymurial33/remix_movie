import { useState } from 'react';
import { Container, Burger,Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
//import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <h1>Remix Movie Marketplace</h1>
        {/* <MantineLogo size={28} /> */}
        <Button variant="filled" color="blue" style={{marginLeft:'40px'}}>
          {items}
        </Button>
       
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Header;