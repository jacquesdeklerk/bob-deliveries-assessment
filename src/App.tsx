import DeliveriesList from "./components/DeliveriesList";
import { sampleDeliveries } from "./data/sampleDeliveries";

function App() {
  function render() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">Deliveries assessment</h1>
        <p className="text-sm text-slate-600 mb-4">
          Change the status of deliveries and see how the list updates.
        </p>
        <DeliveriesList initialDeliveries={sampleDeliveries} />
      </div>
    );
  }

  return render();
}

export default App;
