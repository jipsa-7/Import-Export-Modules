const pi = 3.14;
function doublePi() {
  return pi * 2;
}
function triplePi() {
  return pi * 3;
}
export default pi; //export pi as default
export { doublePi, triplePi }; // exporting others in curly brackets.No need of putting brackets with the function name because we are just exporting it and not call that function.
