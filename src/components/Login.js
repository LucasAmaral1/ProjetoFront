import React, { useState } from 'react';
import logo from '../images/newLogo.png'; 
import { Link, useNavigate } from 'react-router-dom'; 

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário
    // Chama a função onLogin passando os dados do formulário
    onLogin(email, password); // Passa o email e senha para a função onLogin
    navigate('/Tarefas'); // Navega para a página de Tarefas após o login bem-sucedido
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo-image" />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button> 
        <button>
          <Link to="/Cadastro">Cadastrar</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;


