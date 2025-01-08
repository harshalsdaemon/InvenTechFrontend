import endpointRoute from "../aEndpointRoute";

const fullRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomeRoute: `/${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}`
    },
    bProtectedRoute: {
      aAuthenticationRoute: {
        aSignInRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.aSignInRoute}`,
        bSignUpRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.bSignUpRoute}`,
        cForgotPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.cForgotPasswordRoute}`,
        dResetPasswordRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.dResetPasswordRoute}`,
      },
      bAuthorizationRoute: {
        aTopbarRoute: {
          aProfileRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute}`,
          bProfileUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute}`,
          cProfilePasswordUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute}`,
          dProfileDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute}`,
        },
        bSidebarRoute: {
          aBaseSetupRoute: {
            aBaseManyToOneRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.eDeleteRoute}`,
            },
            bBaseManyToManyRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.eDeleteRoute}`,
            },
            cBaseRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.eDeleteRoute}`,
            },
            dBaseOneToOneRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.eDeleteRoute}`,
            },
            eBaseOneToManyRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.eDeleteRoute}`,
            },
          },

          bUserAdministrationRoute: {
            aUserRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.eDeleteRoute}`,
            },
            bRoleRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.eDeleteRoute}`,
            },
            cMenuRoute: {
              aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.aListRoute}`,
              bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.bCreateRoute}`,
              cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.cRetrieveRoute}`,
              dUpdateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.dUpdateRoute}`,
              eDeleteRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.eDeleteRoute}`,
            },
          },

          cInvenTechRoute: {
            aOverallRoute: {
              aProductCatalogueRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.cRetrieveRoute}`,
              },
              bWarehouseManagementRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.cRetrieveRoute}`,
              },
              cStoreManagementRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.cRetrieveRoute}`,
              },
              dActivityLogRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.dActivityLogRoute.aListRoute}`,
              },
              eLocationRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.cRetrieveRoute}`,
              },
              fDepartmentRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.cRetrieveRoute}`,
              },
              gOpenPurchaseOrderRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.cRetrieveRoute}`,
              },
              hOrganizationRoleRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.hOrganizationRoleRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.hOrganizationRoleRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.hOrganizationRoleRoute.cRetrieveRoute}`,
              },
              iEmployeeRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.iEmployeeRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.iEmployeeRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.iEmployeeRoute.cRetrieveRoute}`,
              },
              jClosedPurchaseOrderRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.jClosedPurchaseOrderRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.jClosedPurchaseOrderRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.jClosedPurchaseOrderRoute.cRetrieveRoute}`,
              },
              kInventoryGeneralRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.kInventoryGeneralRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.kInventoryGeneralRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.kInventoryGeneralRoute.cRetrieveRoute}`,
              },
              lInventoryInwardRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.lInventoryInwardRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.lInventoryInwardRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.lInventoryInwardRoute.cRetrieveRoute}`,
              },
              mInventoryOutwardRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.mInventoryOutwardRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.mInventoryOutwardRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.mInventoryOutwardRoute.cRetrieveRoute}`,
              },
              nCustomerOrderMagentoRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.nCustomerOrderMagentoRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.nCustomerOrderMagentoRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.nCustomerOrderMagentoRoute.cRetrieveRoute}`,
              },
              oCustomerOrderShopifyRoute: {
                aListRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.oCustomerOrderShopifyRoute.aListRoute}`,
                bCreateRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.oCustomerOrderShopifyRoute.bCreateRoute}`,
                cRetrieveRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.oCustomerOrderShopifyRoute.cRetrieveRoute}`,
              },
            },

            zDashboardRoute: {
              aDashboardRoute: `/${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.zDashboardRoute.aDashboardRoute}`
            }
          },

        }
      }
    }
  }
}

export default fullRoute;
