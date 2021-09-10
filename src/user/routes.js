// pages
import Home from "user/pages/Home.js";
import SoftwarePage from "user/pages/SoftwarePage";
import News from "user/pages/News.js";
import Greeting from "user/pages/introduction/Greeting";
import Structure from "user/pages/introduction/Structure";
import OurMission from "user/pages/introduction/OurMission";
import Timeline from "user/pages/introduction/Timeline";
import NewsList from "user/pages/news/NewsList";
import AllNewsList from "user/pages/news/AllNewsList";
import NewsDetails from "user/pages/news/NewsDetails";
import SOB from "user/pages/organization/SOB";
import SOBDetails from "user/pages/organization/SOBDetails";
import EBS from "user/pages/organization/EBS";
import EBSDetail from "user/pages/organization/EBSDetail";
import LLC from "user/pages/organization/LLC";
import Newspaper from "user/pages/news/Newspaper";
import Methodology from "user/pages/methodology/Methodology";
import MethodologyDetails from "user/pages/methodology/MethodologyDetails";
import Rules from "user/pages/legal/Rules";
import NewTeacher from "user/pages/program/NewTeacher";
import NewFuture from "user/pages/program/NewFuture";
import Teacher from "user/pages/program/Teacher";
import Program from "user/pages/program/Program";
import Standard from "user/pages/legal/Standard";
import Introduction from "user/pages/introduction/Introduction";

import AdviceListM from "user/pages/advice/AdviceListM";
import AdviceDetailsM from "user/pages/advice/AdviceDetailsM";
import AdviceListS from "user/pages/advice/AdviceListS";
import AdviceListT from "user/pages/advice/AdviceListT";
import AdviceListP from "user/pages/advice/AdviceListP";
// methodology

import Elementary from "user/pages/methodology/Elementary";
import LLCMe from "user/pages/methodology/LLC";
import SocialWorker from "user/pages/methodology/SocialWorker";
import SOBMe from "user/pages/methodology/SOB";

//technologyFunds
import TechEyesh from "user/pages/techFunds/TechEyesh";
import TechCreation from "user/pages/techFunds/TechCreation";
import TechOther from "user/pages/techFunds/TechOther";
import TechInteractive from "user/pages/techFunds/TechInteractive";
import TechQuality from "user/pages/techFunds/TechQuality";
import TechResearch from "user/pages/techFunds/TechResearch";
import TechSkill from "user/pages/techFunds/TechSkill";
import TechSuccess from "user/pages/techFunds/TechSuccess";
import TechUnit from "user/pages/techFunds/TechUnit";

import FinanceBranch from "user/pages/finance/FinanceBranch";
import FinanceBSG from "user/pages/finance/FinanceBSG";

import Activation from "user/pages/introduction/Activation";
import ActivationDetails from "user/pages/introduction/ActivationDetails";
var routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/software",
    component: SoftwarePage,
  },
  // {
  //   path: "/introduction",
  //   component: Introduction,
  // },

  // {
  //   path: "/planning-execution",
  //   component: Activation,
  // },
  // {
  //   path: "/planning-execution/:id",
  //   component: ActivationDetails,
  // },

  // {
  //   path: "/greeting",
  //   component: Greeting,
  // },
  // {
  //   path: "/structure",
  //   component: Structure,
  // },
  // {
  //   path: "/our-mission",
  //   component: OurMission,
  // },
  // {
  //   path: "/timeline",
  //   component: Timeline,
  // },

  // {
  //   path: "/news",
  //   component: AllNewsList,
  // },
  // {
  //   path: "/month-news",
  //   component: NewsList,
  // },

  // {
  //   path: "/advice/manager",
  //   component: AdviceListM,
  // },
  // {
  //   path: "/advice/manager/:id",
  //   component: AdviceDetailsM,
  // },

  // {
  //   path: "/advice/teacher",
  //   component: AdviceListT,
  // },
  // {
  //   path: "/advice/teacher/:id",
  //   component: AdviceDetailsM,
  // },

  // {
  //   path: "/advice/student",
  //   component: AdviceListS,
  // },
  // {
  //   path: "/advice/student/:id",
  //   component: AdviceDetailsM,
  // },

  // {
  //   path: "/advice/parent",
  //   component: AdviceListP,
  // },
  // {
  //   path: "/advice/parent/:id",
  //   component: AdviceDetailsM,
  // },
  // {
  //   path: "/advice/:id",
  //   component: AdviceDetailsM,
  // },
  // {
  //   path: "/news/:id",
  //   component: NewsDetails,
  // },
  // {
  //   path: "/month-news/:id",
  //   component: NewsDetails,
  // },
  // {
  //   path: "/newspaper",
  //   component: Newspaper,
  // },
  // // methodology

  // {
  //   path: "/methodology/elementary",
  //   component: Elementary,
  // },
  // {
  //   path: "/methodology/social-worker",
  //   component: SocialWorker,
  // },
  // {
  //   path: "/methodology/sob",
  //   component: SOBMe,
  // },
  // {
  //   path: "/methodology/llc",
  //   component: LLCMe,
  // },

  // //technologyFunds
  // {
  //   path: "/technology-funds/creation",
  //   component: TechCreation,
  // },
  // {
  //   path: "/technology-funds/eyesh",
  //   component: TechEyesh,
  // },
  // {
  //   path: "/technology-funds/interactive",
  //   component: TechInteractive,
  // },
  // {
  //   path: "/technology-funds/other",
  //   component: TechOther,
  // },
  // {
  //   path: "/technology-funds/Quality",
  //   component: TechQuality,
  // },
  // {
  //   path: "/technology-funds/research",
  //   component: TechResearch,
  // },
  // {
  //   path: "/technology-funds/skill",
  //   component: TechSkill,
  // },
  // {
  //   path: "/technology-funds/success",
  //   component: TechSuccess,
  // },
  // {
  //   path: "/technology-funds/unit",
  //   component: TechUnit,
  // },
  // //customer
  // {
  //   path: "/ebs",
  //   component: EBS,
  // },
  // {
  //   path: "/ebs/:id",
  //   component: EBSDetail,
  // },

  // {
  //   path: "/sob",
  //   component: SOB,
  // },
  // {
  //   path: "/sob/:id",
  //   component: SOBDetails,
  // },
  // {
  //   path: "/lifelong-learning-center",
  //   component: LLC,
  // },
  // {
  //   path: "/methodology",
  //   component: Methodology,
  // },
  // {
  //   path: "/methodology/:id",
  //   component: MethodologyDetails,
  // },
  // {
  //   path: "/rules",
  //   component: Rules,
  // },
  // {
  //   path: "/program/shine-bagsh",
  //   component: NewTeacher,
  // },
  // {
  //   path: "/program/shine-ireedui",
  //   component: NewFuture,
  // },
  // {
  //   path: "/program/chadvarlag-bagsh",
  //   component: Teacher,
  // },
  // {
  //   path: "/program",
  //   component: Program,
  // },
  // {
  //   path: "/standard",
  //   component: Standard,
  // },
  // {
  //   path: "/branch-finance",
  //   component: FinanceBranch,
  // },
  // {
  //   path: "/bsg-finance",
  //   component: FinanceBSG,
  // },
];

export default routes;
