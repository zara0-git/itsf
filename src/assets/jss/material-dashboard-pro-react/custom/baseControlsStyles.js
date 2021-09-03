import {
  primaryColor,
  grayColor,
  dangerColor,
  blackColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const baseControlsStyles = {
  formControl: {
    marginTop: "8px",
    minWidth: "160px",
    "& > div": {
      padding: "0 4px !important",
    },
  },
  labelRoot: {
    marginLeft: "-14px",
  },
  // CheckBox Styles
  checkRoot: {
    padding: "8px",
    margin: "-8px 4px",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  checkboxAndRadioHorizontal: {
    position: "relative",
    display: "block",
    "&:first-child": {
      marginTop: "10px",
    },
    "&:not(:first-child)": {
      marginTop: "-14px",
    },
    marginTop: "0",
    marginBottom: "0",
  },
  checked: {
    color: primaryColor[0] + "!important",
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px",
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "9px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "3px",
  },

  //   Radio Styles
  radioRoot: {
    padding: "16px",
    "&:hover": {
      backgroundColor: "unset",
    },
  },
  radio: {
    color: primaryColor[0] + "!important",
  },
  radioChecked: {
    width: "16px",
    height: "16px",
    border: "1px solid " + primaryColor[0],
    borderRadius: "50%",
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "7px",
    border: "1px solid rgba(" + hexToRgb(blackColor) + ", .54)",
    borderRadius: "50%",
  },
  divInline: {
    display: "inline-block",
  },
  divRow: {
    display: "block",
    width: "100%",
  },

  // Input Styles
  input: {
    color: grayColor[14],
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: 1.5,
      opacity: "1",
    },
    "&::placeholder": {
      color: grayColor[3],
    },
  },
  notchedOutline: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "#ccc",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ccc",
        borderWidth: "1px",
      },
    },
  },

  inputUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#D2D2D2 !important",
      borderWidth: "1px !important",
    },
    "&:after": {
      borderColor: "#9c27b0",
    },
    "& + p": {
      fontWeight: "300",
    },
  },

  //   File Upload

  link: {
    fontSize: "16px",
    fontWeight: "400",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  thumbnail: {
    position: "relative",
    overflow: "inherit",
    float: "left",
    display: "inline-block",
    margin: "0 10px 10px 0",
    width: "200px",
    height: "200px",
    "&:hover .download": {
      display: "block",
    },
  },
  //   imagePanel: {
  //     position: "relative",
  //     overflow: "hidden",
  //     width: "150px",
  //     height: "150px",
  //   },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  download: {
    display: "none",
    position: "absolute",
    cursor: "pointer",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "999",
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "0 4px 4px",
    fontWeight: "400",
    "&:hover": {
      display: "block",
    },
  },

  // Image Single
  thumbnailImage: {
    clear: "both",
    display: "block",
    borderRadius: "0",
    marginTop: "15px",
    overflow: "inherit",
    width: "200px",
    height: "200px",
    background: "transparent",
    boxShadow: "none !important",
    "&:hover .upload": {
      display: "block",
    },
  },
  upload: {
    display: "none",
    position: "absolute",
    cursor: "pointer",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "999",
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: "0 8px 14px",
    fontWeight: "400",
    "&:hover": {
      display: "block",
    },
  },
  close: {
    position: "absolute",
    zIndex: "999",
    top: "-2px",
    right: "10px",
  },
  closeRound: {
    top: "22%",
    right: "12%",
    transform: "scale(1) translate(50%, -50%)",
    transformOrigin: "100% 0%",
  },
  closeIconButton: {
    backgroundColor: "#5c5c5c",
    boxShadow: "0 1px 4px 0 rgba(255, 255, 255, 0.34)",
    color: "#FFF",
    padding: "8px",
    "&:hover": {
      backgroundColor: "#919191",
    },
  },
  imagePanel: {
    position: "relative",
    overflow: "hidden",
    width: "200px",
    height: "200px",
    objectFit: "cover",
  },
  imageSingle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  //   LookUpGrid Styles
  popperRoot: {
    backgroundColor: "#FFF",
    padding: "8px",
    zIndex: "9999",
    maxHeight: "200px",
    maxWidth: "500px",
    borderRadius: "6px",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  },
  scroll: {
    maxHeight: "178px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "3px",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
      height: "6px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(136, 136, 136, 0.1)",
      "&:hover": {
        backgroundColor: "rgba(173, 173, 173, 0.4)",
      },
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(136, 136, 136, 0.6)",
      borderRadius: "6px",
      width: "6px",
      "&:hover": {
        backgroundColor: "rgba(136, 136, 136, 0.9)",
      },
    },
  },
  //   Label Styles
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "#75736c",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex",
    transition: "0.3s ease all",
    letterSpacing: "unset",
  },
  labelHorizontal: {
    color: "#75736c",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "14px",
    lineHeight: 1,
    fontWeight: "400",
    paddingTop: "5px",
    marginRight: "0",
    textAlign: "left",
  },
  labelError: {
    color: dangerColor[0],
  },
  inlineChecks: {
    marginTop: "8px",
  },
};

export default baseControlsStyles;
