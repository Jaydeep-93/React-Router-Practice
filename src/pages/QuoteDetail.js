import { useParams, Route } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuote from './../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: "q1", author: "max", text: "Learning React" },
  { id: "q2", author: "manu", text: "Learning Redux" },
  { id: "q3", author: "john", text: "Learning Router" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)
  if (!quote) {
    return <p>No quote found :(</p>
  }

  return (
    <>
      <h1>Quote Detail {params.quoteId}</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;

