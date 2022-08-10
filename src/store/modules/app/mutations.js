export function spinner(state, val) {
  state.spinner = val;
}

export function snackbarDelete(state, val) {
  state.snackbars.splice(val, 1);
}

export function snackbar(state, val) {
  const model = {
    absolute: false,
    app: false,
    bottom: false,
    centered: false,
    color: 'primary',
    'content-class': undefined,
    dark: false,
    elevation: undefined,
    height: undefined,
    left: false,
    light: false,
    'max-height': undefined,
    'max-width': undefined,
    'min-height': undefined,
    'min-width': undefined,
    'multi-line': undefined,
    outlined: undefined,
    right: undefined,
    rounded: undefined,
    shaped: false,
    tag: 'div',
    text: false,
    tile: false,
    timeout: 2000,
    value: true,
    top: false,
    transition: 'v-snack-transition',
    vertical: undefined,
    width: undefined,
    ...val,
  };

  state.snackbars.push(model);
}
