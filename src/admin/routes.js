// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import BusinessIcon from "@material-ui/icons/Business";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
// pages
import Dashboard from "admin/pages/Dashboard.js";
import News from "admin/pages/News.js";
import NewsFormPage from "admin/pages/NewsFormPage.js";
import OurFuture from "admin/pages/OurFuture.js";
import OurFutureFormPage from "admin/pages/OurFutureFormPage";

//customer
import Customer from "admin/pages/Customer";
import CustomerFormPage from "admin/pages/CustomerFormPage";
import CustomerSob from "admin/pages/CustomerSob";
import CustomerFormPageSob from "admin/pages/CustomerFormPageSob";

//advice

import AdviceManager from "admin/pages/Advice/AdviceManager";
import AdviceFormPageManager from "admin/pages/Advice/AdviceFormPageManager";

import AdviceStudent from "admin/pages/Advice/AdviceStudent";
import AdviceFormPageStudent from "admin/pages/Advice/AdviceFormPageStudent";

import AdviceTeacher from "admin/pages/Advice/AdviceTeacher";
import AdviceFormPageTeacher from "admin/pages/Advice/AdviceFormPageTeacher";

import AdviceParent from "admin/pages/Advice/AdviceParent";
import AdviceFormPageParent from "admin/pages/Advice/AdviceFormPageParent";

// rules
import RulesR from "admin/pages/OurRules/RulesR";
import RulesFormPageR from "admin/pages/OurRules/RulesFormPageR";

import RulesN from "admin/pages/OurRules/RulesN";
import RulesFormPageN from "admin/pages/OurRules/RulesFormPageN";
//finance

import FinanceBranch from "admin/pages/Finance/FinanceBranch";
import FinanceBSG from "admin/pages/Finance/FinanceBSG";

import FinanceFormPageBranch from "admin/pages/Finance/FinanceFormPageBranch";
import FinanceFormPageBSG from "admin/pages/Finance/FinanceFormPageBSG";
// technology

import TechEyesh from "admin/pages/TechnologyFunds/TechEyesh";
import TechFormPageEyesh from "admin/pages/TechnologyFunds/TechFormPageEyesh";
import TechCreation from "admin/pages/TechnologyFunds/TechCreation";
import TechFormPageCreation from "admin/pages/TechnologyFunds/TechFormPageCreation";
import TechFormPageInteractive from "admin/pages/TechnologyFunds/TechFormPageInteractive";
import TechFormPageOther from "admin/pages/TechnologyFunds/TechFormPageOther";
import TechFormPageQuality from "admin/pages/TechnologyFunds/TechFormPageQuality";
import TechFormPageResearch from "admin/pages/TechnologyFunds/TechFormPageResearch";
import TechFormPageSkill from "admin/pages/TechnologyFunds/TechFormPageSkill";
import TechFormPageSuccess from "admin/pages/TechnologyFunds/TechFormPageSuccess";
import TechFormPageUnit from "admin/pages/TechnologyFunds/TechFormPageUnit";
import TechInteractive from "admin/pages/TechnologyFunds/TechInteractive";
import TechOther from "admin/pages/TechnologyFunds/TechOther";
import TechQuality from "admin/pages/TechnologyFunds/TechQuality";
import TechResearch from "admin/pages/TechnologyFunds/TechResearch";
import TechSkill from "admin/pages/TechnologyFunds/TechSkill";
import TechSuccess from "admin/pages/TechnologyFunds/TechSuccess";
import TechUnit from "admin/pages/TechnologyFunds/TechUnit";

// methodologys
import MethodologyFormPageSob from "admin/pages/Methodologys/MethodologyFormPageSob";
import MethodologyFormPageB from "admin/pages/Methodologys/MethodologyFormPageB";
import MethodologyFormPageLLC from "admin/pages/Methodologys/MethodologyFormPageLLC";
import MethodologyFormPageMiddle from "admin/pages/Methodologys/MethodologyFormPageMiddle";
import MethodologyFormPageSW from "admin/pages/Methodologys/MethodologyFormPageSW";

import MethodologyLLC from "admin/pages/Methodologys/MethodologyLLC";
import MethodologySob from "admin/pages/Methodologys/MethodologySob";
import MethodologyMiddle from "admin/pages/Methodologys/MethodologyMiddle";
import MethodologySW from "admin/pages/Methodologys/MethodologySW";
import MethodologyB from "admin/pages/Methodologys/MethodologyB";

import Activation from "admin/pages/Activation/Activation";
import ActivationFormPage from "admin/pages/Activation/ActivationFormPage";
var routes = [
  {
    path: "/dashboard",
    name: "????????",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: "/news",
    name: "??????????",
    icon: AssignmentIcon,
    component: News,
  },
  {
    path: "/news/create",
    component: NewsFormPage,
    redirect: true,
  },
  {
    path: "/news/edit/:id",
    component: NewsFormPage,
    redirect: true,
  },

  {
    path: "/new-future",
    name: "?????????? ??????????????",
    icon: AssignmentIcon,
    component: OurFuture,
  },
  {
    path: "/new-future/edit/:id",
    component: OurFutureFormPage,
    redirect: true,
  },

  {
    path: "/new-future/create",
    component: OurFutureFormPage,
    redirect: true,
  },

  // ???????????? ??????????????????????
  {
    collapse: true,
    name: "???????????? ??????????????????????",
    icon: BusinessIcon,
    state: "customer",
    views: [
      {
        path: "/customer/sob",
        name: "????????????????????  ?????????? ??????????????????",

        component: CustomerSob,
      },

      {
        path: "/customer/sob/create",
        component: CustomerFormPageSob,
        redirect: true,
      },
      {
        path: "/customer/sob/edit/:id",
        component: CustomerFormPageSob,
        redirect: true,
      },
      {
        path: "/customer/ebs",
        name: "?????????????? ?????????????????????? ????????????????",

        component: Customer,
      },
      {
        path: "/customer/ebs/create",
        component: CustomerFormPage,
        redirect: true,
      },
      {
        path: "/customer/ebs/edit/:id",
        component: CustomerFormPage,
        redirect: true,
      },
      // {
      //   path: "/AdviceManager",
      //   name: "?????????? ?????????????? ?????????????????????? ??????",
      //
      //   component: AdviceManager,
      // },
    ],
  },

  // ????????????????
  {
    collapse: true,

    name: "????????????????",
    icon: AssignmentIcon,
    state: "AdviceManager",
    views: [
      {
        path: "/advice/manager",
        name: "??????????????????????",

        component: AdviceManager,
      },
      {
        path: "/advice/manager/create",
        component: AdviceFormPageManager,
        redirect: true,
      },
      {
        path: "/advice/manager/edit/:id",
        component: AdviceFormPageManager,
        redirect: true,
      },

      //???????? ??????
      {
        path: "/advice/teacher",
        name: "???????? ??????",

        component: AdviceTeacher,
      },
      {
        path: "/advice/teacher/create",
        component: AdviceFormPageTeacher,
        redirect: true,
      },
      {
        path: "/advice/teacher/edit/:id",
        component: AdviceFormPageTeacher,
        redirect: true,
      },

      //????????????????
      {
        path: "/advice/student",
        name: "????????????????",

        component: AdviceStudent,
      },
      {
        path: "/advice/student/create",
        component: AdviceFormPageStudent,
        redirect: true,
      },
      {
        path: "/advice/student/edit/:id",
        component: AdviceFormPageStudent,
        redirect: true,
      },
      // ???????? ????, ???????? ????????
      {
        path: "/advice/parent",
        name: "???????? ????, ???????? ????????",

        component: AdviceParent,
      },
      {
        path: "/advice/parent/create",
        component: AdviceFormPageParent,
        redirect: true,
      },
      {
        path: "/advice/parent/edit/:id",
        component: AdviceFormPageParent,
        redirect: true,
      },
    ],
  },

  //???????? ??????
  {
    collapse: true,
    name: "???????? ??????",
    icon: AssignmentIcon,
    state: "met1",

    views: [
      {
        path: "/methodologys/sob",
        name: "???????????????????? ?????????? ??????????????????",
        component: MethodologySob,
      },
      {
        path: "/methodologys/sob/create",
        component: MethodologyFormPageSob,
        redirect: true,
      },
      {
        path: "/methodologys/sob/edit/:id",
        component: MethodologyFormPageSob,
        redirect: true,
      },

      {
        path: "/methodologys/elementary",
        name: "???????? ??????????????????",
        component: MethodologyB,
      },

      {
        path: "/methodologys/elementary/create",
        component: MethodologyFormPageB,
        redirect: true,
      },
      {
        path: "/methodologys/elementary/edit/:id",
        component: MethodologyFormPageB,
        redirect: true,
      },
      {
        path: "/methodologys/middle",
        name: "????????, ?????????? ???????????? ??????????????????",
        component: MethodologyMiddle,
      },

      {
        path: "/methodologys/middle/create",
        component: MethodologyFormPageMiddle,
        redirect: true,
      },
      {
        path: "/methodologys/middle/edit/:id",
        component: MethodologyFormPageMiddle,
        redirect: true,
      },
      {
        path: "/methodologys/llc",
        name: "?????????? ?????????????? ??????????????????",
        component: MethodologyLLC,
      },

      {
        path: "/methodologys/llc/create",
        component: MethodologyFormPageLLC,
        redirect: true,
      },
      {
        path: "/methodologys/llc/edit/:id",
        component: MethodologyFormPageLLC,
        redirect: true,
      },
      {
        path: "/methodologys/social-worker",
        name: "???????????????????? ???????????????? ??????????????, ???????????? ????????",
        component: MethodologySW,
      },
      {
        path: "/methodologys/social-worker/create",
        component: MethodologyFormPageSW,
        redirect: true,
      },
      {
        path: "/methodologys/social-worker/edit/:id",
        component: MethodologyFormPageSW,
        redirect: true,
      },
    ],
  },

  //?????????????????????? ??????
  {
    collapse: true,
    name: "?????????????????????? ??????",
    icon: AssignmentIcon,
    state: "teh",
    views: [
      {
        name: "?????????? ??????????????????",
        icon: ArrowRightRoundedIcon,
        state: "eyesh",
        collapse: true,
        views: [
          {
            path: "/technology-funds/eyesh",
            name: "?????????????????? ?????????????? ??????????????",

            component: TechEyesh,
          },
          {
            path: "/technology-funds/eyesh/create",
            component: TechFormPageEyesh,
            redirect: true,
          },
          {
            path: "/technology-funds/eyesh/edit/:id",
            component: TechFormPageEyesh,
            redirect: true,
          },
          {
            path: "/technology-funds/other",
            name: "?????????? ????????",
            component: TechOther,
          },
          {
            path: "/technology-funds/other/create",
            component: TechFormPageOther,
            redirect: true,
          },
          {
            path: "/technology-funds/other/edit/:id",
            component: TechFormPageOther,
            redirect: true,
          },
        ],
      },

      {
        path: "/technology-funds/unit",
        name: "???????? ?????????????????? ????????????????",
        component: TechUnit,
      },
      {
        path: "/technology-funds/unit/create",
        component: TechFormPageUnit,
        redirect: true,
      },
      {
        path: "/technology-funds/unit/edit/:id",
        component: TechFormPageUnit,
        redirect: true,
      },

      {
        path: "/technology-funds/creation",
        name: "?????????????????? ??????",
        component: TechCreation,
      },

      {
        path: "/technology-funds/creation/create",
        component: TechFormPageCreation,
        redirect: true,
      },
      {
        path: "/technology-funds/creation/edit/:id",
        component: TechFormPageCreation,
        redirect: true,
      },
      {
        path: "/technology-funds/interactive",
        name: "????????????????????  ?????????????????? ??????",
        component: TechInteractive,
      },

      {
        path: "/technology-funds/interactive/create",
        component: TechFormPageInteractive,
        redirect: true,
      },
      {
        path: "/technology-funds/interactive/edit/:id",
        component: TechFormPageInteractive,
        redirect: true,
      },
      {
        path: "/technology-funds/skill",
        name: "???? ???????????????? ????????????????",
        component: TechSkill,
      },
      {
        path: "/technology-funds/skill/create",
        component: TechFormPageSkill,
        redirect: true,
      },
      {
        path: "/technology-funds/skill/edit/:id",
        component: TechFormPageSkill,
        redirect: true,
      },
      {
        path: "/technology-funds/research",
        name: "?????????????????? ????????????????",
        component: TechResearch,
      },

      {
        path: "/technology-funds/research/create",
        component: TechFormPageResearch,
        redirect: true,
      },
      {
        path: "/technology-funds/research/edit/:id",
        component: TechFormPageResearch,
        redirect: true,
      },
      {
        path: "/technology-funds/success",
        name: "???????? ???????????????? ????????????????",
        component: TechSuccess,
      },
      {
        path: "/technology-funds/success/create",
        component: TechFormPageSuccess,
        redirect: true,
      },
      {
        path: "/technology-funds/success/edit/:id",
        component: TechFormPageSuccess,
        redirect: true,
      },
      {
        path: "/technology-funds/quality",
        name: "?????????????? ??????????????",
        component: TechQuality,
      },
      {
        path: "/technology-funds/quality/create",
        component: TechFormPageQuality,
        redirect: true,
      },
      {
        path: "/technology-funds/quality/edit/:id",
        component: TechFormPageQuality,
        redirect: true,
      },
    ],
  },

  // ?????????? ?????? ??????
  {
    collapse: true,

    name: "?????????? ?????? ??????",
    icon: AssignmentIcon,
    state: "rules",
    views: [
      {
        path: "/rules/rules",
        name: "?????????? ??????????",
        component: RulesR,
      },
      {
        path: "/rules/rules/create",
        component: RulesFormPageR,
        redirect: true,
      },
      {
        path: "/rules/rules/edit/:id",
        component: RulesFormPageR,
        redirect: true,
      },
      {
        path: "/rules/standart",
        name: "???????? ????????????????",
        component: RulesN,
      },
      {
        path: "/rules/standart/create",
        component: RulesFormPageN,
        redirect: true,
      },
      {
        path: "/rules/standart/edit/:id",
        component: RulesFormPageN,
        redirect: true,
      },
    ],
  },

  // ?????????? ????????????
  {
    collapse: true,

    name: "?????????? ????????????",
    icon: AssignmentIcon,
    state: "finance",
    views: [
      {
        path: "/finance/branch",
        name: "???????????????? ??????????, ????????????",
        component: FinanceBranch,
      },
      {
        path: "/finance/branch/create",
        component: FinanceFormPageBranch,
        redirect: true,
      },
      {
        path: "/finance/branch/edit/:id",
        component: FinanceFormPageBranch,
        redirect: true,
      },
      {
        path: "/finance/bsg",
        name: "??????????????????, ???????? ?????????????? ???????????? ?????????? ????????????",
        component: FinanceBSG,
      },
      {
        path: "/finance/bsg/create",
        component: FinanceFormPageBSG,
        redirect: true,
      },
      {
        path: "/finance/bsg/edit/:id",
        component: FinanceFormPageBSG,
        redirect: true,
      },
    ],
  },
  //
  {
    path: "/activation",
    name: "?????? ?????????????????????? ?????????????????? ??????????????????",
    icon: DashboardIcon,
    component: Activation,
  },
  {
    path: "/activation/create",
    component: ActivationFormPage,
    redirect: true,
  },
  {
    path: "/activation/edit/:id",
    component: ActivationFormPage,
    redirect: true,
  },
];

export default routes;
