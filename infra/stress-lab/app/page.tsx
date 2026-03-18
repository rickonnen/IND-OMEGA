<<<<<<< HEAD
'use client'
import { useState } from 'react'

export default function HomePage() {
  const [result, setResult] = useState<number | null>(null)

  const calculate = async () => {
    const res = await fetch('/api/calculator?a=10&b=2&op=add')
    const data = await res.json()
    setResult(data.result ?? null)
  }
=======
"use client";
import { useState } from "react";

export default function HomePage() {
  const [result, setResult] = useState<number | null>(null);

  const calculate = async () => {
    const res = await fetch("/api/calculator?a=10&b=2&op=add");
    const data = await res.json();
    setResult(data.result ?? null);
  };
>>>>>>> 5d6356d1d2404c57b50040af4933f60d0c0891f3

  return (
    <div>
      <h1>Next.js + TSX DevOps Stress Lab</h1>
      <button onClick={calculate}>Test API</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
<<<<<<< HEAD
  )
}
=======
  );
}
>>>>>>> 5d6356d1d2404c57b50040af4933f60d0c0891f3
