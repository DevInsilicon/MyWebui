'use client';
import React, { useState, useEffect, useRef } from 'react'

const minWidth = 100
const maxWidth = 500
const defaultWidth = 250

const ChatListHolder = () => {
  const [width, setWidth] = useState(defaultWidth)
  const isResized = useRef(false)

  useEffect(() => {
    const savedWidth = localStorage.getItem('chatPanelWidth')
    if (savedWidth) {
      setWidth(parseInt(savedWidth))
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResized.current) {
        return
      }

      const newWidth = e.clientX
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth)
      }
    }

    const handleMouseUp = () => {
      isResized.current = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('chatPanelWidth', String(width))
  }, [width])

  return (
    <div className='flex h-full'>
      <div 
        className='bg-gray-700 border-r border-gray-400 select-none' 
        style={{width: `${width}px`}}
      >
        <div>
          Chat Panel Content
        </div>
      </div>

      <div 
        className='w-1 cursor-col-resize select-none'
        onMouseDown={() => {
          isResized.current = true
        }}
      />
    </div>
  )
}

export default ChatListHolder