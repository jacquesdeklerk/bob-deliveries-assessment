export type Progress = "pending" | "current" | "done";

export interface IDelivery {
  id: number;
  step_number: number;
  label: string;
  progress: Progress | string; // intentionally loose to test robustness
  time?: string | null;
}

export const sampleDeliveries: IDelivery[] = [
  { id: 1, step_number: 1, label: "Order placed", progress: "pending", time: null },
  { id: 2, step_number: 2, label: "Packed", progress: "pending", time: null },
  { id: 3, step_number: 3, label: "Out for delivery", progress: "pending", time: null },
  { id: 4, step_number: 4, label: "Delivered", progress: "in-progress", time: null } // buggy value
];
