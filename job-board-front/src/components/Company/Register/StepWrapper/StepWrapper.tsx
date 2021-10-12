import React, { useEffect, useState } from 'react';
import styles from './StepWrapper.module.scss';
import inputWatcher from './inputWatcher'
const StepWrapper = () => {

  const [inputData, setData] = useState<company>({
    cName: "",
    cEmail: "",
    cPhone: 0,
    cSiret: "",
    cCity: "",
    cPostal: 0,
    cAddress: "",
    cWebsite: "",
    cNumOfEmployees: 0,
    cPassword: "",
    cConfirmPassword: "",
    cContactName: "",
  })

  const [selected, setSelected] = useState<select>({ id: null, value: "Select your activity sector" })
  const [selectShown, setShown] = useState<boolean>(true)
  const [step, setStep] = useState(1)
  const [sectors, setSectors] = useState(null)

  useEffect(() => { 

  })

  const handleSelect = (d: any) => {
    setShown(false)
    setSelected(d)
  }

  const handleChange = (e: any) => {
    setData({ ...inputData, [e.target.name]: e.target.value })
  }
  const first = () => {
    const errors = inputWatcher(inputData, 1)
    return <div className={styles.StepWrapper}>
      <div className={styles.inputsWrapper}>
        <div className={styles.inputs}>
          <input onChange={(e: any) => handleChange(e)} type='text' value={inputData.cName} name='cName' placeholder="Company name" />
          <input onChange={(e: any) => handleChange(e)} type='text' value={inputData.cSiret} name='cSiret' placeholder="Siret number" />
          <input onChange={(e: any) => handleChange(e)} type='email' value={inputData.cEmail} name='cEmail' placeholder="Email" />
          <input onChange={(e: any) => handleChange(e)} type='tel' value={inputData.cPhone === 0 ? "" : inputData.cPhone} name='cPhone' placeholder="Phone number" />
        </div>
        <div className={styles.buttonWrapper}>
          <input onClick={() => setStep(2)} disabled={errors ? true : false} className={styles.confirmButton} type="button" value="Continue" />
        </div>
      </div>

      {errors && <div className={styles.errorContainer}>
        {errors.map(el => <p>{el}</p>)}
      </div>}
    </div>
  }

  const second = () => {
    console.log(2)
    const errors = inputWatcher(inputData, 2)
    return <div className={styles.StepWrapper}>
      <div className={styles.inputsWrapper}>
        <div className={styles.inputs}>
          <input onChange={(e: any) => handleChange(e)} value={inputData.cCity} type='text' name='cCity' placeholder="City" />
          <input onChange={(e: any) => handleChange(e)} value={inputData.cPostal === 0 ? "" : inputData.cPostal} type='text' name='cPostal' placeholder="Postal code" />
          <input onChange={(e: any) => handleChange(e)} value={inputData.cAddress} type='text' name='cAddress' placeholder="Address" />
          <input onChange={(e: any) => handleChange(e)} value={inputData.cWebsite} type='text' name='cWebsite' placeholder="Website" />
        </div>
        <div className={styles.buttonWrapper}>
          <input disabled={errors ? true : false} className={styles.confirmButton} onClick={() => setStep(3)} type="button" value="Continue (again)" />
        </div>
      </div>

      {errors && <div className={styles.errorContainer}>
        {errors.map(el => <p>{el}</p>)}
      </div>}
    </div>
  }

  const third = () => {
    const errors = inputWatcher(inputData, 3)
    return <div className={styles.StepWrapper}>
      <div className={styles.inputsWrapper}>
        <div className={styles.inputs}>
          <input onChange={(e: any) => handleChange(e)} value={inputData.cNumOfEmployees === 0 ? "" : inputData.cNumOfEmployees} type='text' name='cNumOfEmployees' placeholder="Number of employees" />
          <input onChange={(e: any) => handleChange(e)} value={inputData.cContactName} type='text' name='cContactName' placeholder="Contact name" />
          <input onChange={(e: any) => handleChange(e)} value={inputData.cPassword} type='text' name='cPassword' placeholder="Password" />
          <input onChange={(e: any) => handleChange(e)} value={inputData.cConfirmPassword} type='text' name='cConfirmPassword' placeholder="confirm password" />
        </div>
        <div className={styles.buttonWrapper}>
          <input onClick={() => setStep(4)} disabled={errors ? true : false} className={styles.confirmButton} type="button" value="One last step !" />
        </div>
      </div>

      {errors && <div className={styles.errorContainer}>
        {errors.map(el => <p>{el}</p>)}
      </div>}
    </div>
  }

  const last = () => {


    const submit = () => {
      if (!selected.id) return
    }
    return <>

      <div className={styles.selectorWrapper}>
        <div onClick={() => setShown(true)} className={styles.selected}>
          <p>{selected.value}</p>

        </div>
        {selectShown && <div className={styles.selector}>
          <span onClick={() => handleSelect({ id: 1, value: "Wood cutting" })} className={styles.item}>Wood cutter</span>
          <span onClick={() => handleSelect({ id: 1, value: "High tech" })} className={styles.item}>High tech</span>
          <span onClick={() => handleSelect({ id: 1, value: "chilling" })} className={styles.item}>chilling</span>
          <span onClick={() => handleSelect({ id: 1, value: "cooking" })} className={styles.item}>cooking</span>
          <span onClick={() => handleSelect({ id: 1, value: "selling" })} className={styles.item}>Selling</span>

        </div>}
      </div>


      <input onClick={() => submit()} disabled={selected.id ? false: true} className={styles.confirmFinal} type='button' value="Let's go !" />
    </>
  }

  const handleStep = () => {

    if (step === 1) {
      return first()
    }

    if (step === 2) {
      return second()
    }

    if (step === 3) {
      return third()
    }

    if (step === 4) {
      return last()
    }
  }
  return <div className={styles.StepWrapper}>
    <div className={styles.Form}>
      {last()}
    </div>
  </div>
};

interface select {
  id: number | null,
  value: string
}
interface company {
  cName: string,
  cEmail: string,
  cPhone: number,
  cSiret: string,
  cCity: string,
  cPostal: number,
  cAddress: string,
  cWebsite: string,
  cNumOfEmployees: number,
  cPassword: string,
  cConfirmPassword: string,
  cContactName: string
}
export default StepWrapper;
