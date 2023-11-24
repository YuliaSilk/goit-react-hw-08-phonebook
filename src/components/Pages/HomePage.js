const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
     
      backgroundImage:`url('https://static.displate.com/1200x857/displate/2023-04-08/904827c689f4a12ebcee81867868f6c8_08a1aa477355156f0f6b2b37affa6aa0.jpg')`,
      // backgroundImage: `url('https://static.displate.com/857x1200/displate/2023-02-26/192931441896229c5d355dfaf481bece_63693a2beb0cc55dff4148104028ebc0.jpg')`
    },
    title: {
      fontWeight: 400,
      fontSize: 164,
      textAlign: 'center',
      color: '#fff',
      textShadow: '1px 1px 2px black',
    },
    text: {
      fontWeight: 400,
      fontSize: 48,
      textAlign: 'center',
      color: '#d9ed92',
      textShadow: '6px 6px 12px black',
    }
  };
  
  export default function Home() {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>
          Phonebook 
        </h1>
        <p style={styles.text}>Welcome to the magical world of friendship!</p>
      </div>
    );
  }