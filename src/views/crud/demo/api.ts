import type { UserPageQuery } from '@fast-crud/fast-crud';
import { request } from '@/service/request';

const apiPrefix = '/customer';

export type DemoRecord = {
  id: number;
  [key: string]: any;
};

function resHandle(res: any) {
  return res.data;
}

export async function GetList(query: UserPageQuery) {
  const res = await request({
    url: `${apiPrefix}/page`,
    method: 'post',
    data: query
  });
  return resHandle(res);
}

export async function AddObj(obj: DemoRecord) {
  const res = await request({
    url: `${apiPrefix}/add`,
    method: 'post',
    data: obj
  });
  return resHandle(res);
}

export async function UpdateObj(obj: DemoRecord) {
  const res = await request({
    url: `${apiPrefix}/update`,
    method: 'post',
    data: obj
  });
  return resHandle(res);
}

export async function DelObj(id: number) {
  const res = await request({
    url: `${apiPrefix}/delete`,
    method: 'delete',
    data: { id }
  });
  return resHandle(res);
}

export async function GetObj(id: number) {
  const res = await request({
    url: `${apiPrefix}/`,
    method: 'get',
    data: { params: { id } }
  });
  return resHandle(res);
}

export async function BatchDelete(ids: number[]) {
  const res = await request({
    url: `${apiPrefix}/batchDelete`,
    method: 'post',
    data: { ids }
  });
  return resHandle(res);
}
