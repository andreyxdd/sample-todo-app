import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import Button from '../../components/Button';
import './styles.css';

function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <header className="header">
        <h4>
          Welcome!
        </h4>
        <p>
          You are looking at the
          {' '}
          <b>Recursive TODO List App</b>
          {' '}
          — a take-home SPA React project.
          <br />
          This simple app was built on top of create-react-app typescript template.
        </p>
        <div className="btn-container">
          <Button onClick={() => navigate('core')}>
            Continue to the app
          </Button>
          <a href="https://github.com/andreyxdd/sample-todo-app" target="_blank" rel="noopener noreferrer">
            <Button>
              <span>See source code</span>
              <FaGithub
                size="1.5em"
                style={{
                  verticalAlign: 'middle',
                  marginLeft: '0.5em',
                }}
              />
            </Button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default WelcomePage;
