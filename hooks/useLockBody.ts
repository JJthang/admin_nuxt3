export const useLockBody = () => {
  const el = ref<HTMLElement | null>(null);
  const $dv = useDevice();
  const route = useRoute();

  onMounted(() => {
    el.value = document.body;
  });

  const lock = () => {
    if (!el.value) return;
    el.value.style.overflowY = "hidden";
    const isOverflow = el.value.scrollHeight > window.innerHeight;

    if (!$dv.isMobile && isOverflow) {
      el.value.style.paddingRight = "17px";
    }
  };

  const unlock = () => {
    if (!el.value) return;
    el.value.style.overflowY = "auto";

    if (!$dv.isMobile) {
      el.value.style.paddingRight = "0px";
    }
  };

  watch(
    () => [route.params, route.query],
    () => {
      unlock();
    }
  );

  return {
    lock,
    unlock,
  };
};
