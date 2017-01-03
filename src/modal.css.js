export default {
  container: {
    color: "#333",
    position: "relative",
    fontFamily: '"Open Sans", sans-serif',
    fontSize: "16px"
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(51, 51, 51, 0.8)",
    zIndex: "2"
  },
  modal: {
    width: "500px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "3",
    backgroundColor: "#fff",
    borderRadius: "4px"
  },
  header: {
    padding: "1.5rem 1.5rem",
    borderBottom: "1px solid #ccc",
    lineHeight: "1.5rem"
  },
  title: {
    fontSize: "1.25rem",
    lineHeight: "1.2",
    letterSpacing: "-0.05rem"
  },
  close: {
    "float": "right",
    color: "#999",
    cursor: "pointer",
    fontSize: "2.125rem",
    position: "relative",
    textDecoration: "none",
    transform: "rotate(45deg)"
  },
  closeHover: {
    color: "#333"
  },
  body: {
    padding: "2.5rem 1.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.4",
    letterSpacing: "-0.0125rem"
  },
  footer: {
    borderTop: "1px solid #ccc",
    padding: "1.5rem 1.5rem"
  }
};
