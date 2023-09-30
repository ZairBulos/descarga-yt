export interface Field<T> {
  value: T;
  onChange: (newValue: T) => void;
  onReset: () => void;
}