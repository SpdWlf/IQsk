import React, { useState } from 'react'

const App = () => {
  const [step, setStep] = useState(1)
  const [answer, setAnswer] = useState(null)
  return (
    <div className="p-4 text-center text-white bg-black min-h-screen">
      <h1 className="text-2xl mb-4">See How Idiot You Are</h1>
      {step === 1 && (
        <>
          <p>Q1: What is 2 + 2?</p>
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-blue-500 p-2 rounded" onClick={() => setAnswer(3)}>3</button>
            <button className="bg-blue-500 p-2 rounded" onClick={() => setAnswer(4)}>4</button>
            <button className="bg-blue-500 p-2 rounded" onClick={() => setAnswer(5)}>5</button>
          </div>
        </>
      )}
      {answer !== null && (
        <div className="mt-6">
          <p>{answer === 4 ? "Correct... for now 😏" : "Wrong... idiot 🤡"}</p>
          <button className="mt-4 bg-green-500 p-2 rounded" onClick={() => setStep(2)}>Next</button>
        </div>
      )}
    </div>
  )
}

export default App
