import { ButtonGroup, Button, Box, Container } from '@mui/material';

export default function Home() {
  return (
    <main className='bg-background-beige'>
      <Container>
        <Box>
          <ButtonGroup
            variant='text'
            aria-label='Basic button group'
            size='small'
            orientation='horizontal'
          >
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Technologies</Button>
            <Button>Projects</Button>
            <Button>Contact</Button>
          </ButtonGroup>
        </Box>
      </Container>
    </main>
  );
}
