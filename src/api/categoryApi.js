import axiosClient from "./axiosClient";

const categoryApi = {
  getAll(params) {
    const url = "/categoryProduct";

    return axiosClient.get(url, { params });
  },
  async getTotalPage(params) {
    const url = "/categoryProduct";
    const totalPage = await axiosClient.get(url, { params });
    return Math.ceil(totalPage.length / 12);
  },

  get(id) {
    const url = `/categoryProduct/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = `/categoryProduct`;
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/categoryProduct/`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/categoryProduct/${id}`;
    return axiosClient.delete(url);
  },
};
export default categoryApi;
