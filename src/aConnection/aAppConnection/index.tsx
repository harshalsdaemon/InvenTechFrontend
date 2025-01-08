import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import endpointRoute from '@/bLove/gRoute/aEndpointRoute';
import { Toaster } from '@/aConnection/bShadcnConnection/components/ui/toaster';
import isAllowedUtility, { menuListUtility, NoAccessMessageUtility } from '@/bLove/dUtility/dIsAllowedUtility';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../dReduxConnection';
import globalSlice from '@/bLove/bRedux/aGlobalSlice';

import ImageUploadListComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/aListComponent';
import ImageUploadCreateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/bCreateComponent';
import ImageUploadUpdateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/dUpdateComponent';
import ImageUploadDeleteComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/eDeleteComponent';
import ImageUploadRetrieveComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aImageUploadComponent/cRetrieveComponent';
import ExportComponent from '@/bLove/cComponent/zOpenFreestyleComponent/bExportComponent';
import ImportComponent from '@/bLove/cComponent/zOpenFreestyleComponent/cImportComponent';
import SampleListComponent from '@/bLove/cComponent/zOpenFreestyleComponent/cSampleListComponent';
import SampleCreateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/dSampleCreateComponent';
import SampleRetrieveComponent from '@/bLove/cComponent/zOpenFreestyleComponent/eSampleRetrieveComponent';
import SampleProductCreateComponent from '@/bLove/cComponent/zOpenFreestyleComponent/fSampleProductCreateComponent';
import GenerateVariantsComponent from '@/bLove/cComponent/zOpenFreestyleComponent/fSampleProductVariantCreateComponent';
import DashboardComponent from '@/bLove/cComponent/zOpenFreestyleComponent/aDashboardComponent';

// Layout
const GlobalLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout'));
const UnprotectedLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/aUnprotectedLayout'));
const ProtectedLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout'));
const AuthenticationLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/aAuthenticationLayout'));
const AuthorizationLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizationLayout'));
const TopbarLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizationLayout/outlet/aTopbarLayout'));
const SidebarLayout = React.lazy(() => import('@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizationLayout/outlet/bSidebarLayout'));

// Page
const HomePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/aUnprotectedPage/page/aHomePage'));

const SignInPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/aSignInPage'));
const SignUpPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/bSignUpPage'));
const ForgotPasswordPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/cForgotPasswordPage'));
const ResetPasswordPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/aAuthenticationPage/page/dResetPasswordPage'));

const ProfileRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/aProfileRetrievePage'));
const ProfileUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/bProfileUpdatePage'));
const ProfilePasswordUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/cProfilePasswordUpdatePage'));
const ProfileDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/aTopbarPage/page/dProfileDeletePage'));

const InvenTechDashboardPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/zDashboardPage'));

const BaseManyToOneListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/aListPage'));
const BaseManyToOneCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/bCreatePage'));
const BaseManyToOneRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/cRetrievePage'));
const BaseManyToOneUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/dUpdatePage'));
const BaseManyToOneDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/aBaseManyToOnePage/eDeletePage'));

const BaseManyToManyListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/aListPage'));
const BaseManyToManyCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/bCreatePage'));
const BaseManyToManyRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/cRetrievePage'));
const BaseManyToManyUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/dUpdatePage'));
const BaseManyToManyDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/bBaseManyToManyPage/eDeletePage'));

const BaseListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/aListPage'));
const BaseCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/bCreatePage'));
const BaseRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/cRetrievePage'));
const BaseUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/dUpdatePage'));
const BaseDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/cBasePage/eDeletePage'));

const BaseOneToOneListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/aListPage'));
const BaseOneToOneCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/bCreatePage'));
const BaseOneToOneRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/cRetrievePage'));
const BaseOneToOneUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/dUpdatePage'));
const BaseOneToOneDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/dBaseOneToOnePage/eDeletePage'));

const BaseOneToManyListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/aListPage'));
const BaseOneToManyCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/bCreatePage'));
const BaseOneToManyRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/cRetrievePage'));
const BaseOneToManyUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/dUpdatePage'));
const BaseOneToManyDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/aBaseSetupPage/eBaseOneToManyPage/eDeletePage'));

const UserListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/aListPage'));
const UserCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/bCreatePage'));
const UserRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/cRetrievePage'));
const UserUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/dUpdatePage'));
const UserDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/aUserPage/eDeletePage'));

const RoleListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/aListPage'));
const RoleCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/bCreatePage'));
const RoleRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/cRetrievePage'));
const RoleUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/dUpdatePage'));
const RoleDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/bRolePage/eDeletePage'));

const MenuListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/aListPage'));
const MenuCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/bCreatePage'));
const MenuRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/cRetrievePage'));
const MenuUpdatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/dUpdatePage'));
const MenuDeletePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/bUserAdministrationPage/cMenuPage/eDeletePage'));

// InvenTech
const ProductCatalogueListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/aProductCataloguePage/aListPage'));
const ProductCatalogueCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/aProductCataloguePage/bCreatePage'));
const ProductCatalogueRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/aProductCataloguePage/cRetrievePage'));

const WarehouseManagementListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/bWarehouseManagementPage/aListPage'));
const WarehouseManagementCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/bWarehouseManagementPage/bCreatePage'));
const WarehouseManagementRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/bWarehouseManagementPage/cRetrievePage'));

const StoreManagementListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/cStoreManagementPage/aListPage'));
const StoreManagementCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/cStoreManagementPage/bCreatePage'));
const StoreManagementRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/cStoreManagementPage/cRetrievePage'));

const ActivityLogListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/dActivityLogPage/aListPage'));

const LocationListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/eLocationPage/aListPage'));
const LocationCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/eLocationPage/bCreatePage'));
const LocationRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/eLocationPage/cRetrievePage'));

const DepartmentListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/fDepartmentPage/aListPage'));
const DepartmentCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/fDepartmentPage/bCreatePage'));
const DepartmentRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/fDepartmentPage/cRetrievePage'));

const OrganizationRoleListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/hOrganizationRolePage/aListPage'));
const OrganizationRoleCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/hOrganizationRolePage/bCreatePage'));
const OrganizationRoleRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/hOrganizationRolePage/cRetrievePage'));

const EmployeeListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/iEmployeePage/aListPage'));
const EmployeeCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/iEmployeePage/bCreatePage'));
const EmployeeRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/iEmployeePage/cRetrievePage'));

const OpenPurchaseOrderListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/gOpenPurchaseOrderPage/aListPage'));
const OpenPurchaseOrderCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/gOpenPurchaseOrderPage/bCreatePage'));
const OpenPurchaseOrderRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/gOpenPurchaseOrderPage/cRetrievePage'));

const ClosedPurchaseOrderListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/jClosedPurchaseOrderPage/aListPage'));
const ClosedPurchaseOrderRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/jClosedPurchaseOrderPage/cRetrievePage'));

const InventoryGeneralListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/kInventoryGeneralPage/aListPage'));
const InventoryGeneralRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/kInventoryGeneralPage/cRetrievePage'));

const InventoryInwardListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/lInventoryInwardPage/aListPage'));
const InventoryInwardCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/lInventoryInwardPage/bCreatePage'));
const InventoryInwardRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/lInventoryInwardPage/cRetrievePage'));

const InventoryOutwardListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/mInventoryOutwardPage/aListPage'));
const InventoryOutwardCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/mInventoryOutwardPage/bCreatePage'));
const InventoryOutwardRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/mInventoryOutwardPage/cRetrievePage'));

const CustomerOrderMagentoListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/nCustomerOrderMagentoPage/aListPage'));
const CustomerOrderMagentoCreatePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/nCustomerOrderMagentoPage/bCreatePage'));
const CustomerOrderMagentoRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/nCustomerOrderMagentoPage/cRetrievePage'));

const CustomerOrderShopifyListPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/oCustomerOrderShopifyPage/aListPage'));
const CustomerOrderShopifyRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/oCustomerOrderShopifyPage/cRetrievePage'));

const SettingPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/pSettingPage'));

const NewProfileRetrievePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/qNewProfileRetrievePage'));
const NewProfileEditPage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/rNewProfileEditPage'));

const HowToUsePage = React.lazy(() => import('@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizationPage/outlet/bSidebarPage/page/cInvenTechPage/aOverallPage/sHowToUsePage'));


const AppConnection = () => {
  // Redux Call
  const ReduxCall = {
    state: useSelector((fullState: RootState) => fullState.globalSlice),
    dispatch: useDispatch(),
    action: globalSlice.actions
  }
  
  // JSX
  return (
    <React.Fragment>
      {/* AppConnection */}
      <Helmet><title>Inventech - Admin</title></Helmet>
      <Toaster />

      <Suspense fallback={<div className='min-h-screen flex justify-center items-center' >Suspence Loading...</div>} >
        <Routes>

          {/* Global */}
          <Route element={<GlobalLayout />} >

            {/* Unprotected */}
            <Route element={<UnprotectedLayout />} >
              <Route path={`${endpointRoute.aGlobalRoute.aUnprotectedRoute.aHomeRoute}`} element={<HomePage />} />
            </Route>
            
            {/* Protected */}
            <Route element={<ProtectedLayout />} >

              {/* Authentication */}
              <Route element={<AuthenticationLayout />} >
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.aSignInRoute}`} element={<SignInPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.bSignUpRoute}`} element={<SignUpPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.cForgotPasswordRoute}`} element={<ForgotPasswordPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.aAuthenticatedRoute.dResetPasswordRoute}/:token`} element={<ResetPasswordPage />} />
              </Route>

              {/* Authorization */}
              <Route element={<AuthorizationLayout />}  >

                {/* Topbar */}
                <Route element={<TopbarLayout />} >
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.aProfileRetrieveRoute}`} element={<ProfileRetrievePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.bProfileUpdateRoute}`} element={<ProfileUpdatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.cProfilePasswordUpdateRoute}`} element={<ProfilePasswordUpdatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.aTopbarRoute.dProfileDeleteRoute}`} element={<ProfileDeletePage />} />
                </Route>

                {/* Sidebar */}
                <Route element={<SidebarLayout />} >
                  {/* Pages */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.zDashboardRoute.aDashboardRoute}`} element={<InvenTechDashboardPage />} />

                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "list") ? <BaseManyToOneListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "create") ? <BaseManyToOneCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "retrieve") ? <BaseManyToOneRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "update") ? <BaseManyToOneUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.aBaseManyToOneRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToOne, "delete") ? <BaseManyToOneDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "list") ? <BaseManyToManyListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "create") ? <BaseManyToManyCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "retrieve") ? <BaseManyToManyRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "update") ? <BaseManyToManyUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.bBaseManyToManyRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseManyToMany, "delete") ? <BaseManyToManyDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "list") ? <BaseListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "create") ? <BaseCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "retrieve") ? <BaseRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "update") ? <BaseUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.cBaseRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.base, "delete") ? <BaseDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "list") ? <BaseOneToOneListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "create") ? <BaseOneToOneCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "retrieve") ? <BaseOneToOneRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "update") ? <BaseOneToOneUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.dBaseOneToOneRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToOne, "delete") ? <BaseOneToOneDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "list") ? <BaseOneToManyListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "create") ? <BaseOneToManyCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "retrieve") ? <BaseOneToManyRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "update") ? <BaseOneToManyUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.aBaseSetupRoute.eBaseOneToManyRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.baseOneToMany, "delete") ? <BaseOneToManyDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "list") ? <UserListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "create") ? <UserCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "retrieve") ? <UserRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "update") ? <UserUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.aUserRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.user, "delete") ? <UserDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "list") ? <RoleListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "create") ? <RoleCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "retrieve") ? <RoleRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "update") ? <RoleUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.bRoleRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.role, "delete") ? <RoleDeletePage /> : <NoAccessMessageUtility />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.aListRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "list") ? <MenuListPage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.bCreateRoute}`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "create") ? <MenuCreatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.cRetrieveRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "retrieve") ? <MenuRetrievePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.dUpdateRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "update") ? <MenuUpdatePage /> : <NoAccessMessageUtility />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.bUserAdministrationRoute.cMenuRoute.eDeleteRoute}/:id`} element={(ReduxCall.state.receivedObject as any)?.ProfileRetrieve && isAllowedUtility(ReduxCall, menuListUtility.menu, "delete") ? <MenuDeletePage /> : <NoAccessMessageUtility />} />
                  
                  {/* InvenTech */}
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.aListRoute}`} element={<ProductCatalogueListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.bCreateRoute}`} element={<ProductCatalogueCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.aProductCatalogueRoute.cRetrieveRoute}/:id`} element={<ProductCatalogueRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.aListRoute}`} element={<WarehouseManagementListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.bCreateRoute}`} element={<WarehouseManagementCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.bWarehouseManagementRoute.cRetrieveRoute}/:id`} element={<WarehouseManagementRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.aListRoute}`} element={<StoreManagementListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.bCreateRoute}`} element={<StoreManagementCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.cRetrieveRoute}/:id`} element={<StoreManagementRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.dActivityLogRoute.aListRoute}`} element={<ActivityLogListPage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.aListRoute}`} element={<LocationListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.bCreateRoute}`} element={<LocationCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.eLocationRoute.cRetrieveRoute}/:id`} element={<LocationRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.aListRoute}`} element={<DepartmentListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.bCreateRoute}`} element={<DepartmentCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.fDepartmentRoute.cRetrieveRoute}/:id`} element={<DepartmentRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.hOrganizationRoleRoute.aListRoute}`} element={<OrganizationRoleListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.hOrganizationRoleRoute.bCreateRoute}`} element={<OrganizationRoleCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.hOrganizationRoleRoute.cRetrieveRoute}/:id`} element={<OrganizationRoleRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.iEmployeeRoute.aListRoute}`} element={<EmployeeListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.iEmployeeRoute.bCreateRoute}`} element={<EmployeeCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.iEmployeeRoute.cRetrieveRoute}/:id`} element={<EmployeeRetrievePage />} />

                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.aListRoute}`} element={<OpenPurchaseOrderListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.bCreateRoute}`} element={<OpenPurchaseOrderCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.gOpenPurchaseOrderRoute.cRetrieveRoute}/:id`} element={<OpenPurchaseOrderRetrievePage />} />
                  
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.jClosedPurchaseOrderRoute.aListRoute}`} element={<ClosedPurchaseOrderListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.jClosedPurchaseOrderRoute.cRetrieveRoute}/:id`} element={<ClosedPurchaseOrderRetrievePage />} />

                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.kInventoryGeneralRoute.aListRoute}`} element={<InventoryGeneralListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.kInventoryGeneralRoute.cRetrieveRoute}/:id`} element={<InventoryGeneralRetrievePage />} />

                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.lInventoryInwardRoute.aListRoute}`} element={<InventoryInwardListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.lInventoryInwardRoute.bCreateRoute}`} element={<InventoryInwardCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.lInventoryInwardRoute.cRetrieveRoute}/:id`} element={<InventoryInwardRetrievePage />} />

                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.mInventoryOutwardRoute.aListRoute}`} element={<InventoryOutwardListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.mInventoryOutwardRoute.bCreateRoute}`} element={<InventoryOutwardCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.mInventoryOutwardRoute.cRetrieveRoute}/:id`} element={<InventoryOutwardRetrievePage />} />

                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.nCustomerOrderMagentoRoute.aListRoute}`} element={<CustomerOrderMagentoListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.nCustomerOrderMagentoRoute.bCreateRoute}`} element={<CustomerOrderMagentoCreatePage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.nCustomerOrderMagentoRoute.cRetrieveRoute}/:id`} element={<CustomerOrderMagentoRetrievePage />} />

                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.oCustomerOrderShopifyRoute.aListRoute}`} element={<CustomerOrderShopifyListPage />} />
                  <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.oCustomerOrderShopifyRoute.cRetrieveRoute}/:id`} element={<CustomerOrderShopifyRetrievePage />} />

                  <Route path={`setting-page`} element={<SettingPage />} />

                  <Route path={`new-profile-retrieve`} element={<NewProfileRetrievePage />} />
                  <Route path={`new-profile-edit`} element={<NewProfileEditPage />} />

                  <Route path={`how-to-use-page`} element={<HowToUsePage />} />
                
                </Route>
              </Route>
            </Route>
          </Route>

          {/* Component */}
          <Route path={`image-upload-list`} element={<ImageUploadListComponent />} />
          <Route path={`image-upload-create`} element={<ImageUploadCreateComponent />} />
          <Route path={`image-upload-retrieve`} element={<ImageUploadRetrieveComponent />} />
          <Route path={`image-upload-update`} element={<ImageUploadUpdateComponent />} />
          <Route path={`image-upload-delete`} element={<ImageUploadDeleteComponent />} />

          <Route path={`export`} element={<ExportComponent />} />
          <Route path={`import`} element={<ImportComponent />} />
          
          <Route path={`sample-list`} element={<SampleListComponent />} />
          <Route path={`sample-create`} element={<SampleCreateComponent />} />
          <Route path={`sample-retrieve`} element={<SampleRetrieveComponent />} />

          <Route path={`sample-product-create`} element={<SampleProductCreateComponent />} />
          <Route path={`sample-product-variant-create`} element={<GenerateVariantsComponent />} />

          <Route path={`dashboard-one`} element={<DashboardComponent />} />

          {/* 404 Page */}
           <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Suspense>
    </React.Fragment>
  )
}

export default AppConnection;
