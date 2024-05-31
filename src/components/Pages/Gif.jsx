import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const App = () => {
  return (
    <div >
      
      <img src={`malware-attack.gif`} alt="Example GIF" style={{width:'500px',height:'500px',marginLeft:'160px', marginTop:'130px',borderRadius:'50px'}} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
   
    backgroundColor: '#f0f0f0', // Optional background color for contrast
  },
 
 
  gif: {
    width: '50%',
    height: '30%',
    margin: '1000px',
    padding: '20px',
  
    
  },
};

export default App;
