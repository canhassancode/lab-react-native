import { Redirect } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const Page = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/(root)/(tabs)/home" />;

  return <Redirect href="/(auth)/welcome" />;
};

export default Page;

// TODO: Upgraded clerk later -> https://stackoverflow.com/questions/78958246/react-native-typeerror-window-addeventlistener-is-not-a-function-it-is-undef
