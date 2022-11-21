import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const Error = styled.h1`
  font-size: 1050%;
  color: #FF6060;
  margin-bottom: auto;
`
const PageError =styled.div`
  text-align: center;
  color: #FF6060;
`

const Message =styled.h2`
  color: #FF6060;
`

const Retour =styled.p`
  color: #FF6060;
`


export default function ErrorPage() {
   return (
    <PageError>
      <Error>
        404
      </Error>

      <Message>
        Oups! La page que vous demander n'exciste pas
      </Message>
      <NavLink to="/">
      <Retour>
          Retouner sur la page d'accueil
        </Retour>
      </NavLink>
        


    </PageError>
  );
}