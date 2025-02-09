import React, { useState } from 'react'
import StatusBadge from './status-badge'



const Build = () => {

  const [value,setValue] = useState("pending");

  const handleChange = (e : any) => {
setValue(e.target.value);

  }
  return (
    <div>
      <div className="dropdown-container">
        <label htmlFor="status-dropdown" className="mr-2">
          Select Status:
        </label>
        <select
          id="status-dropdown"
          value={value}
          onChange={handleChange}
          className="border rounded p-2"
        >
          <option value="pending">Pending</option>
          <option value="inactive">Inactive</option>
          <option value="active">active</option>
        </select>
      </div>
      <StatusBadge status={value} />
    </div>

  )
}

export default Build