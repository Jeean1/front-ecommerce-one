import HomeViewModel from "../components/viewModel/HomeViewModel";
import { useStore } from "../components/models/rootStore";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import CreateQuoteViewModel from "../components/viewModel/createQuoteViewModel";

const CreateQuote = () => {
  //   const store = useStore();
  //   const [cookies, ,] = useCookies("jwtToken");

  //   useEffect(() => {
  //     if (cookies.jwtToken) {
  //       store.authStore.setToken(cookies.jwtToken, cookies.jwtToken.expires);
  //     }
  //   }, [cookies.jwtToken, store.authStore]);

  return <CreateQuoteViewModel />;
};

export default CreateQuote;
