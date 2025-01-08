import fullRoute from "@/bLove/gRoute/bFullRoute";

const data = {
  title: "Sign-in to your account",
  subtitle: "Enter your email and password to access account",
  showSampleCredential: false,
  inputs: [
    { 
      name: "eEmail", 
      label: "Email", 
      type: "email", 
      placeholder: "Please enter email..." 
    },
    { 
      name: "ePassword", 
      label: "Password", 
      type: "password", 
      placeholder: "Please enter password..." 
    },
  ],
  button: {
    label: "Sign In",
  },
  links: [
    // { linkMessage: "Don't have an account?", linkRoute: fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.bSignUpRoute, linkText: "Sign Up" },
    { linkMessage: "Forgot Password?", linkRoute: fullRoute.aGlobalRoute.bProtectedRoute.aAuthenticationRoute.cForgotPasswordRoute, linkText: "Reset Now" },
  ]
}

export default data;
