import QuoteForm from "./../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} isLoading={false} />;
};

export default NewQuote;
