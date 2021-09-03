import React from "react";
import { withRouter } from "react-router";
import server from "config/server.js";
// default components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import ourRulesConfig from "config/objectConfigs/ourRulesConfig";

import FileUpload from "admin/components/Methodologys/FileUpload.js";

import BaseTextField from "../FormControls/BaseTextField";
import BaseSelect from "../FormControls/BaseSelect";

import helper from "admin/helper/index";

//Just copy and add this withRouterAndRef HOC
const withRouterAndRef = (WrappedComponent) => {
  class InnerComponentWithRef extends React.Component {
    render() {
      const { forwardRef, ...rest } = this.props;
      return <WrappedComponent {...rest} ref={forwardRef} />;
    }
  }
  const ComponentWithRouter = withRouter(InnerComponentWithRef, {
    withRef: true,
  });
  return React.forwardRef((props, ref) => {
    return <ComponentWithRouter {...props} forwardRef={ref} />;
  });
};

class MethodologysForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EditObject: {},
      Alert: null,
      isLoading: false,
    };
    this.server = server;
    this.Config = ourRulesConfig;
    this.ModifyObject = {
      methodology_type: null,
      main_file: [],
      original_name: null,
      title: null,
      subtitle: null,
      created_at: null,
    };
    this.id = null;
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    if (id) {
      this.GetData(id);
    }
  }

  SetModifyObject = (Data) => {
    Object.keys(this.ModifyObject).forEach((field) => {
      this.ModifyObject[field] = Data[field] ? Data[field] : null;
    });
  };

  GetData = async (id) => {
    this.id = id;
    this.setState({
      isLoading: true,
    });
    this.setState({ EditObject: {} });
    if (this.id) {
      var Response = await this.server.CallService({
        Method: "GET",
        Url: "methodologys/" + id,
      });

      if (
        Response &&
        Response.data &&
        Response.data.Data &&
        Response.data.Success
      ) {
        this.setState({ EditObject: Object.assign({}, Response.data.Data) });
        this.SetModifyObject(Object.assign({}, Response.data.Data));
      }
      this.setState({
        isLoading: false,
      });
    }
  };

  ChangeValue = (Field, Value) => {
    this.ModifyObject[Field] = Value;
    process.env.NODE_ENV === "development" &&
      console.log({
        ModifyObject: this.ModifyObject,
      });
  };

  Save = async (callback) => {
    var timeOut;
    clearTimeout(timeOut);
    var formData = new FormData();

    if (
      Array.isArray(this.ModifyObject["main_file"]) &&
      this.ModifyObject["main_file"].length > 0 &&
      typeof this.ModifyObject["main_file"] !== "string"
    ) {
      formData.append(
        "main_file",
        this.ModifyObject["main_file"][0].File,
        this.ModifyObject["main_file"][0].FileInfo.Name
      );
      formData.append(
        "main_file_info",
        JSON.stringify(this.ModifyObject["main_file"][0].FileInfo)
      );
    }

    // Text data attributes
    formData.append(
      "Data",
      JSON.stringify({
        title: this.ModifyObject["title"],
        subtitle: this.ModifyObject["subtitle"],
        methodology_type: this.ModifyObject["methodology_type"],
      })
    );

    if (this.id) {
      formData.append("_method", "PUT");
      var Response = await this.server.CallService({
        Url: "methodologys/" + this.id,
        Data: formData,
      });
    } else {
      var Response = await this.server.CallService({
        Url: "methodologys",
        Data: formData,
      });
    }

    var Alert = helper.Helper.ShowAlert(
      Response.data.Success,
      Response.data.Message,
      () => {
        this.setState({ Alert: null });
      }
    );
    this.setState({ Alert });

    timeOut = setTimeout(() => {
      this.setState({ Alert: null });
    }, 3000);

    callback(
      Response
        ? Response.data
        : { Success: Response.data.Success, Message: Response.data.Message }
    );
  };

  render() {
    var { Alert, EditObject } = this.state;

    console.log({ EditObject: this.state.EditObject });

    return (
      <GridContainer>
        {Alert}
        <GridItem xs={12} sm={12} md={12}>
          <FileUpload
            ChangeValue={(value) => {
              this.ChangeValue("main_file", value);
            }}
            GenName={EditObject["main_file"] ? EditObject["main_file"] : null}
            Name={
              EditObject["original_name"] ? EditObject["original_name"] : null
            }
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <BaseSelect
            Label="Мэдээний төрөл"
            ChangeValue={(value) => {
              this.ChangeValue("methodology_type", value);
            }}
            Value={
              EditObject["methodology_type"]
                ? EditObject["methodology_type"]
                : null
            }
            Data={[
              "Математик, мэдээлэл зүй",
              "Физик",
              "Хими, биологи",
              "Газар зүй",
              "Түүх, нийгмийн ухаан",
              "Монгол хэл, уран зохиол",
              "Монгол бичиг",
              "Гадаад хэл",
              "Дуу хөгжим",
              "Биеийн тамир",
              "Эрүүл мэнд",
              "Дүрслэх урлаг",
              "Дизайн тенологи, зураг зүй",
            ]}
          />
          <BaseTextField
            Label="Гарчиг"
            ChangeValue={(value) => {
              this.ChangeValue("title", value);
            }}
            Value={EditObject["title"] ? EditObject["title"] : null}
          />
          <BaseTextField
            Label="Дэд гарчиг"
            ChangeValue={(value) => {
              this.ChangeValue("subtitle", value);
            }}
            Value={EditObject["subtitle"] ? EditObject["subtitle"] : null}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withRouterAndRef(MethodologysForm);
