import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import { auth } from './firebase';
import AuthenticatedApp from './views/AuthenticatedApp';
import SignIn from './views/SignIn';

const AppContainer = styled(Box)({
  textAlign: 'center',
  maxWidth: '728px',
  height: '100vh',
});

const Header = styled.header({
  color: 'white',
  width: '100%',
  maxWidth: '728px',
  padding: '12px',
});

const Section = styled.section({
  marginTop: '60px',
  marginInline: '24px',
});

const Title = styled(Typography)({
  fontWeight: 500,
  textAlign: 'center',
  letterSpacing: '1.5px',
  textTransform: 'capitalize',
});

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <AppContainer>
      <Header>
        <Title variant="h3">firechat 🔥</Title>
      </Header>

      <Section>
        {!loading && !user && <SignIn />}
        {loading && <CircularProgress />}
        {user && <AuthenticatedApp user={user} />}
      </Section>
    </AppContainer>
  );
}

export default App;
