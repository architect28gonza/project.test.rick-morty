import Swal from 'sweetalert2'

export function showAlert(title: string, text: string) {
    Swal.fire({
        title,
        text,
        confirmButtonText: 'Aceptar'
    });
}
