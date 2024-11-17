import "./App.css";
import Card from "../components/Card/Card";
import useExportCustomerGreeting from "../hooks/useGetCustomerGreeting";

function App() {
  const { data, error } = useExportCustomerGreeting();
  if (!data) {
    return (
      <div className="errorScreen">
        <h3> No data found! </h3>
        <b> Please Check if the Backend is running on port 3000</b>
      </div>
    );
  }
  return (
    <>
      <div className="appContainer">
        {/* todo import sexier font.. */}
        {error && <div>Error!</div>}
        {!error && (
          <Card
            titleText={data.title}
            descriptionText={data.message}
            priceText={`Total price: ${data.totalPrice}`}
            freeGift={data.freeGift}
          />
        )}
      </div>
    </>
  );
}

export default App;
