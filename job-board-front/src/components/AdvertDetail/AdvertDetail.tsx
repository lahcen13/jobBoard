import React, {useState, useEffect} from 'react';
import styles from './AdvertDetail.module.css';

import { Building, Envelope, Geo, Link45deg, Mailbox, People, Person } from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown';

const AdvertDetail = (props: {
  data: data
}) => {

  const [data, setData] = useState<object | null>(null)



//   useEffect(() => {
// if (!data) {
//   axios
// }
//   })

  const markdown = `
  # Super ritu angustum

  ## Unum nata
  
  Lorem markdownum pectora ferrum addidit vultumque et iamque, prolem florem
  *miratur thymo*: dominis. Babylonia et Sparte habuisse factaque fronti Paridis,
  pennis temptare aureus dicentem mentem, euntem est iamque genitor. Cruoris rure
  deum. Herbis relicto, reflectitur sociasque anteit ultima, caelum hos.
  
  Mirabile pariter domitamque novenis profectu est vires mutata miserrima quemque.
  *Aglauros* ibi exierat moriens, declive pomi Fames, viva **es**, et velit! Sub
  Venus tormento, gente tamen tergo, cui rebus et sibi non. Putes locum minatur
  aliquisque haec attollens refers non, quam ecce!
  
  > **Quo est inmaduit** victa, monstraverat rami ad pede paruerit undas iubet
  > praeteriit captus. Servat alta mortali iuvenem morti; verum aut non dimittit;
  > sui culpa tulit, diu gladii **videat** si Hyllus. Sunt Pentheus dumque necem?
  
  ## Quo umquam
  
  Hinnitibus occurrunt Andros, adorat amplexa dentibus censu. Certa loci ubi:
  dicta Proca anilibus. Sub moveri seque caelesti causa alioque hasta dedit,
  discedere quove, blanditiis terras postera.
  
  1. At pars publica
  2. Missus consanguineas tympana pendentia certe
  3. Illa iussis stirpe gelidumque duxit
  4. Nescioquam morte
  5. Nexis creatus
  `;

  return (
    <div className={styles.AdvertDetail}>
      <h3 className={styles.title}>{props.data.title}</h3>
      <div className={styles.detailHeader}>
        <div className={styles.row}>
          <span className={styles.labelIcon}>
            <Building size={"25px"} />
            <p>Google</p>
          </span>
          <span className={styles.labelIcon}>
            <People size={"25px"} />
            <p>658</p>
          </span>

        </div>
        <div className={styles.row}>
          <span className={styles.labelIcon + " " + styles.stretch}>
            <Geo size={"25px"} />
            <p>Marseille, 13003</p>
          </span>
        </div>
      </div>
      <p className={styles.paragraph}>
        <ReactMarkdown children={markdown} />
      </p>
      <div className={styles.detailFooter}>
      <span className={styles.labelIcon}>
            <Link45deg size={"25px"} />
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">Website</a>
          </span>
          <h5 className={styles.contactTitle}>Contact</h5>
            <div className={styles.contactSection}>
            <span className={styles.labelIcon}>
            <Envelope size={"25px"} />
            <p>Jean@gmail.com</p>
          </span>
          <span className={styles.labelIcon}>
            <Person size={"25px"} />
            <p>M. Ive Jean</p>
          </span>
            </div>
           <div className={styles.buttonContainer}>
           <input className={styles.button} type="button" value="Apply" />
           </div>
      </div>
    </div>
  )
};

interface data {
  title: string,
  description: string,
  companyID: number
}
export default AdvertDetail;
