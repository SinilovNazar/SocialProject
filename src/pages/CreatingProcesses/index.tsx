import React, { useState } from 'react';
import './styles.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Steps from '../../components/steps';

const CreatingProcesses = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const newSetStep = (newStep: number) => {
    setStep(newStep)
  }

  const handlePrevStep = () => {
    if (step > 1) {
      newSetStep(step - 1)
    }
  }

  const handleNextStep = () => {
    if (step < 4) {
      newSetStep(step + 1)
    }
  }

  const handleBackHome = () => {
    navigate('/Analitycs')
  }

  return (
    <div>
      <Steps step={step} />

      <div className='separator' />
      <div className='buttons'>
        <div>
          <button onClick={handleBackHome} className='back-button'>Вернуться к списку процессов</button>

          {step > 1 && <button onClick={handlePrevStep}>Предыдущий шаг</button>}
        </div>
        <button onClick={handleNextStep}>Следующий шаг</button>
      </div>
    </div>
  );
};

export default CreatingProcesses;