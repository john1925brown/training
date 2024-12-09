const callback = (): number => {
  alert('hey');
  return 12;
};

window.setTimeout(callback, 1000);

const User = () => {
  return <div></div>
}