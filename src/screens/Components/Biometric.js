import * as LocalAuthentication from "expo-local-authentication";

export default Index = async () => {
  const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

  if (isBiometricAvailable) {
    // Authenticate using biometrics
    const result = await LocalAuthentication.authenticateAsync();

    if (result.success) {
      // Biometric authentication successful
      //console.log("Biometric authentication successful");
      return true;
    } else {
      // Biometric authentication failed or user cancelled
      console.log("Biometric authentication failed or cancelled");
      return false;
    }
  } else {
    // Biometric authentication is not available on the device
    console.log("Biometric authentication is not available on this device");
    return false;
  }
};
