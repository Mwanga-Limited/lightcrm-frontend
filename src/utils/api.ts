const EXPIRY_TIME = 300000;

export const setWithExpiry = (data: Record<string, unknown>) => {
  const user = {
    data,
    expiry: new Date().getTime() + EXPIRY_TIME,
  };
  localStorage.setItem('accessToken', JSON.stringify(user));
};

export const getTokenWithExpiry = () => {
  const itemStr = localStorage.getItem('accessToken');
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    localStorage.removeItem('accessToken');
    return null;
  }

  setWithExpiry(item.data);
  return item.data.token;
};
