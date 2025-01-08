import fullRoute from "@/bLove/gRoute/bFullRoute";

const data = {
  title: "Sign-up to create account",
  subtitle: "Registered users will be assigned with Viewer role",
  inputs: [
    { name: "eFirstname"      , label: "Firstname"       , type: "text"    , placeholder: "Please enter firstname..."         },
    { name: "eLastname"       , label: "Lastname"        , type: "text"    , placeholder: "Please enter lastname..."          },
    { name: "eEmail"          , label: "Email"           , type: "email"   , placeholder: "Please enter email..."             },
    { name: "eMobile"         , label: "Mobile"          , type: "text"    , placeholder: "Please enter mobile..."            },
    { name: "ePassword"       , label: "Password"        , type: "password", placeholder: "Please enter password..."          },
    { name: "eConfirmPassword", label: "Confirm Password", type: "password", placeholder: "Please enter confirm password..."  },
  ],
  button: {
    label: "Sign Up",
  },
  links: [
    { linkMessage: "Already have an account?", linkRoute: fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.aSignInRoute, linkText: "Sign In" },
    { linkMessage: "Forgot Password?", linkRoute: fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.cForgotPasswordRoute, linkText: "Reset Now" },
  ]
}

export default data;
