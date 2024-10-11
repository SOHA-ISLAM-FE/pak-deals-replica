import React from 'react'
import { BarChart, Eye, Heart } from 'react-bootstrap-icons'

function ShopIcons() {
  return (
    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
    <div className="grid justify-end p-2">
      <button className="bg-white p-2 rounded-full shadow-md my-1 mx-1 hover:!bg-yellow-400 transition-colors duration-300 pointer-events-auto">
        <Heart className="text-gray-600" />
      </button>
      <button className="bg-white p-2 rounded-full shadow-md my-1 mx-1 hover:!bg-yellow-400 transition-colors duration-300 pointer-events-auto">
        <Eye className="text-gray-600" />
      </button>
      <button className="bg-white p-2 rounded-full shadow-md my-1 mx-1 hover:!bg-yellow-400 transition-colors duration-300 pointer-events-auto">
        <BarChart className="text-gray-600" />
      </button>
    </div>
  </div>
  )
}

export default ShopIcons