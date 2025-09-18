import { useState } from "react";
import { IDelivery, Progress } from "../data/sampleDeliveries";

/**
 * SKELETON NOTE
 *
 * THIS FILE IS A SKELETON. Implement the logic as required.
 *
 * This starter intentionally omits some coding-standards so you can demonstrate how you'd apply them.
 * Please follow our coding standards as you implement the logic.
 *
 * Do not include solution code outside this file—implement logic here.
 *
 */

type ProgressValue = {
  value: Progress;
  label: string;
};

const progressValues: ProgressValue[] = [
  { value: "pending", label: "Pending" },
  { value: "current", label: "Current" },
  { value: "done", label: "Done" }
];

interface IProps {
  initialDeliveries: IDelivery[];
}

function DeliveriesList(props: IProps) {
  const { initialDeliveries } = props;

  const [deliveries, setDeliveries] = useState<IDelivery[]>(initialDeliveries);

  function updateDeliveryProgress(deliveryId: number, newProgress: Progress) {
    setDeliveries(currentValue => {
      return currentValue.map(item => {
        if (item.id === deliveryId) {
          return { ...item, progress: newProgress };
        } else {
          return item;
        }
      });
    });
  }

  /* --------------------------------*/
  /* RENDER METHODS */
  /* --------------------------------*/
  function renderFilter() {
    return (
      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="filter" className="text-sm font-medium">
          Filter
        </label>
        <select
          id="filter"
          className="px-2 py-1 border rounded-md bg-white text-sm"
          defaultValue="all"
          aria-label="Filter deliveries"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="current">Current</option>
          <option value="done">Done</option>
        </select>
      </div>
    );
  }

  function renderList() {
    return (
      <ol aria-label="Deliveries list" className="space-y-3">
        {deliveries.map(item => (
          <li key={item.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <div className="mr-auto">
              <div className="text-sm font-medium mb-1">{item.label}</div>
              <div className="text-xs text-gray-500">Step: {item.step_number}</div>
            </div>

            <div className="flex items-center gap-4 ml-4">
              <div className="text-center w-36">
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    item.progress === "done"
                      ? "bg-blue-500"
                      : item.progress === "current"
                      ? "bg-green-500"
                      : "bg-yellow-300"
                  }`}
                />
                {item.time && (
                  <div className="text-xs text-slate-700 mt-2">
                    {new Date(item.time).toLocaleString()}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-start gap-2 ml-2">
                <div className="flex items-center gap-4">
                  {progressValues.map(progress => (
                    <label key={progress.value} className="text-xs">
                      <input
                        type="radio"
                        name={`progress-${item.id}`}
                        checked={item.progress === progress.value}
                        onChange={() => updateDeliveryProgress(item.id, progress.value)}
                        className="mr-1"
                      />
                      {progress.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  function render() {
    return (
      <div className="w-full">
        {renderFilter()}
        {renderList()}
      </div>
    );
  }

  return render();
}

export default DeliveriesList;
