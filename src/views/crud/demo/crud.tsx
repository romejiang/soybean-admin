import dayjs from 'dayjs';
import type { AddReq, CreateCrudOptionsRet, DelReq, EditReq, UserPageQuery, UserPageRes } from '@fast-crud/fast-crud';
import { dict } from '@fast-crud/fast-crud';
import * as api from './api';

export default function createCrudOptions(): CreateCrudOptionsRet {
  const pageRequest = async (query: UserPageQuery): Promise<UserPageRes> => {
    return api.GetList(query);
  };
  const editRequest = async (ctx: EditReq) => {
    const { form, row } = ctx;
    form.id = row.id;
    return api.UpdateObj(form);
  };
  const delRequest = async (ctx: DelReq) => {
    const { row } = ctx;
    return api.DelObj(row.id);
  };

  const addRequest = async (req: AddReq) => {
    const { form } = req;
    return api.AddObj(form);
  };
  return {
    crudOptions: {
      container: {
        is: 'fs-layout-card'
      },
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest
      },
      columns: {
        id: {
          title: 'ID',
          key: 'id',
          type: 'number',
          column: {
            width: 50
          },
          form: {
            show: false
          }
        },
        createdAt: {
          title: '时间',
          type: 'datetime',
          valueBuilder(context) {
            const { value, row, key } = context;
            if (value) {
              // naive 默认仅支持时间戳作为日期输入与输出
              row[key] = dayjs(value).valueOf();
            }
          },
          valueResolve(context) {
            const { value, form, key } = context;
            if (value) {
              form[key] = dayjs(value).format('YYYY-MM-DD HH:mm:ss');
            }
          }
        },
        wechat: {
          title: '状态',
          search: { show: true },
          type: 'dict-select',
          dict: dict({
            url: '/customer/dict'
          })
        },
        name: {
          title: '文本',
          type: 'text',
          search: { show: true }
        }
      }
    }
  };
}
