export function log() {
  const args = Array.prototype.slice.call(arguments);
  console.log('args', args, arguments);
}
