import React from "react";
import { withRouter } from "react-router";
import server from "config/server.js";
// default components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import activationConfig from "config/objectConfigs/activationConfig";

import OtherImagesUpload from "admin/components/Activation/OtherImagesUpload.js";
import BaseTextField from "../FormControls/BaseTextField";
import BaseRichText from "../FormControls/BaseRichText";
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

class ActivationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EditObject: {},
      Alert: null,
      isLoading: false,
    };
    this.server = server;
    this.Config = activationConfig;
    this.ModifyObject = {
      title: null,
      subtitle: null,
      content: null,
      other_images: [],
    };
    this.id = null;
  }

  componentDidMount() {
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
        Url: "activation/" + id,
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

    // Main image data set
    if (
      Array.isArray(this.ModifyObject["main_image"]) &&
      this.ModifyObject["main_image"].length > 0 &&
      typeof this.ModifyObject["main_image"] !== "string"
    ) {
      formData.append(
        "main_image",
        this.ModifyObject["main_image"][0].File,
        this.ModifyObject["main_image"][0].FileInfo.Name
      );
      formData.append(
        "main_image_info",
        JSON.stringify(this.ModifyObject["main_image"][0].FileInfo)
      );
    }

    const otherImages = this.ModifyObject["other_images"];
    console.log({ otherImages });
    if (otherImages && otherImages.length > 0) {
      for (var l = 0; l < otherImages.length; l++) {
        if (otherImages[l].File) {
          formData.append(
            "File" + l,
            otherImages[l].File,
            otherImages[l].FileInfo.Name
          );
        }
        formData.append(
          "File" + l + "Info",
          JSON.stringify(otherImages[l].FileInfo)
        );
      }
    }

    // Text data attributes
    formData.append(
      "Data",
      JSON.stringify({
        title: this.ModifyObject["title"],
        subtitle: this.ModifyObject["subtitle"],
        content: this.ModifyObject["content"],
      })
    );

    if (this.id) {
      formData.append("_method", "PUT");
      var Response = await this.server.CallService({
        Url: "activation/" + this.id,
        Data: formData,
      });
    } else {
      var Response = await this.server.CallService({
        Url: "activation",
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
          <BaseTextField
            Label="????????????"
            ChangeValue={(value) => {
              this.ChangeValue("title", value);
            }}
            Value={EditObject["title"] ? EditObject["title"] : null}
          />
          <BaseTextField
            Label="?????? ????????????"
            ChangeValue={(value) => {
              this.ChangeValue("subtitle", value);
            }}
            Value={EditObject["subtitle"] ? EditObject["subtitle"] : null}
          />
          <BaseRichText
            Label="??????????????"
            ChangeValue={(value) => {
              this.ChangeValue("content", value);
            }}
            Value={EditObject["content"] ? EditObject["content"] : null}
          />
          <OtherImagesUpload
            ChangeValue={(value) => {
              this.ChangeValue("other_images", value);
            }}
            ActivationId={EditObject["id"]}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default withRouterAndRef(ActivationForm);
