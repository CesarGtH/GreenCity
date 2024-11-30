const routes = [
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "reporte",
        component: () => import("pages/ReportePage.vue"),
      },
      { path: "comentario", component: () => import("pages/CommentPage.vue") },
    ],
  },

  {
    path: "/CommentPage",
    component: () => import("pages/CommentPage.vue"),
  },
  {
    path: "/",
    component: () => import("src/components/auth/LoginForm.vue"),
  },
  {
    path: "/ComentarioForm",
    component: () => import("src/components/Reportes/ComentarioForm.vue"),
  },
  {
    path: "/VistaReportes",
    component: () => import("src/components/Reportes/VistaReportes.vue"),
  },

  {
    path: "/RegisterForm",
    component: () => import("src/components/auth/RegisterForm.vue"),
  },
  {
    path: "/ReporteForm",
    component: () => import("src/components/Reportes/ReporteForm.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
