import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import data from './data';




function App() {
  return (
    <>
      <Section 
      variant="blue"
      title={data[0].title}
      description={data[0].title}
      />
      <Section 
      variant="beige"
      title={data[1].title}
      description={data[1].title}
      />
      <Section 
      variant="blue"
      title={data[2].title}
      description={data[2].title}
      />
      <Section 
      variant="white"
      title={data[3].title}
      description={data[3].title}
      />
      <Section 
      variant="black"
      title={data[4].title}
      description={data[4].title}
      />

       <GlobalStyles />

    </>

  );
}

export default App;
