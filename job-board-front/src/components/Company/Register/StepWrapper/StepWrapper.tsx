import React from 'react';
import styles from './StepWrapper.module.scss';

const StepWrapper = () => {


  const first = () => {
    return <div>
      <div>
        <div className={styles.inputs}>
          <input type='text' name='' placeholder="Google Inc." />
          <input type='text' name='' placeholder="04651010541528" />
          <input type='text' name='' placeholder="my.company@gmail.com" />
          <input type='text' name='' placeholder="0645740510" />
        </div>
        <div className={styles.buttonWrapper}>
          <input className={styles.confirmButton} type="button" value="Continue" />
        </div>
      </div>

      <div className={styles.errorContainer}>

      </div>
    </div>
  }

  return <div className={styles.StepWrapper}>
    <div className={styles.Form}>
      {first()}
    </div>
  </div>
};

export default StepWrapper;
