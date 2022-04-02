import QuoteList from "./../components/quotes/QuoteList";

const AllQuotes = () => {
  const DUMMY_QUOTES = [
    { id: "q1", author: "max", text: "Learning React" },
    { id: "q2", author: "manu", text: "Learning Redux" },
    { id: "q3", author: "john", text: "Learning Router" },
  ];

  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
