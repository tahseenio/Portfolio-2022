import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

const FetchMdx = () => {
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const testFetch = async () => {
      try {
        const promise = await fetch(
          'https://raw.githubusercontent.com/tahseenio/portfolio-2022/main/README.md'
        );
        const data = await promise.text();
        console.log(data);
        setText(data);
      } catch (err) {
        console.log(err);
      }
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };
    testFetch();
  }, []);

  return loading ? <>Loading...</> : <Markdown>{text}</Markdown>;
};

export default FetchMdx;
