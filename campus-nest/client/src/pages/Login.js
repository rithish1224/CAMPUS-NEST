import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a1733',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: '#181c20',
        borderRadius: '16px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1 style={{
          color: '#19d4dd',
          fontWeight: 700,
          fontSize: '2.2rem',
          marginBottom: '8px',
        }}>Campus Nest</h1>
        <div style={{
          color: '#888',
          fontSize: '1.1rem',
          marginBottom: '32px',
          textAlign: 'center',
        }}>Hostel Management System</div>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: '22px' }}>
            <label htmlFor="username" style={{ color: '#fff', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Student ID</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                background: '#23272b',
                color: '#fff',
                fontSize: '1rem',
                marginTop: '4px',
                marginBottom: '2px',
                boxSizing: 'border-box',
              }}
              defaultValue="STU001"
            />
          </div>
          <div style={{ marginBottom: '32px' }}>
            <label htmlFor="password" style={{ color: '#fff', fontWeight: 500, marginBottom: '6px', display: 'block' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                background: '#23272b',
                color: '#fff',
                fontSize: '1rem',
                marginTop: '4px',
                marginBottom: '2px',
                boxSizing: 'border-box',
              }}
              defaultValue="********"
            />
          </div>
          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            background: '#19d4dd',
            color: '#222',
            fontWeight: 600,
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginTop: '8px',
            transition: 'background 0.2s',
          }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
