import React from "react";
import TablePagination from "@material-ui/core/TablePagination";

class CustomPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: props.take ? props.take : 20,
    };
  }

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
    if (this.props.ChangePage) {
      this.props.ChangePage(newPage, this.state.rowsPerPage);
    }
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ page: 0, rowsPerPage: +parseInt(event.target.value, 10) });
    if (this.props.ChangePage) {
      this.props.ChangePage(0, parseInt(event.target.value, 10));
    }
  };

  render() {
    const { handleChangePage, handleChangeRowsPerPage } = this;
    const { page, rowsPerPage } = this.state;
    const { Total } = this.props;
    return (
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 50]}
        component="div"
        labelRowsPerPage="Нэг хуудсанд харагдах тоо: "
        count={Total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  }
}

export default CustomPagination;
