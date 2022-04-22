import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <nav>
      <div>
        <span>Sell</span>
        <Image/>
        <span>It</span>
      </div>

      <form>
        <input type="Search..." />
      </form>

      <div>
        <span>Options...</span>
      </div>

      <span>Cart</span>

    </nav>
  )
}
