import React, { useEffect, useState } from 'react';

function PromiseFunctionParse(props) {

  const [func, setFunc] = useState(undefined);

  useEffect(() => {
    (async () => { setFunc(await props.func()); })();
  }, []);

  
  return (
    <>
      {func}
    </>
  );
}
