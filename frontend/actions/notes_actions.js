


export const KEY_PRESSED = "KEY_PRESSED";
export const KEY_RELEASED = "KEY_RELEASED";


export const keyPressed = key => ({
  type: KEY_PRESSED,
  // automatically knows that this is key: key
  key
});

export const keyReleased = key => ({
  type: KEY_RELEASED,
  // automatically knows that this is key: key
  key
});
