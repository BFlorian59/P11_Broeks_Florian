import { NavLink } from "react-router-dom";
import '../../styles/Error.css'

export default function ErrorPage() {
   return (
    <div className="div-Error">
      <h1 className="h1-Error">
        404
      </h1>

      <h2 className="h2-Error">
        Oups! La page que vous demander n'exciste pas
      </h2>

      <NavLink to="/">
        <p className="p-Error">
          Retouner sur la page d'accueil
        </p>
      </NavLink>
    </div>
  );
}