import { useState } from "react";
import { IDelivery, Progress } from "../data/sampleDeliveries";

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

  const [deliveries, setDeliveries] = useState<IDelivery[]>(
    resetDeliveriesProgress(initialDeliveries)
  );
  const [filter, setFilter] = useState<"all" | "pending" | "current" | "done">("all");

  const filteredDeliveries = deliveries.filter(item =>
    filter === "all" ? true : item.progress === filter
  );

  function isProgressOptionDisabled(delivery: IDelivery, progress: Progress): boolean {
    const deliveryIndex = deliveries.findIndex(item => item.id === delivery.id);

    const arePrecedingStepsDone = deliveries
      .slice(0, deliveryIndex)
      .every(item => item.progress === "done");

    return progress === "pending"
      ? false
      : !arePrecedingStepsDone || (progress === "done" && delivery.progress !== "current");
  }

  function calcDeliveryProgress(
    currentProgress: Progress | string,
    newProgress: Progress
  ): Progress | string {
    if (newProgress === "done" && currentProgress !== "current") {
      return currentProgress;
    }

    return newProgress;
  }

  function updateDeliveryProgress(deliveryID: number, newProgress: Progress) {
    let updatedIndex: number;
    let updatedProgress: Progress | string;
    let updatedTime: string | null | undefined = null;

    setDeliveries(currentValue => {
      return currentValue.map((item, i) => {
        if (item.id === deliveryID) {
          updatedIndex = i;
          updatedProgress = calcDeliveryProgress(item.progress, newProgress);
          updatedTime = newProgress === "done" ? Date() : null;
        } else {
          updatedProgress = item.progress;
          updatedTime = item.time;

          if (updatedIndex !== undefined && i > updatedIndex) {
            updatedProgress = "pending";
            updatedTime = null;
          }
        }

        return {
          ...item,
          progress: updatedProgress,
          time: updatedTime
        };
      });
    });
  }

  function resetDeliveriesProgress(deliveries: IDelivery[]): IDelivery[] {
    return deliveries.map(item => {
      return { ...item, progress: "pending" };
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
          value={filter}
          onChange={e => setFilter(e.target.value as typeof filter)}
          className="px-2 py-1 border rounded-md bg-white text-sm"
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
        {filteredDeliveries.map(item => (
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
                        disabled={isProgressOptionDisabled(item, progress.value)}
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
