// CSS
import styles from "./styles/process.module.css"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"

const Process = () => {
  const data = [
    [
      "Order Placement",
      "You'll pick a suitable service and book promotion package, and fill our form to provide your requirements.",
    ],
    [
      "Expert Consultation",
      "One of our marketing experts will talk to you in detail about your marketing & promotion goals.",
    ],
    [
      "Plan Outlining",
      "We will devise a detailed book promotion startegy for you and start working on it after approval.",
    ],
    [
      "Boost Your Sales!",
      "As soon as we start following our marketing tactics, you'll see a rise in your book visibility & sales.",
    ],
  ]
  return (
    <section>
      <div className={styles.root}>
        <div className="mr-container">
          <div className="grid grid-cols-1">
            <div>
              <div className={styles.content}>
                <h2>How Our Book Promotion Process Works?</h2>
                <p>
                  At Ghost Book Writers, we have created a streamlined book
                  editing process that ensures to transform your rough draft
                  into a polished prose. Have a look!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.processCards}>
            <div className="grid grid-cols-12 gap-x-5">
              {data?.map(([title, desc], i) => (
                <div key={i} className="mr-lg:col-span-3 mr-md:col-span-6 col-span-12 mb-lg-0 mb-4">
                  <div className={styles.card}>
                    <span>0{++i}</span>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
