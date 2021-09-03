import React from "react";
// makeStyles
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/core components
import Button from "@material-ui/core/Button";

var styles = {
  button: {
    position: "fixed",
    top: "auto",
    left: "auto",
    right: 15,
    bottom: 15,
    padding: 0,
    width: "44px",
    minWidth: "44px",
    height: "44px",
    backgroundColor: "rgba(0, 140, 26, 0.6)",
    borderRadius: "8px",
    // transition: "all 1s linear",
    "&:hover": {
      backgroundColor: "rgba(0, 140, 26, 1)",
    },
    "& i": {
      color: "#FFFFFF",
      fontSize: "20px",
    },
  },
};
const useStyles = makeStyles(styles);

export default function ScrollToTopButton(props) {
  const classes = useStyles();
  const [IsVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const GetScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      className={classes.button}
      onClick={() => {
        GetScrollToTop();
      }}
      style={{ display: IsVisible ? "" : "none" }}
    >
      <i className="fa fa-chevron-up"></i>
    </Button>
  );
}
