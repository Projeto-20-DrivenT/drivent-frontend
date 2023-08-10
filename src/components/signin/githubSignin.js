import styled from 'styled-components';
import Button from '../Form/Button';

export default function GithubSignin() {
  return (
    <GithubButton color="primary" fullWidth>
        GITHUB
    </GithubButton>
  );
}

const GithubButton = styled(Button)`
    background-color: #222327 !important;
    &:hover{
        background-color: #171717 !important;
    }
`;
