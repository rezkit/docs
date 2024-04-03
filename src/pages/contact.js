import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from "clsx";
import styles from "@site/src/pages/index.module.css";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src='https://js-eu1.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @TS-ignore
      if (window.hbspt) {
        // @TS-ignore
        window.hbspt.forms.create({
          region: 'eu1',
          portalId: '139578808',
          formId: '72d66714-b448-431a-b6e0-b5dcfd563acc',
          target: '#hubspotForm'
        })
      }
    });
  }, []);
  return (
    <Layout title="Contact Us" description="Contact us today">
      <div
        className={clsx('hero hero--primary')}
        style={{margin: '-20px 0 50px', display: 'flex', justifyContent: 'center'}}
      >
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 ">
            <h2>Let us know what you’re looking for and we’ll be in touch to help.</h2>
            <h3 className="lead">
              <a href="tel:01252821534">
                +44 (0)1252 821534
              </a>
            </h3>
            <div className="mb-5">
              <p style={{margin: 0}}>Office 10</p>
              <p style={{margin: 0}}>Chieftain House</p>
              <p style={{margin: 0}}>Challenger Pl</p>
              <p style={{margin: 0}}>Bordon</p>
              <p style={{margin: 0}}>GU35 0FP</p>
            </div>
          </div>
          <div className="col">
            <div>
              <div id="hubspotForm"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
