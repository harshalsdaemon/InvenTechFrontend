const endpointRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {
      aHomeRoute: ""
    },
    bProtectedRoute: {
      aAuthenticatedRoute: {
        aSignInRoute: "sign-in",
        bSignUpRoute: "sign-up",
        cForgotPasswordRoute: "forgot-password",
        dResetPasswordRoute: "reset-password",
      },
      bAuthorizationRoute: {
        aTopbarRoute: {
          aProfileRetrieveRoute: "profile-retrieve",
          bProfileUpdateRoute: "profile-update",
          cProfilePasswordUpdateRoute: "profile-password-update",
          dProfileDeleteRoute: "profile-delete",
        },
        bSidebarRoute: {
          aBaseSetupRoute: {
            aBaseManyToOneRoute: {
              aListRoute: "base-many-to-one-list",
              bCreateRoute: "base-many-to-one-create",
              cRetrieveRoute: "base-many-to-one-retrieve",
              dUpdateRoute: "base-many-to-one-update",
              eDeleteRoute: "base-many-to-one-delete",
            },
            bBaseManyToManyRoute: {
              aListRoute: "base-many-to-many-list",
              bCreateRoute: "base-many-to-many-create",
              cRetrieveRoute: "base-many-to-many-retrieve",
              dUpdateRoute: "base-many-to-many-update",
              eDeleteRoute: "base-many-to-many-delete",
            },
            cBaseRoute: {
              aListRoute: "base-list",
              bCreateRoute: "base-create",
              cRetrieveRoute: "base-retrieve",
              dUpdateRoute: "base-update",
              eDeleteRoute: "base-delete",
            },
            dBaseOneToOneRoute: {
              aListRoute: "base-one-to-one-list",
              bCreateRoute: "base-one-to-one-create",
              cRetrieveRoute: "base-one-to-one-retrieve",
              dUpdateRoute: "base-one-to-one-update",
              eDeleteRoute: "base-one-to-one-delete",
            },
            eBaseOneToManyRoute: {
              aListRoute: "base-one-to-many-list",
              bCreateRoute: "base-one-to-many-create",
              cRetrieveRoute: "base-one-to-many-retrieve",
              dUpdateRoute: "base-one-to-many-update",
              eDeleteRoute: "base-one-to-many-delete",
            },
          },

          bUserAdministrationRoute: {
            aUserRoute: {
              aListRoute: "user-list",
              bCreateRoute: "user-create",
              cRetrieveRoute: "user-retrieve",
              dUpdateRoute: "user-update",
              eDeleteRoute: "user-delete",
            },
            bRoleRoute: {
              aListRoute: "role-list",
              bCreateRoute: "role-create",
              cRetrieveRoute: "role-retrieve",
              dUpdateRoute: "role-update",
              eDeleteRoute: "role-delete",
            },
            cMenuRoute: {
              aListRoute: "menu-list",
              bCreateRoute: "menu-create",
              cRetrieveRoute: "menu-retrieve",
              dUpdateRoute: "menu-update",
              eDeleteRoute: "menu-delete",
            },
          },

          cInvenTechRoute: {
            aOverallRoute: {
              aProductCatalogueRoute: {
                aListRoute: "product-catalogue-list",
                bCreateRoute: "product-catalogue-create",
                cRetrieveRoute: "product-catalogue-retrieve",
              },
              bWarehouseManagementRoute: {
                aListRoute: "warehouse-management-list",
                bCreateRoute: "warehouse-management-create",
                cRetrieveRoute: "warehouse-management-retrieve",
              },
              cStoreManagementRoute: {
                aListRoute: "store-management-list",
                bCreateRoute: "store-management-create",
                cRetrieveRoute: "store-management-retrieve",
              },
              dActivityLogRoute: {
                aListRoute: "activity-log-list",
              },
              eLocationRoute: {
                aListRoute: "location-list",
                bCreateRoute: "location-create",
                cRetrieveRoute: "location-retrieve",
              },
              fDepartmentRoute: {
                aListRoute: "department-list",
                bCreateRoute: "department-create",
                cRetrieveRoute: "department-retrieve",
              },
              gOpenPurchaseOrderRoute: {
                aListRoute: "open-purchase-order-list",
                bCreateRoute: "open-purchase-order-create",
                cRetrieveRoute: "open-purchase-order-retrieve",
              },
              hOrganizationRoleRoute: {
                aListRoute: "organization-role-list",
                bCreateRoute: "organization-role-create",
                cRetrieveRoute: "organization-role-retrieve",
              },
              iEmployeeRoute: {
                aListRoute: "employee-list",
                bCreateRoute: "employee-create",
                cRetrieveRoute: "employee-retrieve",
              },
              jClosedPurchaseOrderRoute: {
                aListRoute: "closed-purchase-order-list",
                bCreateRoute: "closed-purchase-order-create",
                cRetrieveRoute: "closed-purchase-order-retrieve",
              },
              kInventoryGeneralRoute: {
                aListRoute: "inventory-general-list",
                bCreateRoute: "inventory-general-create",
                cRetrieveRoute: "inventory-general-retrieve",
              },
              lInventoryInwardRoute: {
                aListRoute: "inventory-inward-list",
                bCreateRoute: "inventory-inward-create",
                cRetrieveRoute: "inventory-inward-retrieve",
              },
              mInventoryOutwardRoute: {
                aListRoute: "inventory-outward-list",
                bCreateRoute: "inventory-outward-create",
                cRetrieveRoute: "inventory-outward-retrieve",
              },
              nCustomerOrderMagentoRoute: {
                aListRoute: "customer-order-magento-list",
                bCreateRoute: "customer-order-magento-create",
                cRetrieveRoute: "customer-order-magento-retrieve",
              },
              oCustomerOrderShopifyRoute: {
                aListRoute: "customer-order-shopify-list",
                bCreateRoute: "customer-order-shopify-create",
                cRetrieveRoute: "customer-order-shopify-retrieve",
              },
            },

            zDashboardRoute: {
              aDashboardRoute: "inventech-dashboard"
            }
          },

        }
      }
    }
  }
}

export default endpointRoute;
