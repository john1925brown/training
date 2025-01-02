const callback = (): number => {
  alert('hey');
  return 12;
};

window.setTimeout(callback, 1000);

export const User = () => {
  const deleteUser = () => {
    console.log('user has been deleted');
  };

  const saveUser = () => {
    console.log('user has been saved');
  };

  return (
    <div>
      <button onClick={deleteUser}>delete</button>
      <button onClick={saveUser}>save</button>
    </div>
  );
};
