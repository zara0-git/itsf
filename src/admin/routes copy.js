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

var routes = [
  {
    path: "/dashboard",
    name: "Нүүр",
    icon: DashboardIcon,
    component: Dashboard,
  },
  {
    path: "/news",
    name: "Мэдээ",
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
    path: "/newFuture",
    name: "Манай ирээдүй",
    icon: AssignmentIcon,
    component: OurFuture,
  },
  {
    path: "/newFuture/edit/:id",
    component: OurFutureFormPage,
    redirect: true,
  },

  {
    path: "/newFuture/create",
    component: OurFutureFormPage,
    redirect: true,
  },

  // Харьяа байгууллага
  {
    collapse: true,

    name: "Харьяа байгууллага",
    icon: BusinessIcon,
    state: "customer",
    views: [
      {
        path: "/customer/sob",
        name: "Сургуулийн  өмнөх боловсрол",
        icon: ArrowRightRoundedIcon,
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
        name: "Ерөнхий боловсролын сургууль",
        icon: ArrowRightRoundedIcon,
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
      //   name: "Насан туршийн боловсролын төв",
      //   icon: ArrowRightRoundedIcon,
      //   component: AdviceManager,
      // },
    ],
  },

  // Зөвлөгөө
  {
    collapse: true,

    name: "Зөвлөгөө",
    icon: AssignmentIcon,
    state: "AdviceManager",
    views: [
      {
        path: "/advice/manager",
        name: "Удирдлагууд",
        icon: ArrowRightRoundedIcon,
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

      //Багш нар
      {
        path: "/advice/teacher",
        name: "Багш нар",
        icon: ArrowRightRoundedIcon,
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

      //Сурагчид
      {
        path: "/advice/student",
        name: "Сурагчид",
        icon: ArrowRightRoundedIcon,
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
      // Эцэг эх, олон нийт
      {
        path: "/advice/parent",
        name: "Эцэг эх, олон нийт",
        icon: ArrowRightRoundedIcon,
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

  //Арга зүй
  {
    collapse: true,
    name: "Арга зүй",
    icon: AssignmentIcon,
    state: "met1",

    views: [
      {
        path: "/AdviceManager",
        name: "Сургуулийн өмнөх боловсрол",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Бага боловсрол",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        collapse: true,
        path: "/AdviceManager",
        name: "Дунд, ахлах ангийн боловсрол",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
        views: [
          {
            path: "/AdviceManager",
            name: "Сургуулийн өмнөх боловсрол",
            icon: ArrowRightRoundedIcon,
            component: AdviceManager,
          },
          {
            path: "/AdviceManager",
            name: "Бага боловсрол",
            icon: ArrowRightRoundedIcon,
            component: AdviceManager,
          },
        ],
      },
      {
        path: "/AdviceManager",
        name: "Насан туршийн боловсрол",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Сургуулийн нийгмийн ажилтан, дотуур байр",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
    ],
  },

  //Технологийн сан
  {
    collapse: true,
    name: "Технологийн сан",
    icon: AssignmentIcon,
    state: "teh",
    views: [
      {
        name: "Жишиг даалгавар",
        icon: ArrowRightRoundedIcon,
        state: "eysh",
        collapse: true,
        views: [
          {
            path: "/AdviceManager",
            name: "Элсэлтийн ерөнхий шалгалт",
            icon: ArrowRightRoundedIcon,
            component: AdviceManager,
          },
          {
            path: "/AdviceManager",
            name: "Жишиг даалгавар,Бусад анги",
            icon: ArrowRightRoundedIcon,
            component: AdviceManager,
          },
        ],
      },

      {
        path: "/AdviceManager",
        name: "Нэгж хичээлийн хөтөлбөр",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Бүтээлийн сан",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Интерактив  хичээлийн сан",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Ур чадварын уралдаан",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Хичээлийн судалгаа",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Ахиц амжилтын судалгаа",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Чанарын үнэлгээ",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
    ],
  },

  // Хууль эрх зүй
  {
    collapse: true,

    name: "Хууль эрх зүй",
    icon: AssignmentIcon,
    state: "rules",
    views: [
      {
        path: "/AdviceManager",
        name: "Дүрэм журам",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
      {
        path: "/AdviceManager",
        name: "Норм стандарт",
        icon: ArrowRightRoundedIcon,
        component: AdviceManager,
      },
    ],
  },
  {
    path: "/dashboard",
    name: "Үйл ажиллагааны төлөвлөлт гүйцэтгэл",
    icon: DashboardIcon,
    component: Dashboard,
  },
];

export default routes;
