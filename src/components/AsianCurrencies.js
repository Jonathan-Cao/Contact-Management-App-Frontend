const AsianCurrencies = ({ asianCurrencies }) => {
  const currencyCodes = Object.keys(asianCurrencies);
  return (
    <ul>
      {currencyCodes.map((currencyCode) => {
        return (
          <li key={currencyCode}>
            {currencyCode} - {asianCurrencies[currencyCode]}
          </li>
        );
      })}
    </ul>
  );
};

export default AsianCurrencies;
