import { observer } from "mobx-react";
// import { useStore } from "../models/rootStore";
import CreateQuoteView from "../view/CreateQuoteView";

const CreateQuoteViewModel = observer(() => {
  // const store = useStore();
  // const authStore = store.authStore;

  return <CreateQuoteView />;
});

export default CreateQuoteViewModel;
