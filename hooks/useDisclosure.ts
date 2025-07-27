export default function useDisclosure() {
  const isOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  const onClose = () => {
    isOpen.value = false;
  };
  const onOpen = () => {
    isOpen.value = true;
  };

  return {
    toggle,
    onOpen,
    onClose,
    isOpen,
  };
}
