export default {
  container: {
    color: "#666",
    position: "relative",
    fontFamily: '"Open Sans", sans-serif'
  },
  hidden: {
    visibility: "hidden"
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
    color: "#044cb3"
  },
  body: {
    padding: "0 1.5rem"
  }
};
