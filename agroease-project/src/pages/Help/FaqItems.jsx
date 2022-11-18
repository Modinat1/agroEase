import React from 'react';
import Faq from "react-faq-component";
// import "./FaqItems.css"
import "./FaqItems.css"


const data = {
  
  rows: [
    {
      id: 1,
      title: "1. How much produce can be purchased on the platform?",
      content: "We accept and publish diverse categories of the specified product from sellers and farmers alike hence, you can purchase as much quantity as you need. "

    },
    {
      id: 2,
      title: "2. How long does it take before my order arrive?",
      content: "Delivery time depends on location. Depending on your order location delivery may take two or three days before arrival."

    },
    {
      id: 3,
      title: "3. Who owns agroease",
      content: "Agroease is and agro tech software built and managed  by a set of young developers."

    },
    {
      id: 4,
      title: "4. Is agroease reliable?",
      content: "We are Africa's foremost agro e-commerce platform, catering for the needs of people in Nigeria and beyond since 2022,  so yes we are reliable."

    },
    {
      id: 5,
      title: "5. How can I sell on agroease?",
      content: "Agroease was built with users in mind, the sellers registration process has been made seamless. As long as you meet the policy requirement, you are good to go."

    },
    {
      id: 6,
      title: "6. What is your refund policy?",
       content: `If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no titles asked.`,
    },
    {
      id: 7,
      title: "7. How long does it take to get my order?",
       content: `Most customers can expect to receive their food and supplies within 1 to 3 days. Orders that require prescription approval or personalization may take longer to ship.`,
    },
    {
      id: 8,
      title: "8. Do you offer technical support?",
       content: `Yes`,
    },
    {
      id: 9,
      title: "9. How much is shipping?",
       content: `Orders over $49 ship free! All other orders ship for a flat rate of $4.95.`,
    },
    {
      id: 10,
      title: "10. How do I contact support?",
      content: `We offer support over email, and the best way to contact us is through the in-app help menu.`,
    },
  ]
}


const config = {
  animate: true,
  openOnload: 0,
  expandIcon: "+",
  collapseIcon: "-",
};

const styles = {
  bgColor: '#339236',
  // titleTextColor: 'black',
  titleTextSize: "3rem ",
  rowTitleColor: 'black',
  rowContentColor: 'white',
  rowTitleTextSize: '1.4rem',
  rowTitlePaddingLeft: '20px',
  rowTitlePaddingRight: '20px',
  rowContentBgColor: '#339236',
  rowContentTextSize: "1.2rem",
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '20px',
  rowContentPaddingRight: '20px',
  arrowColor: "#097C0D",
  transitionDuration: "1s",
  timingFunc: "ease"
}
export const FaqItems = () => {
  return (
    <div>
      <Faq
        data={data}
        styles={styles}
        config={config}
      />
    </div>
  )
}
