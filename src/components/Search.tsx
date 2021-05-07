import React, { useState, useEffect } from "react";
import axios from "axios";

type Result = {
  ns: number;
  size: number;
  pageid: number;
  title: string;
  snippet: string;
  wordcount: number;
  timestamp: string;
};

type Response = {
  batchcomplete: string;
  continue: {
    continue: string;
    sroffset: number;
  };
  query: {
    search: Result[];
    searchinfo: {
      suggestion: string;
      suggestionsnippet: string;
      totalhits: number;
    };
  };
};

const Search: React.FC = () => {
  const [term, setTerm] = useState("pro");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timeId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data }: { data: Response } = await axios.get(
        "https://en.wikipedia.org/w/api.php",
        {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: debouncedTerm,
          },
        }
      );
      setResults(data.query.search);
    };

    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result: Result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            GO
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="fied">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
