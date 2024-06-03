import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css'; // Certifique-se de que o arquivo CSS existe

const Cadastro = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados de cadastro para a API
    console.log('Cadastro:', { username, email, password });
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          id="username"
          label="Nome de Usuário"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          id="password"
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <p>Já tem uma conta? <Link to="/">Login</Link></p>
    </div>
  );
};

const InputField = ({ id, label, type, value, onChange, required }) => (
  <div className="input-field">
    <label htmlFor={id}>{label}:</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default Cadastro;
