import { useState } from "react";
import Button from "../components/Button";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Counter Example</h1>

      <p className="mb-4">Count: {count}</p>

      <Button label="Increase" onClick={() => setCount(count + 1)} />
    </div>
  );
}
