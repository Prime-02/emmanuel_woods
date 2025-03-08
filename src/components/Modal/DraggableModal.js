'use client'
import { GripVertical, Hand, Move, MoveHorizontal, X } from "lucide-react";
import React, { useState, useRef } from "react";
import Button from "../reusables/buttons/Buttons";

const DraggableModal = ({
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
  disabled,
  loading,
  clickedTitle,
  buttonValue,
  subChildren,
  customButton,
}) => {
  if (!isOpen) return null;

  const modalRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 400, height: 300 });
  const startCoords = useRef({ x: 0, y: 0 });

  // Handle Drag Start
  const startDrag = (e) => {
    setIsDragging(true);
    startCoords.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  // Handle Dragging
  const onDrag = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startCoords.current.x,
      y: e.clientY - startCoords.current.y,
    });
  };

  // Stop Dragging
  const stopDrag = () => setIsDragging(false);

  // Handle Resizing Start
  const startResize = (e) => {
    e.stopPropagation(); // Prevent dragging while resizing
    setIsResizing(true);
    startCoords.current = { x: e.clientX, y: e.clientY };
  };

  // Handle Resizing
  const onResize = (e) => {
    if (!isResizing) return;
    const newWidth = Math.max(
      300,
      size.width + (e.clientX - startCoords.current.x)
    );
    const newHeight = Math.max(
      200,
      size.height + (e.clientY - startCoords.current.y)
    );
    setSize({ width: newWidth, height: newHeight });
    startCoords.current = { x: e.clientX, y: e.clientY };
  };

  // Stop Resizing
  const stopResize = () => setIsResizing(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 px-4 pointer-events-none select-none">
      <div
        ref={modalRef}
        className="card rounded-lg p-6 shadow-lg relative pointer-events-auto"
        style={{
          width: `${size.width}px`,
          height: `${size.height}px`,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onMouseMove={(e) => {
          onDrag(e);
          onResize(e);
        }}
        onMouseUp={() => {
          stopDrag();
          stopResize();
        }}
      >
        {/* Draggable Header */}
        <div
          title="CLick and drag"
          className={` absolute top-1 left-1  flex items-center justify-between w-full h-5 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } `}
          onMouseDown={startDrag}
        >
          <GripVertical size={15} />
        </div>
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X />
        </button>
        {title && (
          <h2 onClick={clickedTitle} className="text-2xl font-semibold">
            {title}
          </h2>
        )}

        {/* Modal Content */}
        <div
          className="overflow-auto p-4 h-full "
          style={{ height: `calc(100% - 60px)` }}
        >
          {onSubmit ? (
            <form onSubmit={onSubmit} className="flex h-full flex-col gap-y-3">
              <div className="h-full">{children}</div>
              {customButton ? (
                customButton
              ) : (
                <Button
                  className="btn"
                  text={buttonValue}
                  disabled={disabled}
                  loading={loading}
                />
              )}
              {subChildren && subChildren}
            </form>
          ) : (
            <div>{children}</div>
          )}
        </div>
        <span className="text-xs text-center absolute bottom-1 left-1">
          {`drag slowly to resize or reposition this modal`}
        </span>

        {/* Resizable Handle */}
        <span
          title="Resize"
          onMouseDown={startResize}
          className="cursor-move  absolute bottom-1 right-1"
        >
          <Move size={15} />
        </span>
      </div>
    </div>
  );
};

export default DraggableModal;
