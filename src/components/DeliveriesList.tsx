import { IDelivery } from "../data/sampleDeliveries";

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

interface IProps {
  initialDeliveries: IDelivery[];
}

export default function DeliveriesList(props: IProps) {
  const { initialDeliveries } = props;
  // TODO: Implement component state and behavior.

  return (
    <div className="w-full">
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

      <ol aria-label="Deliveries list" className="space-y-3">
        {initialDeliveries.map(item => (
          <li key={item.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
            <div className="text-sm italic">Add the label and step number here (see mockup)</div>

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
                  <label className="text-xs">
                    <input type="radio" name={`progress-${item.id}`} className="mr-1" />
                    Pending
                  </label>
                  <label className="text-xs">
                    <input type="radio" name={`progress-${item.id}`} className="mr-1" />
                    Current
                  </label>
                  <label className="text-xs">
                    <input type="radio" name={`progress-${item.id}`} className="mr-1" />
                    Done
                  </label>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
