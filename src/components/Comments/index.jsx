import {useState, useEffect} from 'react';
import {Container, Button} from '../../pages/styled';

function Comments() {

  const createComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;

    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({comment})
    });
  }

    return(
        <div style={styles.container}>
            <textarea   
                placeholder="O que acha(ou) desse filme ?"
                style={styles.textarea}
            />

            <Button
                style={styles.button}
                onClick={createComment}
                type="submit"

            >
              Comentar
            </Button>
        </div>
    )
}

const styles = {
container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 1000,
      fontFamily: "Arial, Helvetica, sans-serif",
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 1000,
      padding: 10,
    }
  
  };


export default Comments;