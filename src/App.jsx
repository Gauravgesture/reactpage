import React, { useState } from 'react'

function App() {
const [a,b]=useState(false);
  return (
    <div>
      val:{a.toString()}
    </div>
  )
}

export default App
