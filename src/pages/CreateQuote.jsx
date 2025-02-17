import CreateQuoteViewModel from "../components/viewModel/createQuoteViewModel";
import Header from "../components/common/Header";

const CreateQuote = () => {
  return (
    <Header privateRoute={true}>
      <CreateQuoteViewModel />
    </Header>
  );
};

export default CreateQuote;
