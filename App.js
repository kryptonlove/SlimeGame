import React from "react";

const App = () => {
  const connectWallet = () => {
    alert("Кошелёк подключён!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Подключить кошелёк</h1>
      <button style={styles.button} onClick={connectWallet}>
        Подключить
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
