const setItems = (data) => {
  Object.entries(data).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
};

const getItems = (key) => localStorage.getItem(key);

const clearItems = (key) => (
  key ? localStorage.removeItem(key) : localStorage.clear()
);

export { setItems, getItems, clearItems };
