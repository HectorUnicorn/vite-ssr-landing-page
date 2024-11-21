import { ref } from "vue";

export const anchor = ref("#feature");

export const menuShow = ref(false);


export const targetPeopleCtn = ref(1200);
export const targetLifeCtn = ref(2600);

export function toLink(url: string) {
  window.open(url, "_blank");
}
