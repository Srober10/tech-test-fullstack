import "./App.css";
import Card from "../components/Card/Card";
import Error from "../components/Error/Error";
import useExportCustomerGreeting from "../hooks/useGetCustomerGreeting";

function App() {
  const { data, error } = useExportCustomerGreeting();
  if (!data) {
    return <Error />;
  }
  return (
    <>
      <div className="appContainer">
        {error && <Error />}
        {!error && (
          <Card
            titleText={data.title}
            descriptionText={data.message}
            priceText={`Total price: £${data.totalPrice}`}
            freeGift={data.freeGift}
          />
        )}
      </div>
    </>
  );
}

export default App;
