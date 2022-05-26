import { useEffect } from 'react';
import Startfirebase from './utils/firebase';
import { ref, onValue } from 'firebase/database'
import { useState } from 'react';
import Card from './Component/card';


function App() {

  const [Odata, setOdata] = useState([]);
  useEffect(() => {
    const db = Startfirebase();
    const dbRef = ref(db, 'data');
    onValue(dbRef, (snapshot) => {
      snapshot.forEach(element => {
        let data = element.val();
        setOdata(data)

      });
    })

  }, [])




  return (

    <Card Odata={Odata} />


  )


}
export default App;
