import styled from 'styled-components';
import Button from '../Form/Button';
import { AiFillGithub } from 'react-icons/ai';

export default function GithubSignin( { disabled } ) {
  function redirectGithub() {
    const params = new URLSearchParams({
      client_id: process.env.REACT_APP_CLIENT_ID,
      redirect_uri: process.env.REACT_APP_REDIRECT_URI,
      scope: 'user',
      state: 'Driven.t'
    });
    window.location.href = `${process.env.REACT_APP_GITHUB_REQUEST}?${params.toString()}`;
  };

  return (
    <GithubButton color="primary" disabled={disabled} fullWidth onClick={redirectGithub}>
      <AiFillGithub size="30px" className='github'/> GITHUB
    </GithubButton>
  );
}

const GithubButton = styled(Button)`
    background-color: #222327 !important;
    &:hover{
        background-color: #171717 !important;
    }
    .github {
      margin: 0px 5px;
    }
`;
