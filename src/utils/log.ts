export function log() {
  let args = Array.prototype.slice.call(arguments);
  console.log('args', args, arguments);
}
