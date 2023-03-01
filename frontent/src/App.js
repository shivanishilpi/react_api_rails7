import logo from './logo.svg';
import './App.css';
import { createContext, useState} from 'react';
import React from 'react';
import FileForm from './components/FileForm';
import LatestImage from './components/LatestImage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainContent from 'components/MainContent';
import ContactCard from 'components/ContactCard';
import Joke from 'components/Joke';


export const AppContext = createContext(null);

function App() {
  const [latestBook, setLatestBook] = useState(AppContext);

  const nums = [1,2,3,4,5,6,7,8];
  const product = nums.map( function(num) {
     return num * 2
  })
 
  console.log(product)
  
  return (
    <AppContext.Provider value={{latestBook, setLatestBook}}>
      <div className="contacts">
        {/* <Header/>
        <MainContent/>
        <Footer/>
        <FileForm />
        <LatestImage /> */}
        {/* <ContactCard
          name="Mr. Rangila"
          imgUrl="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          phone="7835733093"
          email="rangila@gmail.com"
        /> */}
        {/* <ContactCard
          contact = {{name: "Mr. Rangila", imgUrl: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp",  phone: "7835733093", email: "rangila@gmail.com" }}
        />

        <ContactCard
          contact = {{name: "mr. Smith", imgUrl: "https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp", phone: "3374749", email: "smith@gmail.com"}}
        /> */}

         <Joke 
         punchline="Lorem Ipsum has been the industry's standard dummy" 
         />
         <hr/>
         <Joke 
         question="simply dummy text of the printing and typesettin"
         punchline="Lorem Ipsum has been the industry's standard dummy" 
         />

      </div>
    </AppContext.Provider>  
  );
}

export default App;
