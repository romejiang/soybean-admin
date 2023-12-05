<template>
	<div class="h-full">
		<fs-crud ref="crudRef" v-bind="crudBinding"></fs-crud>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useFs, dict } from "@fast-crud/fast-crud";
import createCrudOptions from "@/views/crud";
const apiPrefix = "/admin";
const context: any = {
	apiPrefix,
	columns: {
		username: {
			title: "用户名",
			type: "text",
			search: { show: true },
			column: {
				component: {
					sortOrder: false,
					sorter: "default",
				},
			},
		},
		password: {
			title: "密码",
			type: "text",
			column: {
				show: false,
			},
		},
		avatar: {
			title: "头像",
			type: "cropper-uploader",
		},
		pass: {
			title: "状态",
			search: { show: true },
			type: "dict-switch",
			// dict: dict({
			//   url: `${apiPrefix}/dict`
			// })
			dict: dict({
				data: [
					{ value: true, label: "开启", color: "success" },
					{ value: false, label: "关闭", color: "warning" },
				],
			}),
		},
	},
};

const { crudRef, crudBinding, crudExpose } = useFs({
	createCrudOptions,
	context,
});

onMounted(() => {
	crudExpose.doRefresh();
});
</script>
