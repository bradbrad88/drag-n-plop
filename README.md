# Drag 'n Plop

## Strategy

Pointer events and css translate transformations.

Pointer events facilitate mouse, touch and other pointer types.
They allow you to track and follow the primary touch (in case of multi-touch).

Drag events only work on mouse events and have a clunky api.
Requires setting draggable attribute to true, handling drag-start event and setting event.dataTransfer.setData("[data-type]", "some-data").
Has its own drag animations with very limited ability to change the image being dragged or changing opacity.
The drag-end event doesn't fire until the end of the animation where drag image moves back to its original location.

Touch events only work on touch devices, otherwise they work just like pointer events.

## Touch Action

```css
touch-action: none;
```

Apply to drag handle so that panning/scrolling motions won't try to activate on a touch device.
When a device starts scrolling, the pointer-cancel event will fire.

## Transition

Set the transition property to be active only when dragging is NOT in progress.
This results in snappy performance while dragging an item, but a smooth reset when ending the drag.
