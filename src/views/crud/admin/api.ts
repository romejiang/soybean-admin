import type { UserPageQuery } from '@fast-crud/fast-crud';
import { request as mockRequest } from '@/service/request';

const request = mockRequest;
const apiPrefix = '/admin';

export type DemoRecord = {
  id: number;
  [key: string]: any;
};

function resHandle(res: any) {
  return res.data;
}
export async function GetList(query: UserPageQuery) {
  const res = await request.post(`${apiPrefix}/list`, query);
  return resHandle(res);
}

export async function AddObj(obj: DemoRecord) {
  const res = await request.post(`${apiPrefix}`, obj);
  return resHandle(res);
}

export async function UpdateObj(obj: DemoRecord) {
  const res = await request.put(`${apiPrefix}/update`, obj);
  return resHandle(res);
}

export async function DelObj(id: number) {
  const res = await request.delete(`${apiPrefix}/${id}`);
  return resHandle(res);
}

export async function GetObj(id: number) {
  const res = await request.get(`${apiPrefix}/info`, { params: { id } });
  return resHandle(res);
}

export async function BatchDelete(ids: number[]) {
  const res = await request.post(`${apiPrefix}/batchDelete`, { ids });
  return resHandle(res);
}
