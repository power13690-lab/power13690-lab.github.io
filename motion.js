export const wrap = (value, count) => ((value % count) + count) % count;
export function relativePosition(index, position, count) {
  return wrap(index - position + count / 2, count) - count / 2;
}
export function releaseTarget(position, velocity) {
  return Math.round(position + Math.max(-0.75, Math.min(0.75, velocity * 0.17)));
}
export function springStep(position, velocity, target, dt) {
  const step = Math.min(0.033, Math.max(0, dt));
  const nextVelocity = velocity + ((target - position) * 88 - velocity * 18) * step;
  return { position: position + nextVelocity * step, velocity: nextVelocity };
}
