import React, { useState } from 'react';

export default function Login() {
    
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    
    const onChangePseudo = (e) => {
        const login = e.target.value;
        setPseudo(login);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleSubmit = async event => {
      event.preventDefault()

      const res = await fetch(
        'http://127.0.0.1:5000/api/login',
        {
          body: JSON.stringify({
            pseudo: event.target.name.value,
            password: event.target.name.value,
            client_id: "de84e63d0432"
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
      .then(function(responce){
          console.log(responce.data)
      })
      .catch(function(error){
          console.log(error)
      })
    }
    
  return (
    <div>
      
<form onSubmit={handleSubmit}>
    
      <label>
                Email ou Pseudo:
                <input
                name="login"
                type="text"
                value={pseudo}
                onChange={onChangePseudo}
                required
                />

                Password:
                <input
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                required
                />

                </label>
                <button>Se connecter</button>
</form>
    </div>
  )
  
}
