import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function SpanRank (props){
    return(
        <span className={css(styles.SpanRank)}>
            {props.primaryContent}
        </span>
    )
}

const styles = StyleSheet.create({
    SpanRank: {
        margin: '1.7vw',
        // border: 'solid 1px #000'
    }
})

export default SpanRank;