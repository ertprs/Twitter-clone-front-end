import Swal from "sweetalert2";

export const notify = (
  status: any,
  title: string,
  reload: boolean
) => {
  Swal.fire({
    icon: status,
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
  if (reload) {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
};
