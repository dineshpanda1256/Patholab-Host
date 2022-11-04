import React, { useState } from 'react'
import ManagetestEditModal from './ManagetestEditModal'

export default function ManagetestEditModalF() {
  const [editt, setEditt] = useState(false);

  return (
    <>
        <div onClick={() => setEditt(true)}></div>
        <ManagetestEditModal show={editt} onHide={() => setEditt(false)}/>
    </>
  )
}
