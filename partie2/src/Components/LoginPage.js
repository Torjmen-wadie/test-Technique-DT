import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [usernameApi, setUsernameApi] = useState("");
  const [passwordApi, setPasswordApi] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Fonction pour récupérer le nom d'utilisateur et le mot de passe de l'API
  const handleLogin = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        setUsernameApi(user.login.username);
        setPasswordApi(user.login.password);
      })
      .catch((error) => console.log(error));
  };

  // Utilise useEffect pour appeler handleLogin une seule fois au chargement de la page
  useEffect(() => {
    handleLogin();
  }, []);
  // Fonction pour mettre à jour l'état du nom d'utilisateur
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Fonction pour mettre à jour l'état du mot de passe
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  // Fonction de connexion qui vérifie les informations d'identification de l'utilisateur
  const handleConnect = () => {
    if (username === "" || password === "" || usernameApi !== username || passwordApi !== password) {
      alert("Veuillez saisir un nom d'utilisateur et un mot de passe valide.");
    } else {
      
      navigate("/dashboard", { state: { username } });
    }
  };

  return (
    <div className="text-center" >
      <h1>Page de connexion</h1>
    <h5 className="mt-4"> Les identifiants à taper pour pouvoir connecter</h5>
      <p>Nom d'utilisateur : {usernameApi}</p>
      <p>Mot de passe : {passwordApi}</p>
    <div className="card p-3  " style={{maxWidth:"300px", margin:"auto"}}>
      <form>
        <label>
          Nom d'utilisateur :
          <input type="text" value={username} onChange={handleUsernameChange} className="form-control mt-1"/>
        </label>
        <br />
        <label>
          Mot de passe :
          <input type="password" value={password} onChange={handlePasswordChange} className="form-control mt-1"/>
        </label>
        <br />
        <button onClick={handleConnect} className="btn btn-outline-info mt-4">Se connecter</button>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;
