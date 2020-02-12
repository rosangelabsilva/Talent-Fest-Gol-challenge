import React, {useEffect, useState} from "react";
import { StyleSheet, css } from 'aphrodite';
import exit from './img/logout.png';
import firebase from 'firebase';
import Header from '../../Components/header';
import { db } from '../../config';

const Home = () => {
    const [userName, setUsername] = useState('');
    const user = firebase.auth().currentUser;
    useEffect( () => {
        firebase
        .auth()
        .onAuthStateChanged( (user) => {
          if(user){
            db.collection('clients')
            .doc(user.uid)
            .get()
            .then( user => {
                setUsername(user.data().nome);
            });
          }
        })
      }, [])  

    return(
        <>
            <Header 
                title = {"Bem vinda(o)" + userName}
            />
                <img  src={exit } />
            <main className="home">
                Home
            </main>
        </>
    )
};

const styles = StyleSheet.create({
    headerHome: {
        backgroundColor: 'red',
    }
})

export default Home;