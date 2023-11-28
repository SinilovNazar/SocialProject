import React from 'react';
import './styles.scss';
import { useMatch, useLocation, Link, useNavigate } from 'react-router-dom';

// export interface IBreadcrumbsLOcation {
//   id?: string;
//   path?: string;
//   title?: string;
//   url?: string;
// }

const Analytics = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const match = useMatch("/");
  const handleCreateProcess = () => {
    navigate('/Analitycs/CreatingProcesses', { state: { path: '/Analitycs' } })
  }
  return (
    <div>

      <button onClick={handleCreateProcess}>Создать процесс</button>
    </div>
  );
};

export default Analytics;

