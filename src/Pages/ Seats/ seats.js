import React, { useState, useEffect } from "react";
import { db } from '../../config';
import firebase from 'firebase';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import SpanRank from '../../Components/rank';
import SeatComponent from '../../Components/seats';
import { StyleSheet, css } from 'aphrodite';
import { useHistory } from "react-router-dom";

const Seats = () => {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [seats, setSeats] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState('');
    const [passengers, setPassengers] = useState([]);

    const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

    useEffect(() => {

        db.collection('flights')
            .onSnapshot(docs => {
                docs.forEach(doc => {
                    const docRef = db.collection('flights').doc(doc.id);
                    docRef
                        .collection('seats')
                        .onSnapshot(collection => {
                            const docsId = collection.docs.map(doc => {
                                return doc.data()
                            })
                            setSeats(docsId)
                        })

                });
            });

        firebase
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    db.collection('clients')
                        .doc(user.uid)
                        .get()
                        .then(user => {
                            setUser(user.data().nome);
                            if (user.data().nome === "Alessandra") {
                                db.collection('flights')
                                    .onSnapshot(querySnapshot => {
                                        querySnapshot.forEach(doc => {
                                            setPassengers(doc.data().history1)
                                        })
                                    })
                            } else if (user.data().nome === "João M") {
                                db.collection('flights')
                                    .onSnapshot(querySnapshot => {
                                        querySnapshot.forEach(doc => {
                                            setPassengers(doc.data().history2)
                                        })
                                    })
                            } else {
                                db.collection('flights')
                                    .onSnapshot(querySnapshot => {
                                        querySnapshot.forEach(doc => {
                                            setPassengers(doc.data().history3)
                                        })
                                    })
                            }
                        });
                }
            });

    }, []);

    const goToPayment = () => {
        selectedSeat === ""
            ? alert("Selecione um assento")
            : history.push('/payment')
    }

    const selecteASeat = (seat, status) => {

        if (status === "Disponível") {
            db.collection('flights')
                .onSnapshot(docs => {
                    docs.forEach(doc => {
                        const docRef = db.collection('flights').doc(doc.id);
                        docRef
                            .collection('seats')
                            .doc(seat)
                            .update({ status: "Selecionado" })
                    });
                });
            setSelectedSeat(...selectedSeat, seat)
        } else if (status === "Selecionado") {
            db.collection('flights')
                .onSnapshot(docs => {
                    docs.forEach(doc => {
                        const docRef = db.collection('flights').doc(doc.id);
                        docRef
                            .collection('seats')
                            .doc(seat)
                            .update({ status: "Disponível" })
                    });
                });
        } else {
            return null
        }
    }

    return (
        <main className="seats">
            <Header
                title="Escolha de assento"
            />
            <aside className={css(styles.passengerContainer)}>
                    {passengers.map(passenger => {
                    return <div>{passenger}</div>
                })}
                <div> Assento {selectedSeat}</div>
            </aside>
            <article className={css(styles.seatContainer)}>
                <section className={css(styles.seatCollumns, styles.columnContainer)}>
                    <div className={css(styles.columnLetter)}>
                        <span> A </span>
                        <span> B </span>
                        <span> C </span>
                    </div>
                    <div className={css(styles.ranks)}>
                    </div>
                    <div className={css(styles.columnLetter)}>
                        <span> D </span>
                        <span> E </span>
                        <span> F </span>
                    </div>
                </section>
                <section className={css(styles.seatCollumns)}>
                    <div className={css(styles.seatRanks)}>
                        {seats.map(seat => {
                            const column = seat.seat.substr(2);

                            if (column === "A" || column === "B" || column === "C") {
                                return (
                                    <SeatComponent
                                        status={seat.status}
                                        className={css(styles.seat)}
                                        id={seat.seat}
                                        key={seat.seat}
                                        handleClick={() => setSelectedSeat(seat.seat)}
                                    />)
                            }
                        })}
                    </div>
                    <div className={css(styles.ranks)}>
                        {
                            ranks.map(rank => {
                                return (
                                    <SpanRank
                                        className={css(styles.ranks)}
                                        primaryContent={rank}
                                        key={rank}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className={css(styles.seatRanks)}>
                        {seats.map(seat => {
                            const column = seat.seat.substr(2);
                            if (column === "D" || column === "E" || column === "F") {
                                return (
                                    <SeatComponent
                                        status={seat.status}
                                        className={css(styles.seat)}
                                        id={seat.seat}
                                        key={seat.seat}
                                        handleClick={() => selecteASeat(seat.seat, seat.status)}
                                    />)
                            }
                        })
                        }

                    </div>
                </section>
            </article>
            <aside className={css(styles.subtitle)}>
                <img
                    className={css(styles.subtitleImg)}
                    src="https://i.ibb.co/ZdzFhZW/New-Project-2.png"
                    alt="legenda de assentos"
                />
            </aside>

            <Footer
                primarycontent="PROSSEGUIR"
                handleClick={goToPayment}
            />
        </main>
    )
}

const styles = StyleSheet.create({
    passengerContainer: {
        height: '12vh'
    },

    seatContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '68vh'
    },

    seatCollumns: {
        display: 'flex',
        flexDirection: 'row',
        overflow: 'auto'
    },

    columnContainer: {
        height: '8vh'
    },

    columnLetter: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '43.5vw'
    },

    ranks: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '13vw',
        fontSize: '6.2vw'
    },

    seatRanks: {
        display: "flex",
        justifyContent: 'center',
        flexWrap: "wrap",
        alignItems: "center",
        width: '43.5vw'
    },

    seat: {
        width: '11vw'
    },

    subtitle: {
        height: '6vh'
    },

    subtitleImg: {
        width: '90vw',
        marginTop: '-3vh',
        marginLeft: '6vw'
    }
})

export default Seats;
