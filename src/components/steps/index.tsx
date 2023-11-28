import React, { useState } from 'react';
import './styles.scss';
import { title } from 'process';
const circles = [1, 2, 3, 4]
const titles = ["Объединение", "Очистка", "Взвешивание", "Сводная таблица"]

const Steps = () => {
  const [step, setStep] = useState(1);
  const handlePrevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
    }
  }

  const handleNextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1)
    }
  }

  const getStyle = (index: number) => {
    if (!index) {
      return {
        left: 0
      }
    } else if (index === titles.length - 1) {
      return {
        right: 0
      }
    }
  }

  const getIndicatorWidth = () => ({ width: `${((step - 1) / 3) * 100}%` });

  return (
    <div className="container">
      <div className="header">Шаги процесса</div>
      <div className="steps">
        {titles.map((title, index) =>
          <div key={title} className={step === index + 1 ? "circle active" : 'circle'}>
            {index < step && <div className="completed" />}

            <div style={getStyle(index)} className={index < step ? "text active-text" : 'text'}>{title}</div>

          </div>
        )}

        <div className="progress-bar">
          <span className="indicator" style={getIndicatorWidth()} />
        </div>

      </div>
      {/* <div className="buttons">
        <button onClick={handlePrevStep} className='button'>prev</button>
        <button onClick={handleNextStep} className='button'>next</button>
      </div> */}
    </div>
  );
};

export default Steps;
