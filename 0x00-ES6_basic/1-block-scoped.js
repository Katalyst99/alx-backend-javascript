export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // Variable within scope of block
    const task2 = false; // Variable within scope of block
  }

  return [task, task2];
}
