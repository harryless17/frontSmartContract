import React from 'react';
import { NavLink } from 'react-router-dom';

const Formulaire = () => {
  return (
   <div>
     <h1>Vous souhaitez vendre un bien ?</h1>
     <form>
      <label>
        Nom du bien :
        <input type="text" name="title" />
      </label>
      <label>
        Propriétaire :
        <input type="text" name="vendeur" />
      </label>
      <label>
        Surface :
        <input type="text" name="surface" />
      </label>
      <label>
        Url d'une image :
        <input type="text" name="url" />
      </label>
      <label>
        Prix :
        <input type="text" name="prix" />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
   </div>
  );
}

export default Formulaire;
