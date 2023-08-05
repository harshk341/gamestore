export function setMetascoreColor(score) {
  let color = 'metascore-';
  if (score >= 80) {
    color += 'green';
  } else if (score >= 50) {
    color += 'yellow';
  } else {
    color += 'red';
  }
  return color;
}
