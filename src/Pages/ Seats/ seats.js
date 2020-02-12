import React, {useEffect} from "react";
import { db } from '../../config';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import { StyleSheet, css } from 'aphrodite';

const Seats = () => {

    useEffect(() => {
        db.collection('Voo')
        .get()
        .then((querySnapshot) => {
            const doc = querySnapshot.docs.map((doc) => ({
                id: doc.id, data: doc.data()
            }));
            console.log(doc);
        });
    }, []);

    return(
        <main className="seats">
            <Header 
                title = "Escolha de assento"
            />

           <p className={css(styles.p)}>Assentos!</p>

           <Footer
                primarycontent = "Escolha de assento"
            />
        </main>
    )
}

const styles = StyleSheet.create({
    p: {
        display: 'flex',
        alignItems: 'center',
        height: '81vh'
    },
})

export default Seats;