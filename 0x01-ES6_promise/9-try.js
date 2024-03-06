export default function guardrail(mathFuntion) {
  let queue = [];
  try {
    const res = mathFuntion();
    queue = [res, 'Guardrail was processed'];
  } catch (error) {
    queue = [error.toString(), 'Guardrail was processed'];
  }
  return queue;
}
