import React, { useEffect, useState } from 'react';
import styles from './StepWrapper.module.scss';
import inputWatcher from './inputWatcher'
import axios from 'axios';
import Notification from '../../../Notification/Notification';
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

  const [selected, setSelected] = useState<select>({ id: null, name: "Select your activity sector" })
  const [selectShown, setShown] = useState<boolean>(true)
  const [step, setStep] = useState(1)
  const [sectors, setSectors] = useState<Array<Object> | null>(null)
  const [noti, setNoti] = useState<notif>({
    bg: "success",
    header: "Oops",
    body: "Please, fill all the fields",
    isShown: false,
    time: 4000
  })

  useEffect(() => {
    if (!sectors) {

      axios.get('http://localhost:5000/sectors').then(res => setSectors(res.data))
    }
  })

  const handleSelect = (d: any) => {
    console.log(d)
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
          <input disabled={errors ? true : false} className={styles.confirmButton} onClick={() => setStep(3)} type="button" value="Continue" />
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
          <input onChange={(e: any) => handleChange(e)} value={inputData.cPassword} type='password' name='cPassword' placeholder="Password" />
          <input onChange={(e: any) => handleChange(e)} value={inputData.cConfirmPassword} type='password' name='cConfirmPassword' placeholder="confirm password" />
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
      axios.post('http://localhost:5000/register/company', {
        name: inputData.cName,
        sector: selected.id,
        password: inputData.cPassword,
        email: inputData.cEmail,
        address: inputData.cAddress,
        postal_code: inputData.cPostal,
        number_employes: inputData.cNumOfEmployees,
        phone: inputData.cPhone,
        website: inputData.cWebsite,
        city: inputData.cCity,
        siret: inputData.cSiret,
        contactName: inputData.cContactName
      }).then(res => {
        window.location.href = '/company/login'
      }).catch(err => {
        if (err.response.data === 'email_exist') {
          setNoti({
            bg: "danger",
            header: "Error",
            body: "The email you specified is already used",
            isShown: true,
            time: 4000
          })

        }

        if (err.response.data === 'siret_exist') {
          setNoti({
            bg: "danger",
            header: "Error",
            body: "The siret you specified is already used",
            isShown: true,
            time: 4000
          })

        }
      })
    }
    return <>
      <Notification changeState={() => setNoti({ ...noti, isShown: false })} {...noti} />
      <div className={styles.selectorWrapper}>
        <div onClick={() => setShown(true)} className={styles.selected}>
          <p>{selected.name}</p>

        </div>
        {selectShown && <div className={styles.selector}>
          {sectors && sectors.map((el: any) => <span onClick={() => handleSelect(el)} className={styles.item}>{el.name}</span>)}


        </div>}
      </div>


      <input onClick={() => submit()} disabled={selected.id ? false : true} className={styles.confirmFinal} type='button' value="Let's go !" />
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
      {handleStep()}
    </div>
  </div>
};

interface select {
  id: number | null,
  name: string
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

interface notif { bg: string, header: string, body: string, isShown: boolean, time: number }
export default StepWrapper;
