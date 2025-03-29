import React, { useState } from 'react';
import './AuditorLogin.css';

interface LoginFormData {
  email: string;
  password: string;
  auditorId: string;
}

const AuditorLogin: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    auditorId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Auditor login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="auditor-login-container">
      <div className="auditor-login-box">
        <div className="auditor-login-header">
          <h1>Auditor Portal</h1>
          <p>Third-party auditor login</p>
        </div>
        
        <form className="auditor-login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="auditorId">Auditor ID</label>
            <input
              type="text"
              id="auditorId"
              name="auditorId"
              value={formData.auditorId}
              onChange={handleChange}
              placeholder="Enter your auditor ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                name="remember"
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#forgot" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Login as Auditor
          </button>
        </form>

        <div className="auditor-login-footer">
          <p>Need help? <a href="#contact">Contact support</a></p>
        </div>
      </div>
    </div>
  );
};

export default AuditorLogin; 