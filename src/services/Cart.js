import Api from '../utils/Api';

export const addCart = (data) => Api.post('/cart',data);
export const deleteCart = (id) => Api.delete(`/cat/${id}`);
// https://google.com/api/