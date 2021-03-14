import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const Index: React.FC<PageProps<DataProps>> = ({data, path}) => {
  console.log(data);
  console.log(path);
  return (
    <Layout>
      <h1>This is a big ass title</h1>
      <h3>This is a normal size subtitle</h3>
      <h6>This is a tiny subtitle, follwed by a few paragraphs</h6>
      <p>Spicy jalapeno bacon ipsum dolor amet strip steak mollit tempor, buffalo pork loin quis proident deserunt nisi
        excepteur. Non ut t-bone eiusmod spare ribs leberkas alcatra pancetta ball tip beef ribs quis. Alcatra irure qui
        kevin pork belly tongue filet mignon beef ribs turducken sint ipsum pork chop. Shankle pastrami ham burgdoggen
        duis in tenderloin ut. Lorem short loin laboris, cillum do in consectetur sint cupidatat est flank. Capicola
        boudin ut ham hock burgdoggen reprehenderit rump filet mignon short loin pork chop kevin. Tenderloin ground
        round short loin, veniam turkey fugiat reprehenderit et consectetur.</p>
      <p>Occaecat ham hock in et cupidatat. Spare ribs doner meatball beef laboris enim eiusmod commodo tenderloin
        aliquip. Jerky turkey nostrud pork belly picanha irure pork loin non hamburger ullamco tri-tip qui. T-bone
        cupidatat biltong, velit short ribs reprehenderit hamburger chislic laborum.</p>
      <p>Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!</p>
      {/*<Link to="/page-2/">*/}
      {/*  <button className={'bg-blue-morning hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}>Go to page 2*/}
      {/*  </button>*/}
      {/*</Link>*/}
    </Layout>
  )
};

export default Index;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
